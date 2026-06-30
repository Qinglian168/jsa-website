"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ClientShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <div className="min-h-full flex flex-col">
      {!isAdmin && <Header />}
      <main className={isAdmin ? "" : "flex-1"}>{children}</main>
      {!isAdmin && <Footer />}
    </div>
  );
}
