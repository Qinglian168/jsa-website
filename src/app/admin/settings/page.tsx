"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/components/admin/AuthProvider";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { loadSettings, saveSettings } from "@/lib/admin/data";
import type { SiteSettings } from "@/lib/admin/types";

export default function SettingsPage() {
  const { isAuthenticated } = useAuth();
  const [settings, setSettings] = useState<SiteSettings | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setSettings(loadSettings());
  }, []);

  if (!isAuthenticated) return null;
  if (!settings) return null;

  const handleSave = () => {
    saveSettings(settings);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <>
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <AdminHeader />
        <main className="flex-1 p-6">
          <div className="max-w-3xl mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-dark">网站设置</h2>
              <p className="text-sm text-gray mt-1">管理公司基本信息、联系方式和 SEO 设置</p>
            </div>

            <div className="bg-white rounded-xl border border-border p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-dark mb-1.5">网站标题</label>
                <input
                  type="text"
                  value={settings.title}
                  onChange={(e) => setSettings({ ...settings, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark mb-1.5">网站描述</label>
                <textarea
                  value={settings.description}
                  onChange={(e) => setSettings({ ...settings, description: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">联系电话</label>
                  <input
                    type="text"
                    value={settings.phone}
                    onChange={(e) => setSettings({ ...settings, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark mb-1.5">联系邮箱</label>
                  <input
                    type="email"
                    value={settings.email}
                    onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-dark mb-1.5">公司地址</label>
                <textarea
                  value={settings.address}
                  onChange={(e) => setSettings({ ...settings, address: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-dark mb-1.5">Meta 关键词</label>
                <textarea
                  value={settings.metaKeywords}
                  onChange={(e) => setSettings({ ...settings, metaKeywords: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                />
                <p className="text-xs text-gray mt-1.5">多个关键词用英文逗号分隔</p>
              </div>

              <div className="pt-4 flex items-center gap-4">
                <button
                  onClick={handleSave}
                  className="px-6 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                >
                  保存设置
                </button>
                {saved && (
                  <span className="text-sm text-green-600 font-medium">已保存到本地</span>
                )}
              </div>

              <div className="p-4 bg-yellow-50 border border-yellow-100 rounded-lg">
                <p className="text-sm text-yellow-800">
                  <strong>注意：</strong>当前设置保存在浏览器本地（localStorage）。
                  若要应用到网站，需要修改对应的源代码文件或使用第三方 CMS。
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
