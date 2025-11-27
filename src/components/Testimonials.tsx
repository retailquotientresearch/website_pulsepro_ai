"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const locale = useLocale();
  const testimonials = t.raw("items") as Array<{
    name: string;
    title: string;
    initials: string;
    image: string;
    quote: string;
  }>;

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const avatarsContainerRef = useRef<HTMLDivElement | null>(null);

  // Handle testimonial change with animation
  const handleTestimonialChange = (index: number) => {
    if (index === activeTestimonial) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveTestimonial(index);
      setIsAnimating(false);
    }, 150);
  };

  const prev = () => {
    const nextIndex = (activeTestimonial - 1 + testimonials.length) % testimonials.length;
    handleTestimonialChange(nextIndex);
  };

  const next = () => {
    const nextIndex = (activeTestimonial + 1) % testimonials.length;
    handleTestimonialChange(nextIndex);
  };

  // Keep the selected avatar visible/centered in the lower palette
  useEffect(() => {
    if (!avatarsContainerRef.current) return;
    const el = avatarsContainerRef.current.querySelector<HTMLElement>(`[data-index="${activeTestimonial}"]`);
    if (el && typeof el.scrollIntoView === "function") {
      el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }, [activeTestimonial]);

  return (
    <>
      {/* Main Testimonial Card */}
  <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row">
          {/* Profile Image - On top for mobile, right side for desktop */}
          <div className="order-1 md:order-2 md:w-96 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800/20 dark:to-gray-700/20 flex items-center justify-center p-8">
            <div
              className={`w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center shadow-2xl overflow-hidden transition-all duration-300 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <Image
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].name}
                width={320}
                height={320}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  const nextSibling = e.currentTarget
                    .nextElementSibling as HTMLElement;
                  if (nextSibling) {
                    nextSibling.style.display = "flex";
                  }
                }}
              />
              <div
                className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700 rounded-full flex items-center justify-center"
                style={{ display: "none" }}
              >
                <span className="text-6xl md:text-7xl font-bold text-gray-700 dark:text-gray-200">
                  {testimonials[activeTestimonial].initials}
                </span>
              </div>
            </div>
          </div>

          {/* Content - Below image on mobile, left side on desktop */}
          <div className="order-2 md:order-1 md:flex-1 p-8 md:p-12">
            {/* Quote Icon */}
            <div className="text-gray-300 dark:text-gray-500 text-8xl font-serif mb-0">
              &quot;
            </div>

            {/* Stars */}
            <div className="flex items-center mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>
            </div>

            {/* Testimonial Content - Fixed height to prevent layout shift */}
            <div className="min-h-[280px] flex flex-col justify-between">
              {/* Testimonial Text */}
              <blockquote
                className={`text-gray-700 dark:text-gray-200 text-lg md:text-xl leading-relaxed mb-8 transition-all duration-300 ${
                  isAnimating
                    ? "opacity-0 transform translate-y-4"
                    : "opacity-100 transform translate-y-0"
                }`}
              >
                {testimonials[activeTestimonial].quote}
              </blockquote>

              {/* Author Info */}
              <div
                className={`transition-all duration-300 ${
                  isAnimating
                    ? "opacity-0 transform translate-y-4"
                    : "opacity-100 transform translate-y-0"
                }`}
              >
                <div className="font-bold text-gray-900 dark:text-white text-xl">
                  {testimonials[activeTestimonial].name}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-lg">
                  {testimonials[activeTestimonial].title}
                </div>
              </div>
            </div>
            {/* Controls moved to the small carousel below */}
          </div>
        </div>
      </div>

      {/* Customer Avatars Carousel */}
      <div className="px-0">
        <div className="relative">
          {/* Left/Right controls for small avatars carousel */}
          <button
            aria-label={t("controls.prev")}
            onClick={prev}
            className="absolute -left-2 sm:-left-4 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 bg-white text-gray-700 shadow hover:bg-gray-50"
          >
            <i className={locale === "ar" ? "ri-arrow-right-line" : "ri-arrow-left-line"}></i>
          </button>
          <button
            aria-label={t("controls.next")}
            onClick={next}
            className="absolute -right-2 sm:-right-4 top-1/2 -translate-y-1/2 z-10 inline-flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-300 bg-white text-gray-700 shadow hover:bg-gray-50"
          >
            <i className={locale === "ar" ? "ri-arrow-left-line" : "ri-arrow-right-line"}></i>
          </button>
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <div className="relative px-2 sm:px-8">
              <CarouselContent ref={avatarsContainerRef} className="-ml-1 px-4">
                {testimonials.map((person, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                    data-index={index}
                  >
                    <div className="px-2 sm:px-2 py-3">
                      <button
                        onClick={() => handleTestimonialChange(index)}
                        className={`w-full p-2 sm:p-3 rounded-2xl transition-all duration-300 text-left ${
                          index === activeTestimonial
                            ? "bg-white dark:bg-gray-700 shadow-xl border-2 border-gray-500 dark:border-gray-400 scale-105 transform"
                            : "bg-white/60 dark:bg-gray-700/60 hover:bg-white/90 dark:hover:bg-gray-700/90 border-2 border-transparent hover:scale-102 transform"
                        }`}
                      >
                        <div className="flex items-center space-x-2">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 overflow-hidden">
                            <Image
                              src={person.image}
                              alt={person.name}
                              width={48}
                              height={48}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                                const nextSibling = e.currentTarget
                                  .nextElementSibling as HTMLElement;
                                if (nextSibling) {
                                  nextSibling.style.display = "flex";
                                }
                              }}
                            />
                            <span
                              className="text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-200 w-full h-full flex items-center justify-center"
                              style={{ display: "none" }}
                            >
                              {person.initials}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-[10px] sm:text-xs font-semibold text-gray-900 dark:text-white whitespace-nowrap">
                              {person.name}
                            </div>
                            <div className="text-[10px] sm:text-xs text-gray-600 dark:text-gray-300 whitespace-nowrap">
                              {person.title}
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
