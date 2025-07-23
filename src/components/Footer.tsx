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

const footerLinks = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Integrations", href: "/integrations" },
    { name: "API", href: "/api" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Help Center", href: "/help" },
    { name: "Documentation", href: "/docs" },
    { name: "Community", href: "/community" },
    { name: "Status", href: "/status" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "GDPR", href: "/gdpr" },
  ],
};

export default function Footer() {
  const t = useTranslations("footer");
  const tooltipT = useTranslations("tooltips");

  return (
    <Section className="!bg-black text-white" padding="xl">
      <Container>
        {/* CTA Section */}
        <div className="text-center mb-16 pb-16 border-b border-gray-700">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {t("tagline")}
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-black hover:bg-gray-100">{t("cta")}</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-black">
              {t("secondaryCta")}
            </Button>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t("links.product")}</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t("links.company")}</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t("links.support")}</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">{t("links.legal")}</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <div className="relative h-14 w-44 flex items-center justify-center">
                <Image
                  src="/images/pulse-white.png"
                  alt="PulsePro.ai"
                  width={1184}
                  height={372}
                  className="h-12 w-auto object-contain"
                />
              </div>
            </div>

            <TooltipProvider>
              <div className="flex items-center space-x-6">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label="Twitter"
                    >
                      <i className="ri-twitter-x-fill text-xl"></i>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tooltipT("socialMedia.twitter")}</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label="LinkedIn"
                    >
                      <i className="ri-linkedin-fill text-xl"></i>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tooltipT("socialMedia.linkedin")}</p>
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                      aria-label="Youtube"
                    >
                      <i className="ri-youtube-fill text-xl"></i>
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{tooltipT("socialMedia.youtube")}</p>
                  </TooltipContent>
                </Tooltip>
              </div>
            </TooltipProvider>
          </div>

          <div className="text-center text-gray-400 text-sm mt-6">
            {t("copyright")}
          </div>
        </div>
      </Container>
    </Section>
  );
}
