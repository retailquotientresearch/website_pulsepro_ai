import { NextResponse } from "next/server";

export const revalidate = 60;

export async function GET(req: Request) {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!base) return NextResponse.json({ message: "API base not configured" }, { status: 500 });
  const { search } = new URL(req.url);
  const url = new URL("/customer/blog/list/", base);
  // forward search params
  const srcParams = new URLSearchParams(search);
  srcParams.forEach((v, k) => url.searchParams.set(k, v));

  const res = await fetch(url.toString(), { cache: "no-store" });
  const data = await res.json().catch(() => ({}));
  return NextResponse.json(data, { status: res.status });
}
