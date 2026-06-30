export const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || "jsa2026";

export const SITE_INFO = {
  name: "深圳市捷思安科技有限公司",
  englishName: "Shenzhen Jiesian Technology Co., Ltd.",
  brand: "JSA Solution",
  domain: "https://jsasolution.com",
  adminPin: "NA9A7",
  userType: "企业用户",
  licenseCount: 5,
  licenseUsed: 5,
  storageUsed: "1.37G",
  storageTotal: "20G",
  language: "英语",
  frontUrl: "https://www.jsasolution.com",
  launchDate: "2010-01-01",
  expireDate: "2026-09-29",
  productionDays: 49,
  phone: "+86-18929367032",
  email: "info@jsasolution.com",
};

export const ADMIN_MENU = [
  { id: "dashboard", label: "概览", href: "/admin", icon: "🏠" },
  { id: "content", label: "内容管理", href: "/admin/content", icon: "📝" },
  { id: "news", label: "新闻文章", href: "/admin/content/news", icon: "📰", parent: "content" },
  { id: "site", label: "网站设置", href: "/admin/settings", icon: "⚙️" },
  { id: "analytics", label: "运营罗盘", href: "https://analytics.google.com/analytics/web/", icon: "📊", external: true },
];

export const NOTICES = [
  {
    id: 1,
    text: "在发布公司简介、产品信息、文章信息，以及设置网站跳转链接等网站页面内容时，应当按照广告法的要求进行设置，符合广告法！",
  },
  {
    id: 2,
    text: "网站开通之日起30日内到公司实际经营地或个人常住地公安机关履行公安备案手续。",
  },
];
