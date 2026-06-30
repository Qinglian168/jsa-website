import { Client } from "@notionhq/client";
import type { NewsItem } from "@/lib/admin/types";

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_NEWS_DATABASE_ID = process.env.NOTION_NEWS_DATABASE_ID;

const notion = NOTION_TOKEN ? (new Client({ auth: NOTION_TOKEN }) as any) : null;

export function isNotionConfigured(): boolean {
  return Boolean(NOTION_TOKEN && NOTION_NEWS_DATABASE_ID);
}

export async function fetchNewsFromNotion(): Promise<NewsItem[]> {
  if (!notion || !NOTION_NEWS_DATABASE_ID) {
    throw new Error("Notion is not configured");
  }

  const response = await notion.databases.query({
    database_id: NOTION_NEWS_DATABASE_ID,
    filter: {
      property: "Published",
      checkbox: {
        equals: true,
      },
    },
    sorts: [
      {
        property: "Date",
        direction: "descending",
      },
    ],
  });

  return response.results.map((page: any) => {
    const properties = page.properties;
    const title = properties.Title?.title?.[0]?.plain_text || "";
    const excerpt = properties.Excerpt?.rich_text?.[0]?.plain_text || "";
    const slug = properties.Slug?.rich_text?.[0]?.plain_text || "";
    const date = properties.Date?.date?.start || "";
    const published = properties.Published?.checkbox || false;

    // Format date to "June 30, 2026"
    const formattedDate = date
      ? new Date(date).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

    return {
      id: page.id,
      title,
      excerpt,
      slug,
      date: formattedDate,
      published,
    };
  });
}

export function getNotionSetupInstructions(): string {
  return `1. 访问 https://www.notion.so/my-integrations 创建 Integration
2. 复制 Token，设置为环境变量 NOTION_TOKEN
3. 在 Notion 中创建一个数据库，包含以下字段：
   - Title (title)
   - Excerpt (rich text)
   - Slug (rich text)
   - Date (date)
   - Published (checkbox)
4. 将数据库分享给 Integration
5. 复制数据库 ID，设置为环境变量 NOTION_NEWS_DATABASE_ID
6. 重新构建网站即可自动从 Notion 读取新闻`;
}
