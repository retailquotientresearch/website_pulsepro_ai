import Image from "next/image";
import React from "react";
import { useTranslations } from 'next-intl';

type Client = {
  name: string;
  logo: string; // path under public/
};

// Tip: Update this list to add/remove clients. Logos live in public/images/clients
// You can add more without touching the component logic.
const ROW_ONE: Client[] = [
  { name: "Accor", logo: "/images/clients/Accor.png" },
  { name: "Green Resources", logo: "/images/clients/Green_Resources.png" },
  { name: "Fichtner", logo: "/images/clients/Fichtner.png" },
  { name: "Rebel Foods", logo: "/images/clients/Rebel_foods.png" },
  { name: "Nippon Logistics", logo: "/images/clients/Nex_Nippon_Express.png" },
];

const ROW_TWO: Client[] = [
  { name: "Battery Smart", logo: "/images/clients/batterysmart.png" },
  { name: "Leica", logo: "/images/clients/Leica.jpg" },
  { name: "South Beach Hotels", logo: "/images/clients/south_beach.png" },
  { name: "Tim Hortons", logo: "/images/clients/Tim_hortons.png" },
  { name: "Travel Food Services", logo: "/images/clients/travel_food_services.png" },
];

function LogosRow({ clients, reverse = false, speed = 30 }: { clients: Client[]; reverse?: boolean; speed?: number }) {
  return (
    <div className="group relative w-full overflow-hidden mask-edge-x">
      {/* Double content for seamless loop */}
      <div
        className={[
          "flex items-center gap-8 w-max",
          reverse ? "marquee-reverse" : "marquee",
        ].join(" ")}
        style={{
          // Allow each usage to have a different speed
          animationDuration: `${speed}s`,
          willChange: "transform",
        }}
      >
        {[...clients, ...clients].map((client, idx) => (
          <div
            key={`${client.name}-${idx}`}
            className="shrink-0 px-1 py-1"
            aria-label={client.name}
          >
            <div className="relative h-16 w-28 rounded-lg overflow-hidden bg-white/90">
              <Image
                src={client.logo}
                alt={client.name}
                fill
                sizes="112px"
                className="object-contain p-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TrustedBy() {
  const t = useTranslations('trustedBy');

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-transparent">
      {/* Full-bleed wrapper with the SAME rounded curve as UseCases */}
      <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div className="w-full rounded-[36px] md:rounded-[48px] lg:rounded-[64px] overflow-hidden bg-[#111111] text-white px-2 sm:px-4 lg:px-8 py-16 md:py-20 lg:py-24 min-h-[60vh] md:min-h-[65vh] flex items-center">
          <div className="max-w-[1400px] mx-auto w-full">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-3 inline-block transform -rotate-2">
                {t('title')}
              </h2>
              <h3 className="text-3xl md:text-4xl font-semibold">{t('subtitle')}</h3>
              <p className="text-gray-300 mt-4 text-lg">{t('description')}</p>
            </div>

            <div className="mt-12 space-y-8">
              {/* Row 1 */}
              <LogosRow clients={ROW_ONE} speed={26} />

              {/* Row 2 with opposite direction and a touch slower for depth */}
              <LogosRow clients={ROW_TWO} reverse speed={32} />
            </div>

            <p className="sr-only">Client logos carousel scrolling continuously. Hover to pause.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
