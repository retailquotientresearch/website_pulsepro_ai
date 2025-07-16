"use client";

import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Arpita Aditi",
    title: "Founder of Dil Foods",
    initials: "AA",
    image: `/images/testimonials/arpita-aditi.jpg?v=${Date.now()}`,
    quote:
      "We absolutely love using Pulse, as it has revolutionized our ability to monitor the health of each of our outlets remotely. The intuitive interface ensures that team members at all levels can seamlessly navigate and complete audits with ease. One of the standout features is the simplicity and flexibility in creating and customizing templates. It's so user-friendly that it hardly feels like using outsourced software. Kudos to the team for achieving Product-Market Fit (PMF)!",
  },
  {
    name: "Jaydeep Barman",
    title: "Founder of Rebel Foods",
    initials: "JB",
    image: `/images/testimonials/jaydeep-barman.jpg?v=${Date.now()}`,
    quote:
      "Pulse has transformed our multi-location operations. The real-time monitoring capabilities and comprehensive reporting have given us unprecedented visibility into our business operations. The platform's scalability has grown with us as we expanded across multiple cities.",
  },
  {
    name: "Rashmi Daga",
    title: "Founder of FreshMenu",
    initials: "RD",
    image: `/images/testimonials/rashmi-daga.jpg?v=${Date.now()}`,
    quote:
      "The automation features in Pulse have saved us countless hours. What used to take our team days to compile and analyze now happens in real-time. The insights we get have directly improved our operational efficiency and customer satisfaction.",
  },
  {
    name: "Dr. Shikha Lakhanpal",
    title: "Co-Founder of Living Food",
    initials: "SL",
    image: `/images/testimonials/shikha-lakhanpal.jpg?v=${Date.now()}`,
    quote:
      "As a health-focused brand, compliance is crucial for us. Pulse ensures we never miss a beat with our quality standards. The mobile-first approach means our field teams can work efficiently, and management gets instant updates.",
  },
];

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Handle testimonial change with animation
  const handleTestimonialChange = (index: number) => {
    if (index === activeTestimonial) return;

    setIsAnimating(true);
    setTimeout(() => {
      setActiveTestimonial(index);
      setIsAnimating(false);
    }, 150);
  };

  return (
    <>
      {/* Main Testimonial Card */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden mb-12 border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col md:flex-row">
          {/* Profile Image - On top for mobile, right side for desktop */}
          <div className="order-1 md:order-2 md:w-96 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 flex items-center justify-center p-8">
            <div
              className={`w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800 rounded-full flex items-center justify-center shadow-2xl overflow-hidden transition-all duration-300 ${
                isAnimating ? "opacity-0 scale-95" : "opacity-100 scale-100"
              }`}
            >
              <img
                src={testimonials[activeTestimonial].image}
                alt={testimonials[activeTestimonial].name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling.style.display = "flex";
                }}
              />
              <div
                className="w-full h-full bg-gradient-to-br from-purple-200 to-pink-200 dark:from-purple-700 dark:to-pink-700 rounded-full flex items-center justify-center"
                style={{ display: "none" }}
              >
                <span className="text-6xl md:text-7xl font-bold text-purple-700 dark:text-purple-200">
                  {testimonials[activeTestimonial].initials}
                </span>
              </div>
            </div>
          </div>

          {/* Content - Below image on mobile, left side on desktop */}
          <div className="order-2 md:order-1 md:flex-1 p-8 md:p-12">
            {/* Quote Icon */}
            <div className="text-gray-300 dark:text-gray-500 text-6xl font-serif mb-6">
              "
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
          </div>
        </div>
      </div>

      {/* Customer Avatars Carousel */}
      <div className="px-4 sm:px-0">
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <div className="relative px-8 sm:px-16">
              <CarouselContent className="-ml-1">
                {testimonials.map((person, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
                  >
                    <div className="px-1 sm:px-3 py-2">
                      <button
                        onClick={() => handleTestimonialChange(index)}
                        className={`w-full p-3 sm:p-4 rounded-2xl transition-all duration-300 text-left ${
                          index === activeTestimonial
                            ? "bg-white dark:bg-gray-700 shadow-xl border-2 border-purple-500 dark:border-purple-400 scale-105 transform"
                            : "bg-white/60 dark:bg-gray-700/60 hover:bg-white/90 dark:hover:bg-gray-700/90 border-2 border-transparent hover:scale-102 transform"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-800 dark:to-pink-800 rounded-full flex items-center justify-center shadow-lg flex-shrink-0 overflow-hidden">
                            <img
                              src={person.image}
                              alt={person.name}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.currentTarget.style.display = "none";
                                e.currentTarget.nextElementSibling.style.display =
                                  "flex";
                              }}
                            />
                            <span
                              className="text-xs sm:text-sm font-bold text-purple-700 dark:text-purple-200 w-full h-full flex items-center justify-center"
                              style={{ display: "none" }}
                            >
                              {person.initials}
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <div className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white truncate">
                              {person.name}
                            </div>
                            <div className="text-xs text-gray-600 dark:text-gray-300 truncate">
                              {person.title}
                            </div>
                          </div>
                        </div>
                      </button>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-0 sm:-left-12 top-1/2 -translate-y-1/2 h-7 w-7 sm:h-8 sm:w-8 bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-700 shadow-md">
                <span className="text-gray-600 dark:text-gray-400 text-lg">
                  &lt;
                </span>
              </CarouselPrevious>
              <CarouselNext className="right-0 sm:-right-12 top-1/2 -translate-y-1/2 h-7 w-7 sm:h-8 sm:w-8 bg-white/80 dark:bg-gray-800/80 border border-gray-300 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-700 shadow-md">
                <span className="text-gray-600 dark:text-gray-400 text-lg">
                  &gt;
                </span>
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
