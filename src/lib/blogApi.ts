// Lightweight blog API client for public GET endpoints
// Relies on NEXT_PUBLIC_API_BASE_URL env variable

export type BlogItem = {
  id: number;
  title: string;
  slug: string;
  excerpt?: string;
  featured_image_url?: string;
  category?: string;
  tags?: string;
  is_published?: boolean;
  created_at?: string;
  author_name?: string;
  published_at?: string | null;
};

export type BlogListResponse = {
  blogs: BlogItem[];
  total: number;
  page: number;
  page_size: number;
  total_pages: number;
};

export type BlogDetail = BlogItem & {
  content?: string;
  attachment_url?: string;
  views_count?: number;
};

const INTERNAL_BASE = "/api/blog";
const EXTERNAL_BASE = process.env.NEXT_PUBLIC_API_BASE_URL;

function buildQuery(params?: Record<string, string | number | undefined>) {
  const qs = new URLSearchParams();
  if (params) {
    Object.entries(params).forEach(([k, v]) => {
      if (v !== undefined && v !== null && `${v}`.length > 0) qs.set(k, String(v));
    });
  }
  return qs.toString();
}

export async function fetchBlogList(args: {
  page?: number;
  page_size?: number;
  category?: string;
  search?: string;
} = {}): Promise<BlogListResponse> {
  const qs = buildQuery({
    page: args.page ?? 1,
    page_size: args.page_size ?? 10,
    category: args.category,
    search: args.search,
  });
  // On server, call external API directly (no CORS). On client, use internal proxy.
  const isServer = typeof window === "undefined";
  let url = "";
  if (isServer) {
    if (!EXTERNAL_BASE) throw new Error("NEXT_PUBLIC_API_BASE_URL is not set");
    url = `${EXTERNAL_BASE}/customer/blog/list/${qs ? `?${qs}` : ""}`;
  } else {
    url = `${INTERNAL_BASE}/list${qs ? `?${qs}` : ""}`;
  }
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`Failed to fetch blogs: ${res.status}`);
  return res.json();
}

export async function fetchBlogBySlug(slug: string): Promise<{ blog: BlogDetail }> {
  const isServer = typeof window === "undefined";
  let url = "";
  if (isServer) {
    if (!EXTERNAL_BASE) throw new Error("NEXT_PUBLIC_API_BASE_URL is not set");
    url = `${EXTERNAL_BASE}/customer/blog/${slug}/`;
  } else {
    url = `${INTERNAL_BASE}/${slug}`;
  }
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`Failed to fetch blog: ${res.status}`);
  return res.json();
}
