"use client";

import { SITE_INFO, NOTICES } from "@/lib/admin/config";

export default function AdminHeader() {
  return (
    <div className="bg-white border-b border-border">
      {/* Top notices */}
      <div className="bg-orange-50 px-6 py-2.5">
        <div className="space-y-1">
          {NOTICES.map((notice, index) => (
            <div key={notice.id} className="flex items-start gap-2 text-sm text-orange-700">
              <span className="font-medium shrink-0">{index + 1}.</span>
              <span>{notice.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Page header */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-dark">我的网站</h1>
            <p className="text-sm text-gray mt-0.5">{SITE_INFO.frontUrl}</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-gray">运行正常</span>
          </div>
        </div>
      </div>
    </div>
  );
}
