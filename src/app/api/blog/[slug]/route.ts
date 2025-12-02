import { NextResponse, NextRequest } from "next/server";

export const revalidate = 60;

export async function GET(req: NextRequest) {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!base) return NextResponse.json({ message: "API base not configured" }, { status: 500 });
  const pathParts = req.nextUrl.pathname.split("/");
  const slug = pathParts[pathParts.length - 1] || "";
  const url = new URL(`/customer/blog/${slug}/`, base);
  const res = await fetch(url.toString(), { cache: "no-store" });
  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}
