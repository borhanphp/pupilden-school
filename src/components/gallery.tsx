"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

/**
 * These are WhatsApp exports, so the file names carry spaces, parentheses and
 * ampersands. Encoding each segment keeps them valid in both an <img src> and a
 * CSS url() — an unquoted url() silently drops the whole rule on a bare "(",
 * which is what left one tile showing as a plain grey box. encodeURIComponent
 * leaves brackets alone, so they are escaped here too.
 */
function src(path: string) {
  return path
    .split("/")
    .map((segment) =>
      encodeURIComponent(segment).replace(/\(/g, "%28").replace(/\)/g, "%29"),
    )
    .join("/");
}

const activities = [
  {
    label: "Solar Install",
    images: [
      "/images/Part-8/Solar_Installation/WhatsApp Image 2026-08-03 at 18.58.18.jpeg",
      "/images/Part-8/Solar_Installation/WhatsApp Image 2026-08-03 at 18.58.19.jpeg",
      "/images/Part-8/Solar_Installation/WhatsApp Image 2026-08-01 at 16.56.56 (1).jpeg",
      "/images/Part-8/Solar_Installation/WhatsApp Image 2026-08-03 at 18.58.20.jpeg",
      "/images/Part-8/Solar_Installation/WhatsApp Image 2026-08-03 at 18.58.17.jpeg",
      "/images/Part-8/Solar_Installation/WhatsApp Image 2026-08-03 at 18.58.21 (1).jpeg",
    ],
  },
  {
    label: "TV & Laptop Set-up",
    images: [
      
      "/images/Part-8/TV&Laptop_Set-up/WhatsApp Image 2026-08-25 at 12.30.35.jpeg",
      "/images/Part-8/TV&Laptop_Set-up/WhatsApp Image 2026-09-03 at 13.21.01.jpeg",
      "/images/Part-8/TV&Laptop_Set-up/WhatsApp Image 2026-08-26 at 17.25.22.jpeg",
      "/images/Part-8/TV&Laptop_Set-up/WhatsApp Image 2026-09-05 at 15.43.57.jpeg",
    ],
  },
  {
    label: "Network Connection (Starlink/ISP/Mobile Network) Set-up",
    images: [
      "/images/Part-8/TV&Laptop_Set-up/WhatsApp Image 2026-08-27 at 17.19.30.jpeg",
      "/images/Part-8/Network_Connection_Set-up/WhatsApp Image 2026-08-25 at 15.07.51.jpeg",
      "/images/Part-8/Network_Connection_Set-up/WhatsApp Image 2026-10-11 at 15.53.31.jpeg",
    ],
  },
  {
    label: "Digital Classroom",
    images: [
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-10-11 at 16.24.01.jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-10-11 at 16.24.02.jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-10-11 at 16.24.02 (1).jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-10-11 at 15.30.10.jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-10-11 at 15.30.10 (1).jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-10-11 at 15.30.10 (2).jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-10-08 at 10.57.10.jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-10-08 at 10.57.10 (1).jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-10-08 at 10.57.11.jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-10-08 at 09.18.44.jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-10-08 at 09.18.44 (1).jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-10-07 at 09.17.24.jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-10-06 at 09.28.13.jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-10-05 at 09.31.52.jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-10-02 at 15.25.24 (1).jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-10-02 at 15.25.24 (2).jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-09-28 at 11.22.12.jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-09-22 at 09.14.13 (1).jpeg",
      "/images/Part-8/Digital_Classroom/WhatsApp Image 2026-09-21 at 09.54.19.jpeg",
    ],
  },
  {
    label: "e-Learning Conference",
    images: [
      "/images/Part-8/e-Learning_Conference/WhatsApp Image 2026-09-29 at 23.04.14.jpeg",
      "/images/Part-8/e-Learning_Conference/WhatsApp Image 2026-09-29 at 23.04.15.jpeg",
      "/images/Part-8/e-Learning_Conference/WhatsApp Image 2026-09-29 at 23.04.15 (1).jpeg",
      "/images/Part-8/e-Learning_Conference/WhatsApp Image 2026-08-31 at 08.18.44.jpeg",
      "/images/Part-8/e-Learning_Conference/WhatsApp Image 2026-08-31 at 08.18.46.jpeg",
      "/images/Part-8/e-Learning_Conference/WhatsApp Image 2026-08-31 at 08.18.54.jpeg",
      "/images/Part-8/e-Learning_Conference/WhatsApp Image 2026-08-15 at 13.55.39.jpeg",
      "/images/Part-8/e-Learning_Conference/WhatsApp Image 2026-08-15 at 13.55.39 (1).jpeg",
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
              {/*
                The big image's 4:3 box sets the row height and the side column
                stretches to it, so the stack always ends flush with the big
                image however many thumbnails it holds.
              */}
              <div
                className="flex gap-2 cursor-pointer"
                onClick={() => setLightbox({ actIdx, imgIdx: 0 })}
              >
                <div className="flex-[2] aspect-4/3 rounded-xl overflow-hidden">
                  <div
                    className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-500"
                    style={{
                      backgroundImage: `url("${src(activity.images[0])}")`,
                    }}
                  />
                </div>

                {activity.images.length > 1 && (
                  <div className="flex-1 flex flex-col gap-2">
                    {activity.images.slice(1, 3).map((image, i) => (
                      <div
                        key={image}
                        className="flex-1 min-h-0 rounded-xl overflow-hidden relative"
                      >
                        <div
                          className="w-full h-full bg-cover bg-center hover:scale-105 transition-transform duration-500"
                          style={{ backgroundImage: `url("${src(image)}")` }}
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
                )}
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
              src={src(allImages[lightbox.imgIdx])}
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
