"use client";

import { useState, useEffect } from "react";
import { useAuth } from "@/components/admin/AuthProvider";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { loadNews, saveNews, generateNewsPageCode } from "@/lib/admin/data";
import type { NewsItem } from "@/lib/admin/types";

interface NewsManagementClientProps {
  notionConfigured: boolean;
  notionDatabaseId: string | null;
}

export default function NewsManagementClient({
  notionConfigured,
  notionDatabaseId,
}: NewsManagementClientProps) {
  const { isAuthenticated } = useAuth();
  const [news, setNews] = useState<NewsItem[]>([]);
  const [editing, setEditing] = useState<NewsItem | null>(null);
  const [generatedCode, setGeneratedCode] = useState("");
  const [showCode, setShowCode] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setNews(loadNews());
  }, []);

  if (!isAuthenticated) return null;

  const handleSave = () => {
    if (!editing) return;
    const updated = editing.id
      ? news.map((item) => (item.id === editing.id ? editing : item))
      : [...news, { ...editing, id: Date.now().toString() }];
    setNews(updated);
    saveNews(updated);
    setEditing(null);
  };

  const handleDelete = (id: string) => {
    if (!confirm("确定要删除这篇文章吗？")) return;
    const updated = news.filter((item) => item.id !== id);
    setNews(updated);
    saveNews(updated);
  };

  const handleGenerateCode = () => {
    const publishedNews = news.filter((item) => item.published);
    setGeneratedCode(generateNewsPageCode(publishedNews));
    setShowCode(true);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const startNew = () => {
    setEditing({
      id: "",
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      title: "",
      excerpt: "",
      slug: "",
      published: true,
    });
  };

  return (
    <>
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <AdminHeader />
        <main className="flex-1 p-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
              <div>
                <h2 className="text-2xl font-bold text-dark">新闻文章管理</h2>
                <p className="text-sm text-gray mt-1">添加、编辑、发布新闻文章</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={handleGenerateCode}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-border text-dark font-medium rounded-lg hover:bg-slate-50 transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  生成代码
                </button>
                <button
                  onClick={startNew}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  新增文章
                </button>
              </div>
            </div>

            {/* News list */}
            <div className="bg-white rounded-xl border border-border overflow-hidden mb-6">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-slate-50 border-b border-border">
                    <tr>
                      <th className="px-4 py-3 text-left font-semibold text-dark">标题</th>
                      <th className="px-4 py-3 text-left font-semibold text-dark">Slug</th>
                      <th className="px-4 py-3 text-left font-semibold text-dark">日期</th>
                      <th className="px-4 py-3 text-left font-semibold text-dark">状态</th>
                      <th className="px-4 py-3 text-right font-semibold text-dark">操作</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {news.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="px-4 py-8 text-center text-gray">
                          暂无文章，点击"新增文章"添加
                        </td>
                      </tr>
                    ) : (
                      news.map((item) => (
                        <tr key={item.id} className="hover:bg-slate-50">
                          <td className="px-4 py-3">
                            <div className="font-medium text-dark">{item.title}</div>
                            <div className="text-xs text-gray mt-1 line-clamp-1">{item.excerpt}</div>
                          </td>
                          <td className="px-4 py-3 text-gray font-mono text-xs">{item.slug}</td>
                          <td className="px-4 py-3 text-gray">{item.date}</td>
                          <td className="px-4 py-3">
                            <button
                              onClick={() => {
                                const updated = news.map((n) =>
                                  n.id === item.id ? { ...n, published: !n.published } : n
                                );
                                setNews(updated);
                                saveNews(updated);
                              }}
                              className={`px-2.5 py-1 rounded-full text-xs font-medium transition-colors ${
                                item.published
                                  ? "bg-green-100 text-green-700"
                                  : "bg-gray-100 text-gray-600"
                              }`}
                            >
                              {item.published ? "已发布" : "草稿"}
                            </button>
                          </td>
                          <td className="px-4 py-3 text-right">
                            <div className="flex items-center justify-end gap-2">
                              <button
                                onClick={() => setEditing(item)}
                                className="p-2 text-primary hover:bg-primary-light rounded-lg transition-colors"
                                title="编辑"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                              </button>
                              <button
                                onClick={() => handleDelete(item.id)}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="删除"
                              >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Edit modal */}
            {editing && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="bg-white rounded-xl border border-border w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl">
                  <div className="p-6 border-b border-border">
                    <h3 className="text-lg font-bold text-dark">
                      {editing.id ? "编辑文章" : "新增文章"}
                    </h3>
                  </div>
                  <div className="p-6 space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">标题</label>
                      <input
                        type="text"
                        value={editing.title}
                        onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                        placeholder="请输入文章标题"
                      />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-dark mb-1.5">日期</label>
                        <input
                          type="text"
                          value={editing.date}
                          onChange={(e) => setEditing({ ...editing, date: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                          placeholder="June 30, 2026"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark mb-1.5">Slug</label>
                        <input
                          type="text"
                          value={editing.slug}
                          onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                          placeholder="article-slug"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark mb-1.5">摘要</label>
                      <textarea
                        value={editing.excerpt}
                        onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-2.5 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm resize-none"
                        placeholder="请输入文章摘要"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        id="published"
                        checked={editing.published}
                        onChange={(e) => setEditing({ ...editing, published: e.target.checked })}
                        className="w-4 h-4 text-primary rounded border-gray-300 focus:ring-primary"
                      />
                      <label htmlFor="published" className="text-sm text-dark">
                        发布文章
                      </label>
                    </div>
                  </div>
                  <div className="p-6 border-t border-border flex justify-end gap-3">
                    <button
                      onClick={() => setEditing(null)}
                      className="px-4 py-2 bg-white border border-border text-dark font-medium rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      取消
                    </button>
                    <button
                      onClick={handleSave}
                      className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      保存
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Generated code modal */}
            {showCode && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
                <div className="bg-white rounded-xl border border-border w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl">
                  <div className="p-6 border-b border-border flex items-center justify-between">
                    <h3 className="text-lg font-bold text-dark">生成的新闻列表代码</h3>
                    <button
                      onClick={() => setShowCode(false)}
                      className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                    >
                      <svg className="w-5 h-5 text-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-gray mb-3">
                      复制以下代码，替换 <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">src/app/events-news/page.tsx</code> 中的 <code className="bg-slate-100 px-1 py-0.5 rounded text-xs">newsItems</code> 数组：
                    </p>
                    <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-xs leading-relaxed">
                      <code>{generatedCode}</code>
                    </pre>
                    <div className="mt-4 flex gap-3">
                      <button
                        onClick={copyToClipboard}
                        className="px-4 py-2 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors"
                      >
                        {copied ? "已复制" : "复制代码"}
                      </button>
                      <button
                        onClick={() => setShowCode(false)}
                        className="px-4 py-2 bg-white border border-border text-dark font-medium rounded-lg hover:bg-slate-50 transition-colors"
                      >
                        关闭
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Notion integration status */}
            <div className={`border rounded-xl p-6 ${notionConfigured ? "bg-green-50 border-green-100" : "bg-blue-50 border-blue-100"}`}>
              <div className="flex items-start gap-4">
                <div className="text-2xl">{notionConfigured ? "✅" : "💡"}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-dark mb-1">
                    {notionConfigured ? "Notion 第三方 CMS 已连接" : "即将支持 Notion 作为第三方 CMS"}
                  </h3>
                  <p className="text-sm text-gray leading-relaxed">
                    {notionConfigured
                      ? `新闻文章将在构建时自动从 Notion 数据库同步（数据库 ID：${notionDatabaseId}）。你可以在 Notion 中编辑内容，重新构建网站后即可生效。`
                      : "当前编辑的数据保存在浏览器本地（localStorage）。若要实现真正的云端内容管理，可连接 Notion 数据库。请提供 Notion Integration Token 和数据库 ID，我将帮你完成接入。"}
                  </p>
                  {notionConfigured && notionDatabaseId && (
                    <a
                      href={`https://notion.so/${notionDatabaseId.replace(/-/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-sm text-primary hover:underline"
                    >
                      在 Notion 中打开数据库
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
