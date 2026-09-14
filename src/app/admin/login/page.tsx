"use client";

import { useState } from "react";
import { useAuth } from "@/components/admin/AuthProvider";
import Image from "next/image";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const result = await login(password);

    if (!result.success) {
      setError(result.error || "密码错误，请重试");
      setPassword("");
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-cyan/5 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl border border-border w-full max-w-md p-8">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="relative w-16 h-16">
              <Image
                src="/logo.png"
                alt="JSA Solution"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-dark">管理后台登录</h1>
          <p className="text-sm text-gray mt-2">JSA Solution 网站内容管理系统</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-dark mb-1.5">
              管理密码
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="请输入管理密码"
              className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
              required
            />
            <p className="text-xs text-gray mt-2">
              登录后 8 小时有效，关闭浏览器即自动退出。管理员需通过环境变量
              NEXT_PUBLIC_ADMIN_PASSWORD_HASH 维护密码哈希。
            </p>
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-100 rounded-lg text-sm text-red-600">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 px-4 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "登录中..." : "登录"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-primary hover:underline">
            ← 返回前台网站
          </a>
        </div>
      </div>
    </div>
  );
}
