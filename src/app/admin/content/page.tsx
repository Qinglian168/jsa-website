"use client";

import { useAuth } from "@/components/admin/AuthProvider";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import Link from "next/link";

const contentModules = [
  {
    id: "news",
    title: "新闻文章",
    desc: "管理公司新闻、行业动态、产品发布等内容",
    href: "/admin/content/news",
    icon: "📰",
    count: "2 篇",
  },
  {
    id: "products",
    title: "产品信息",
    desc: "编辑产品分类、产品描述、品牌信息",
    href: "#",
    icon: "📦",
    count: "即将上线",
    disabled: true,
  },
  {
    id: "settings",
    title: "网站设置",
    desc: "修改公司信息、联系方式、SEO 设置",
    href: "/admin/settings",
    icon: "⚙️",
    count: "",
  },
];

export default function ContentPage() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return null;

  return (
    <>
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <AdminHeader />
        <main className="flex-1 p-6">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-dark">内容管理</h2>
              <p className="text-sm text-gray mt-1">管理网站各类内容，支持新闻文章、产品信息、网站设置</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {contentModules.map((module) => (
                <Link
                  key={module.id}
                  href={module.href}
                  className={`block bg-white rounded-xl border border-border p-6 transition-all ${
                    module.disabled
                      ? "opacity-60 cursor-not-allowed"
                      : "hover:border-primary hover:shadow-md"
                  }`}
                  onClick={(e) => module.disabled && e.preventDefault()}
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-3xl">{module.icon}</span>
                    <span className="text-xs font-medium text-gray bg-slate-100 px-2 py-1 rounded">
                      {module.count}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-dark mb-2">{module.title}</h3>
                  <p className="text-sm text-gray">{module.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
