import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
}

export default function HeroSection({ 
  title, 
  subtitle,
  imageSrc, 
  imageAlt, 
  imageWidth = 500, 
  imageHeight = 400 
}: HeroSectionProps) {
  return (
    <Section className="pt-32 pb-16 relative overflow-hidden">
      {/* Enhanced gradient background matching the FAQ design */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-purple-50 to-pink-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-gradient-to-br from-purple-400/30 to-pink-400/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-40 w-96 h-96 bg-gradient-to-tr from-pink-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>

          {/* Right side - Illustration */}
          <div className="flex justify-center lg:justify-end order-first lg:order-last">
            <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[5/4]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={imageWidth}
                height={imageHeight}
                className="w-full h-full object-contain"
                priority
                loading="eager"
                sizes="(max-width: 640px) 384px, (max-width: 768px) 448px, 512px"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}