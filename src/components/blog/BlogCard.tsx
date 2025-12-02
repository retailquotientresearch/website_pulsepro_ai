import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  locale: string;
  title: string;
  slug: string;
  excerpt?: string;
  featured_image_url?: string;
  tags?: string;
  author_name?: string;
  published_at?: string | null;
  className?: string;
};

export function BlogCard({ locale, title, slug, excerpt, featured_image_url, tags, author_name, published_at, className }: Props) {
  const tagList = (tags || "")
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
  const dateStr = published_at ? new Date(published_at).toLocaleDateString(locale, { day: "numeric", month: "long", year: "numeric" }) : null;

  return (
    <Link
      href={`/${locale}/blog/${slug}`}
      className={cn(
        "group overflow-hidden rounded-xl border bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col",
        className
      )}
    >
      <div className="relative w-full bg-gray-100">
        {featured_image_url ? (
          // Use intrinsic layout via width/height by extracting dimensions from query if present
          <Image
            src={featured_image_url}
            alt={title}
            width={800}
            height={450}
            className="w-full h-auto object-contain bg-white"
            sizes="(max-width: 768px) 100vw, (max-width:1024px) 50vw, 33vw"
          />
        ) : (
          <div className="aspect-[16/9] w-full grid place-items-center text-gray-400 text-xs">No image</div>
        )}
      </div>
      <div className="p-6 flex flex-col">
        <span className="text-[10px] font-semibold tracking-widest text-gray-500 mb-2">PULSE</span>
        <h3 className="text-lg font-semibold leading-snug text-gray-900 group-hover:text-indigo-700 min-h-[3rem]">{title}</h3>
        <div className="mt-4 h-px w-32 bg-gray-300" />
        {tagList.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tagList.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded bg-indigo-50 px-2 py-1 text-[11px] font-medium text-indigo-700 border border-indigo-100"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {excerpt && (
          <div
            className="mt-4 text-sm text-gray-600 prose prose-sm max-w-none line-clamp-5"
            // excerpt may contain rich text HTML from editor
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
        )}
        <div className="mt-6 flex items-center gap-4 text-xs text-gray-500">
          {author_name && (
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-semibold text-gray-600">
                {author_name.split(" ").map((p) => p[0]).join("") || "P"}
              </div>
              <span className="font-medium text-gray-700">{author_name}</span>
            </div>
          )}
          {dateStr && <time className="flex items-center gap-1" dateTime={published_at || undefined}>{dateStr}</time>}
        </div>
      </div>
    </Link>
  );
}
