"use client";

import { createContext, useContext, useEffect, useState, ReactNode, useCallback, useRef } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  ADMIN_PASSWORD_HASH,
  LOGIN_LOCK_MS,
  MAX_LOGIN_ATTEMPTS,
  hashPassword,
  readSession,
  safeCompare,
  writeSession,
  clearSession,
} from "@/lib/admin/auth";

export interface LoginResult {
  success: boolean;
  error?: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => Promise<LoginResult>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [mounted, setMounted] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Brute-force throttle state (per tab — reset on reload, which is the point:
  // it stops scripted guessing inside a live session, not a determined attacker).
  const failedAttempts = useRef(0);
  const lockedUntil = useRef(0);

  useEffect(() => {
    setMounted(true);
    const session = readSession();
    if (session && safeCompare(session.token, ADMIN_PASSWORD_HASH)) {
      setIsAuthenticated(true);
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (!isAuthenticated && pathname !== "/admin/login") {
      router.replace("/admin/login");
    }
    if (isAuthenticated && pathname === "/admin/login") {
      router.replace("/admin");
    }
  }, [isAuthenticated, pathname, router, mounted]);

  const login = useCallback(async (password: string): Promise<LoginResult> => {
    const now = Date.now();

    if (lockedUntil.current > now) {
      const seconds = Math.ceil((lockedUntil.current - now) / 1000);
      return { success: false, error: `尝试失败次数过多，请 ${seconds} 秒后重试` };
    }

    const hash = await hashPassword(password);

    if (!hash) {
      return {
        success: false,
        error: "当前浏览器环境不支持安全校验（需 HTTPS 或 localhost 访问）",
      };
    }

    if (!safeCompare(hash, ADMIN_PASSWORD_HASH)) {
      failedAttempts.current += 1;
      const remaining = MAX_LOGIN_ATTEMPTS - failedAttempts.current;
      if (remaining <= 0) {
        lockedUntil.current = now + LOGIN_LOCK_MS;
        failedAttempts.current = 0;
        return { success: false, error: "密码错误次数过多，已锁定 60 秒" };
      }
      return {
        success: false,
        error: remaining <= 2 ? `密码错误，还可尝试 ${remaining} 次` : "密码错误，请重试",
      };
    }

    failedAttempts.current = 0;
    lockedUntil.current = 0;
    writeSession(hash);
    setIsAuthenticated(true);
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    clearSession();
    setIsAuthenticated(false);
    router.replace("/admin/login");
  }, [router]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
