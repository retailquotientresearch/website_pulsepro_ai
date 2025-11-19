"use client";

import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ROUTES, EXTERNAL_LINKS } from "@/config/links";

type FooterLink = { name: string; href: string; external?: boolean };
interface FooterGroup { titleKey: string; links: FooterLink[] }

const groups: FooterGroup[] = [
  {
    titleKey: "links.product",
    links: [
      { name: "Home", href: ROUTES.home },
      { name: "Features", href: ROUTES.features },
      { name: "How It Works", href: ROUTES.howItWorks },
      { name: "Pricing", href: ROUTES.pricing },
      { name: "API Integration", href: ROUTES.apiIntegration },
    ],
  },
  {
    titleKey: "links.company",
    links: [
      { name: "Book a Demo", href: ROUTES.bookDemo },
      { name: "Blog", href: EXTERNAL_LINKS.blog, external: true },
    ],
  },
  {
    titleKey: "links.legal",
    links: [
      { name: "Privacy Policy", href: ROUTES.privacyPolicy },
      { name: "Terms of Service", href: ROUTES.termsOfService },
    ],
  },
];

export default function Footer() {
  const t = useTranslations("footer");
  const tooltipT = useTranslations("tooltips");

  return (
    <Section className="relative overflow-hidden text-white" padding="xl">
      <div className="absolute inset-0 bg-black" />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-96 w-[70rem] rounded-full bg-gradient-to-r from-purple-700/20 via-pink-600/10 to-purple-700/20 blur-3xl opacity-40" />
      <Container className="relative">
        {/* CTA Section */}
        {/* <div className="text-center mb-16 pb-16 border-b border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t("tagline")}
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={EXTERNAL_LINKS.register}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white text-black hover:bg-gray-100 font-medium"
            >
              {t("cta")}
            </a>
            <Link
              href={ROUTES.bookDemo}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white text-white hover:bg-white hover:text-black font-medium"
            >
              {t("secondaryCta")}
            </Link>
          </div>
        </div> */}

        {/* Links Section */}
        <div className="mb-12">
          <div className="mx-auto max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-14 justify-items-center">
            {groups.map((group) => (
              <div key={group.titleKey} className="w-full">
                <h3 className="mb-5 font-semibold tracking-wide text-sm uppercase text-gray-200 flex items-center gap-3">
                  <span className="h-px w-8 bg-gradient-to-r from-[#1A7D3D] via-[#1A7D3D] to-[#166534] rounded" />
                  <span className="text-base normal-case font-medium text-white">{t(group.titleKey)}</span>
                </h3>
                <ul className="space-y-2">
                  {group.links.map((link) => (
                    <li key={link.name}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-150 text-sm"
                        >
                          <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:transition-all after:duration-300 group-hover:after:w-full">
                            {link.name}
                          </span>
                          <i className="ri-arrow-right-up-line opacity-0 group-hover:opacity-60 translate-x-0 group-hover:translate-x-1 transition-all text-xs" />
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="group inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-150 text-sm"
                        >
                          <span className="relative after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gradient-to-r after:from-purple-500 after:to-pink-500 after:transition-all after:duration-300 group-hover:after:w-full">
                            {link.name}
                          </span>
                          <i className="ri-arrow-right-line opacity-0 group-hover:opacity-60 translate-x-0 group-hover:translate-x-1 transition-all text-xs" />
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-10">
            <div className="flex items-center">
              <div className="relative h-14 w-48 flex items-center justify-center">
                <Image
                  src="/images/pulse-white.png"
                  alt="PulsePro.ai"
                  width={1184}
                  height={372}
                  className="h-12 w-auto object-contain drop-shadow-lg"
                />
              </div>
            </div>

            <TooltipProvider>
              <div className="flex items-center space-x-6">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href={EXTERNAL_LINKS.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative inline-flex items-center justify-center h-12 w-12 rounded-full border border-[#0A66C2] bg-[#0A66C2]/10 hover:bg-[#0A66C2]/20 shadow-[0_0_0_3px_rgba(10,102,194,0.15)] hover:shadow-[0_0_0_4px_rgba(10,102,194,0.25)] transition-all"
                      aria-label="LinkedIn"
                    >
                      <i className="ri-linkedin-fill text-[26px] text-[#0A66C2] group-hover:scale-110 transition-transform"></i>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tooltipT("socialMedia.linkedin")}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>

          <div className="text-center text-gray-400 text-sm mt-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-12 bg-gray-800" />
              <span className="text-gray-500 text-xs tracking-wide">{t("copyright")}</span>
              <span className="h-px w-12 bg-gray-800" />
            </div>
            <p className="text-xs text-gray-500 tracking-wide uppercase">Built for reliability & clarity</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
