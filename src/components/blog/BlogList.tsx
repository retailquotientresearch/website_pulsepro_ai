"use client";
import { useEffect, useMemo, useState } from "react";
import { fetchBlogList, BlogItem } from "@/lib/blogApi";
import { cn } from "@/lib/utils";
import { BlogCard } from "./BlogCard";
import ReactPaginate from "react-paginate";

type Props = { locale: string };

export function BlogList({ locale }: Props) {
  const [blogs, setBlogs] = useState<BlogItem[]>([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const params = useMemo(() => ({ page, page_size: pageSize }), [page, pageSize]);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetchBlogList(params)
      .then((data) => {
        setBlogs(data.blogs || []);
        setTotalPages(data.total_pages || 0);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [params]);

  return (
    <div className="space-y-8">
      {loading ? (
        <div className="grid gap-8 md:grid-cols-2">
          {Array.from({ length: 2 }).map((_, i) => (
            <div key={i} className="animate-pulse h-96 rounded-xl border bg-gray-50" />
          ))}
        </div>
      ) : error ? (
        <div className="text-red-600">{error}</div>
      ) : blogs.length === 0 ? (
        <div className="rounded-lg border bg-white p-8 text-center text-gray-600">No blogs found.</div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {blogs.map((b) => (
            <BlogCard
              key={b.id}
              locale={locale}
              title={b.title}
              slug={b.slug}
              excerpt={b.excerpt}
              featured_image_url={b.featured_image_url}
              tags={b.tags}
              author_name={b.author_name}
              published_at={b.published_at}
            />
          ))}
        </div>
      )}
      <div className="flex justify-center mt-8">
        <ReactPaginate
          previousLabel={"← Prev"}
          nextLabel={"Next →"}
          pageCount={totalPages}
          onPageChange={({ selected }) => setPage(selected + 1)}
          forcePage={page - 1}
          containerClassName="flex items-center gap-2"
          pageClassName="inline-block"
          pageLinkClassName={cn(
            "min-w-10 h-10 px-3 rounded-md border text-sm font-medium transition-colors flex items-center justify-center",
            "bg-white hover:bg-indigo-50 text-gray-700 border-gray-300"
          )}
          activeLinkClassName="!bg-indigo-600 !text-white !border-indigo-600 hover:!bg-indigo-700"
          previousClassName="inline-block"
          nextClassName="inline-block"
          previousLinkClassName={cn(
            "px-4 h-10 rounded-md border text-sm font-medium transition-colors flex items-center justify-center",
            "bg-white hover:bg-indigo-50 text-gray-700 border-gray-300"
          )}
          nextLinkClassName={cn(
            "px-4 h-10 rounded-md border text-sm font-medium transition-colors flex items-center justify-center",
            "bg-white hover:bg-indigo-50 text-gray-700 border-gray-300"
          )}
          disabledClassName="opacity-50 cursor-not-allowed"
          disabledLinkClassName="hover:bg-white cursor-not-allowed"
          breakLabel="..."
          breakClassName="inline-block"
          breakLinkClassName="min-w-10 h-10 px-3 flex items-center justify-center text-gray-700"
        />
      </div>
    </div>
  );
}
