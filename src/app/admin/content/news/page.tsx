import { isNotionConfigured } from "@/lib/notion";
import NewsManagementClient from "./NewsManagementClient";

export default function NewsManagementPage() {
  const notionConfigured = isNotionConfigured();
  const notionDatabaseId = process.env.NOTION_NEWS_DATABASE_ID || null;

  return (
    <NewsManagementClient
      notionConfigured={notionConfigured}
      notionDatabaseId={notionDatabaseId}
    />
  );
}
