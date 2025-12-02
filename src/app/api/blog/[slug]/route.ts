import { NextResponse } from "next/server";

export const revalidate = 60;

export async function GET(
  _req: Request,
  { params }: { params: { slug: string } }
) {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!base) return NextResponse.json({ message: "API base not configured" }, { status: 500 });
  const url = new URL(`/customer/blog/${params.slug}/`, base);
  const res = await fetch(url.toString(), { cache: "no-store" });
  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}
