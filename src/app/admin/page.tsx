"use client";

import { useState } from "react";
import { useAuth } from "@/components/admin/AuthProvider";
import AdminSidebar from "@/components/admin/AdminSidebar";
import AdminHeader from "@/components/admin/AdminHeader";
import { SITE_INFO } from "@/lib/admin/config";
import Link from "next/link";

export default function AdminDashboard() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) return null;

  return (
    <>
      <AdminSidebar />
      <div className="flex-1 flex flex-col min-h-screen">
        <AdminHeader />
        <main className="flex-1 p-6">
          <div className="max-w-5xl mx-auto">
            {/* Company title */}
            <div className="bg-white rounded-xl border border-border p-6 mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-dark">{SITE_INFO.name}</h2>
                  <p className="text-sm text-gray mt-1">{SITE_INFO.englishName}</p>
                </div>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 text-green-700 text-sm font-medium rounded-lg border border-green-100">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.297 1.26.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  已授权服务商管理
                </span>
              </div>
            </div>

            {/* Info grid */}
            <div className="bg-white rounded-xl border border-border p-6 mb-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <InfoRow label="授权数量" value={`${SITE_INFO.licenseUsed} / ${SITE_INFO.licenseCount}`} action={<Link href="/admin/settings" className="text-sm text-primary hover:underline">查看已授权员工</Link>} />
                <InfoRow label="空间容量" value={`${SITE_INFO.storageUsed} / ${SITE_INFO.storageTotal}`} progress />
                <InfoRow label="选择语种" value={SITE_INFO.language} badge />
                <InfoRow label="前台网址" value={SITE_INFO.frontUrl} link />
                <InfoRow label="制作耗时" value={`${SITE_INFO.productionDays} 天`} />
                <InfoRow label="开通日期" value={SITE_INFO.launchDate} />
                <InfoRow label="到期日期" value={SITE_INFO.expireDate} highlight />
              </div>
            </div>

            {/* Quick actions */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/admin/content/news"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                编辑网站
              </Link>
              <Link
                href="/admin/content"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M5 12h14M5 8h14" />
                </svg>
                内容管理
              </Link>
              <Link
                href="/admin/content/products"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                产品管理
              </Link>
              <a
                href="https://analytics.google.com/analytics/web/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
                运营罗盘
              </a>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-border text-dark font-semibold rounded-lg hover:bg-slate-50 transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                服务进度
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

function InfoRow({
  label,
  value,
  action,
  progress,
  badge,
  link,
  highlight,
}: {
  label: string;
  value: string;
  action?: React.ReactNode;
  progress?: boolean;
  badge?: boolean;
  link?: boolean;
  highlight?: boolean;
}) {
  const [progressPercent] = useState(() => {
    if (!progress) return 0;
    const used = parseFloat(SITE_INFO.storageUsed);
    const total = parseFloat(SITE_INFO.storageTotal);
    return Math.min(100, Math.round((used / total) * 100));
  });

  return (
    <div className="space-y-2">
      <div className="text-sm text-gray">{label}</div>
      <div className="flex items-center gap-3">
        {progress ? (
          <div className="flex-1 flex items-center gap-3">
            <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-sm font-semibold text-dark">{value}</span>
          </div>
        ) : badge ? (
          <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded border border-primary/20">
            {value}
          </span>
        ) : link ? (
          <a
            href={value}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-dark hover:text-primary"
          >
            {value}
          </a>
        ) : (
          <span className={`text-sm font-semibold ${highlight ? "text-red-600" : "text-dark"}`}>
            {value}
          </span>
        )}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
}
