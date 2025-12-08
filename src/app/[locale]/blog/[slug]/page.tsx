import Image from "next/image";
import { fetchBlogBySlug } from "@/lib/blogApi";
import { routing } from "@/i18n/routing";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

type Props = { params: Promise<{ locale: (typeof routing.locales)[number]; slug: string }> };

export default async function BlogDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const { blog } = await fetchBlogBySlug(slug);

  let contentHtml = blog.content || "";
  if (contentHtml) {
    contentHtml = contentHtml
      .replace(/<title[^>]*>[\s\S]*?<\/title>/gi, "")
      .replace(/<meta[^>]*>/gi, "")
      .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
      .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "");
    // Decode common HTML entities if content came double-escaped
    contentHtml = contentHtml
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&amp;/g, "&")
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'");
    // Collapse multiple empty paragraphs
    contentHtml = contentHtml.replace(/(<p>\s*<\/p>){2,}/g, "<p></p>");
  }

  return (
    <>
      <Section className="bg-[#FFFFEB] pt-28 pb-6">
        <Container>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">{blog.title}</h1>
          {blog.category && <p className="mt-2 text-sm text-gray-600">{blog.category}</p>}
          <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-gray-600">
            {blog.author_name && (
              <span className="flex items-center gap-2">
                <span className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-[10px] font-semibold text-gray-600">
                  {blog.author_name.split(' ').map(p=>p[0]).join('')}
                </span>
                <span className="font-medium text-gray-700">{blog.author_name}</span>
              </span>
            )}
            {blog.published_at && (
              <time dateTime={blog.published_at} className="flex items-center gap-1">
                {new Date(blog.published_at).toLocaleDateString(locale, { day:'numeric', month:'long', year:'numeric' })}
              </time>
            )}
            {/* Reading time estimate */}
            {contentHtml && (()=>{
              const words = contentHtml.replace(/<[^>]+>/g,' ').trim().split(/\s+/).filter(Boolean).length;
              const minutes = Math.max(1, Math.round(words / 200));
              return <span>{minutes} min read</span>;
            })()}
          </div>
        </Container>
      </Section>
      <Section padding="lg">
        <Container>
          {blog.featured_image_url && (
            <div className="relative my-6 aspect-[16/9] w-full rounded-xl overflow-hidden border">
              <Image src={blog.featured_image_url} alt={blog.title} fill className="object-cover" sizes="100vw" />
            </div>
          )}
          <article className="prose prose-lg md:prose-xl max-w-none dark:prose-invert prose-headings:font-bold prose-headings:tracking-tight prose-h1:text-4xl prose-h1:leading-tight prose-h1:mb-6 prose-h1:mt-8 prose-h2:text-3xl prose-h2:leading-snug prose-h2:mt-10 prose-h2:mb-5 prose-h3:text-2xl prose-h3:leading-snug prose-h3:mt-8 prose-h3:mb-4 prose-h4:text-xl prose-h4:mt-6 prose-h4:mb-3 prose-h5:text-lg prose-h5:mt-4 prose-h5:mb-2 prose-p:text-lg prose-p:leading-8 prose-p:mb-5 prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-li:text-lg prose-li:leading-8 prose-a:text-indigo-600 prose-a:no-underline hover:prose-a:underline prose-strong:font-semibold prose-strong:text-gray-900 dark:prose-strong:text-white prose-img:rounded-lg prose-img:shadow-md prose-blockquote:border-l-4 prose-blockquote:border-indigo-300 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-700 prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-pink-600 prose-pre:bg-gray-900 prose-pre:text-gray-100 [&_table]:w-full [&_table]:border-collapse [&_table]:border [&_table]:border-gray-300 [&_th]:border [&_th]:border-gray-300 [&_th]:bg-gray-50 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_td]:border [&_td]:border-gray-300 [&_td]:px-4 [&_td]:py-2 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:mb-5 [&_ol]:list-decimal [&_ol]:pl-6 [&_ol]:mb-5">
            {contentHtml && <div className="blog-content" dangerouslySetInnerHTML={{ __html: contentHtml }} />}
            {blog.attachment_url && (
              <p className="mt-8">
                <a className="inline-flex items-center gap-2 rounded-md border px-4 py-2 text-base hover:bg-gray-50 transition-colors" href={blog.attachment_url} target="_blank" rel="noopener noreferrer">
                  Download attachment
                </a>
              </p>
            )}
          </article>
        </Container>
      </Section>
    </>
  );
}
