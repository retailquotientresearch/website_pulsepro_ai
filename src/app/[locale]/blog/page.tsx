import { BlogHeader } from "@/components/blog/BlogHeader";
import { BlogList } from "@/components/blog/BlogList";
import { routing } from "@/i18n/routing";
import Section from "@/components/ui/Section";
import Container from "@/components/ui/Container";

export default async function BlogPage({ params }: { params: Promise<{ locale: (typeof routing.locales)[number] }> }) {
  const { locale } = await params;
  return (
    <>
      <Section className="pt-28 pb-12 bg-[#FFFFEB] relative overflow-hidden">
        <Container>
          <BlogHeader />
        </Container>
      </Section>
      <Section padding="lg">
        <Container>
          <BlogList locale={locale} />
        </Container>
      </Section>
    </>
  );
}
