"use client";

import { useState } from "react";
import Image from "next/image";
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
    image: `/images/testimonials/arpita-aditi.jpg`,
    quote:
      "We absolutely love using Pulse, as it has revolutionized our ability to monitor the health of each of our outlets remotely. The intuitive interface ensures that team members at all levels can seamlessly navigate and complete audits with ease. One of the standout features is the simplicity and flexibility in creating and customizing templates. It's so user-friendly that it hardly feels like using outsourced software. Kudos to the team for achieving Product-Market Fit (PMF)!",
  },
  {
    name: "Jaydeep Barman",
    title: "Founder of Rebel Foods",
    initials: "JB",
    image: `/images/testimonials/jaydeep-barman.jpg`,
    quote:
      "At Rebel Foods, we prioritize food safety and customer experience. Pulse helps manage over 4,000 internet restaurants across 450 kitchens in 4 countries, ensuring compliance through self-reporting and QA checks. The Pulse app streamlines data collection with time-stamped, geo-tagged images and instant reports, ensuring transparency, accountability, and operational excellence.",
  },
  {
    name: "Rashmi Daga",
    title: "Founder of FreshMenu",
    initials: "RD",
    image: `/images/testimonials/rashmi-daga.jpg`,
    quote:
      "At FreshMenu, we are always eager to adopt new intuitive technology to deliver high-quality food within the hygiene protocols to our consumers. Thus, we collaborated with Pulse. It is an easy-to-use tool that provides high visibility in the form of insightful data and visual proofs accessible in real-time from anywhere. It has helped us in resolving issues faster and creating an overall safety culture.",
  },
  {
    name: "Dr. Shikha Lakhanpal",
    title: "Co-Founder of Living Food",
    initials: "SL",
    image: `/images/testimonials/shikha-lakhanpal.jpg`,
    quote:
      "Pulse has been a game-changer for us. The app's intuitive interface and robust features make data collection and reporting seamless. We are able to track actions, reporting in real-time and it has made remote management very easy for us. Kudos to Pulse team for providing a great experience. An indispensable tool for any organization looking to enhance their operational excellence and ensure compliance. Highly recommended!",
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
          </div>
        </div>
      </div>

      {/* Customer Avatars Carousel */}
      <div className="px-0">
        <div className="relative">
          <Carousel
            opts={{
              align: "center",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <div className="relative px-2 sm:px-8">
              <CarouselContent className="-ml-1 px-4">
                {testimonials.map((person, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-1 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
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
              <CarouselPrevious className="left-0 sm:-left-12 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <i className="ri-arrow-left-line text-gray-600 dark:text-gray-400 text-sm sm:text-base"></i>
              </CarouselPrevious>
              <CarouselNext className="right-0 sm:-right-12 top-1/2 -translate-y-1/2 h-8 w-8 sm:h-10 sm:w-10 bg-white/90 dark:bg-gray-800/90 border border-gray-300 dark:border-gray-600 hover:bg-white dark:hover:bg-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
                <i className="ri-arrow-right-line text-gray-600 dark:text-gray-400 text-sm sm:text-base"></i>
              </CarouselNext>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
}
