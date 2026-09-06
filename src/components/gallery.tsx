"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const activities = [
  {
    label: "Solar Install",
    images: [
      "/images/Part-8/Solar_Installation/WhatsApp%20Image%202026-08-03%20at%2018.58.18.jpeg",
      "/images/Part-8/Solar_Installation/WhatsApp%20Image%202026-08-03%20at%2018.58.19.jpeg",
      "/images/Part-8/Solar_Installation/WhatsApp%20Image%202026-08-01%20at%2016.56.56%20(1).jpeg",
      "/images/Part-8/Solar_Installation/WhatsApp%20Image%202026-08-03%20at%2018.58.20.jpeg",
      "/images/Part-8/Solar_Installation/WhatsApp%20Image%202026-08-03%20at%2018.58.17.jpeg",
      "/images/Part-8/Solar_Installation/WhatsApp%20Image%202026-08-03%20at%2018.58.21%20(1).jpeg",
    ],
  },
  {
    label: "TV & Laptop Handover Program",
    images: [
      "/images/Part-8/TV_Laptop_Handover-Program/WhatsApp%20Image%202026-08-31%20at%2008.18.44.jpeg",
      "/images/Part-8/TV_Laptop_Handover-Program/WhatsApp%20Image%202026-08-31%20at%2008.19.00.jpeg",
      "/images/Part-8/TV_Laptop_Handover-Program/WhatsApp%20Image%202026-08-31%20at%2008.18.54.jpeg",
      "/images/Part-8/TV_Laptop_Handover-Program/WhatsApp%20Image%202026-08-31%20at%2008.18.46.jpeg",
      "/images/Part-8/TV_Laptop_Handover-Program/WhatsApp%20Image%202026-08-15%20at%2013.55.39.jpeg",
      "/images/Part-8/TV_Laptop_Handover-Program/WhatsApp%20Image%202026-08-31%20at%2008.19.01.jpeg",
    ],
  },
  {
    label: "TV & Laptop Set-up",
    images: [
      "/images/Part-8/TV%26Laptop_Set-up/WhatsApp%20Image%202026-08-27%20at%2017.19.30.jpeg",
      "/images/Part-8/TV%26Laptop_Set-up/WhatsApp%20Image%202026-08-25%20at%2012.30.35.jpeg",
      "/images/Part-8/TV%26Laptop_Set-up/WhatsApp%20Image%202026-09-03%20at%2013.21.01.jpeg",
      "/images/Part-8/TV%26Laptop_Set-up/WhatsApp%20Image%202026-08-26%20at%2017.25.22.jpeg",
      "/images/Part-8/TV%26Laptop_Set-up/WhatsApp%20Image%202026-09-05%20at%2015.43.57.jpeg",
    ],
  },
  {
    label: "Network Connection (Starlink/ISP/Mobile Network) Set-up",
    images: [
      "/images/Part-8/Network_Connection_Set-up/WhatsApp%20Image%202026-08-25%20at%2015.07.51.jpeg",
    ],
  },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState<{
    actIdx: number;
    imgIdx: number;
  } | null>(null);

  const allImages = lightbox ? activities[lightbox.actIdx].images : [];

  function navigate(dir: number) {
    if (!lightbox) return;
    const next = lightbox.imgIdx + dir;
    if (next >= 0 && next < allImages.length) {
      setLightbox({ ...lightbox, imgIdx: next });
    }
  }

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-muted-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            From the Field
          </h2>
          <p className="mt-4 text-muted text-lg">
            Our field activities bringing digital learning infrastructure to
            schools across Rangamati.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {activities.map((activity, actIdx) => (
            <div key={activity.label} className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">
                {activity.label}
              </h3>
              <div
                className="grid grid-cols-3 gap-2 cursor-pointer"
                onClick={() => setLightbox({ actIdx, imgIdx: 0 })}
              >
                <div className="col-span-2 row-span-2 aspect-[4/3] rounded-xl overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url(${activity.images[0]})`,
                    }}
                  />
                </div>
                {activity.images.slice(1, 3).map((src, i) => (
                  <div
                    key={src}
                    className="aspect-square rounded-xl overflow-hidden relative"
                  >
                    <div
                      className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-500"
                      style={{ backgroundImage: `url(${src})` }}
                    />
                    {i === 1 && activity.images.length > 3 && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          +{activity.images.length - 3}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-4 right-4 text-white hover:text-white/80"
            aria-label="Close"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 text-white hover:text-white/80 disabled:opacity-30"
            disabled={lightbox.imgIdx === 0}
            aria-label="Previous"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh] flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={allImages[lightbox.imgIdx]}
              alt={activities[lightbox.actIdx].label}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
            />
          </div>

          <button
            onClick={() => navigate(1)}
            className="absolute right-4 text-white hover:text-white/80 disabled:opacity-30"
            disabled={lightbox.imgIdx === allImages.length - 1}
            aria-label="Next"
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          <div className="absolute bottom-4 text-white/70 text-sm">
            {lightbox.imgIdx + 1} / {allImages.length} —{" "}
            {activities[lightbox.actIdx].label}
          </div>
        </div>
      )}
    </section>
  );
}
