import type { Metadata } from "next";
import Link from "next/link";
import { fetchNewsFromNotion, isNotionConfigured } from "@/lib/notion";
import { INITIAL_NEWS } from "@/lib/admin/data";
import type { NewsItem } from "@/lib/admin/types";

export const metadata: Metadata = {
  title: "Events & News - Network Equipment Industry Updates | JSA Solution",
  description: "Latest events, product updates, and industry news from JSA Solution. Stay informed about Cisco, Huawei, Fortinet, H3C networking innovations and AI-ready infrastructure trends.",
  alternates: { canonical: "/events-news" },
  openGraph: {
    title: "Events & News - Network Equipment Industry Updates",
    description: "Latest events, product updates, and industry news from JSA Solution.",
    url: "https://jsasolution.com/events-news",
    type: "website",
  },
};

async function getNews(): Promise<NewsItem[]> {
  if (!isNotionConfigured()) {
    return INITIAL_NEWS;
  }

  try {
    const notionNews = await fetchNewsFromNotion();
    return notionNews.length > 0 ? notionNews : INITIAL_NEWS;
  } catch (error) {
    console.error("Failed to fetch news from Notion:", error);
    return INITIAL_NEWS;
  }
}

export default async function EventsNewsPage() {
  const newsItems = await getNews();

  return (
    <div className="min-h-screen bg-[#f0f7ff]">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-primary/80 text-white py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-extrabold tracking-tight mb-4">
            Events & News
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Stay updated with the latest product launches, industry insights, and company announcements from JSA Solution.
          </p>
        </div>
      </section>

      {/* News List */}
      <section className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {newsItems.map((item) => (
              <article key={item.slug} className="bg-white rounded-xl shadow-sm border border-border p-6 lg:p-8 hover:shadow-md transition-shadow">
                <time className="text-xs font-semibold text-primary/60 uppercase tracking-wider">{item.date}</time>
                <h2 className="text-xl lg:text-2xl font-bold text-dark mt-2 mb-3">
                  <Link href={`/events-news/${item.slug}`} className="hover:text-primary transition-colors">
                    {item.title}
                  </Link>
                </h2>
                <p className="text-gray leading-relaxed mb-4">{item.excerpt}</p>
                <Link
                  href={`/events-news/${item.slug}`}
                  className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                >
                  Read More
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white border-t border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold text-dark mb-4">Subscribe to Our Updates</h2>
          <p className="text-gray mb-8 max-w-xl mx-auto">
            Be the first to know about new product launches, special offers, and industry insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button className="btn-primary px-6 py-3 text-sm font-semibold rounded-lg whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
