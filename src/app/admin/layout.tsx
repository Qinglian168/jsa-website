import type { Metadata } from "next";
import { AuthProvider } from "@/components/admin/AuthProvider";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "管理后台 | JSA Solution",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-[#f5f7fa] flex">{children}</div>
    </AuthProvider>
  );
}
