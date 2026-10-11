"use client";

import { useEffect, useState } from "react";
import { Link2, BookOpen, Sparkles, TrendingUp } from "lucide-react";

const steps = [
  { icon: Link2, label: "Connect", color: "text-blue-600 bg-blue-100" },
  { icon: BookOpen, label: "Learn", color: "text-green-600 bg-green-100" },
  { icon: Sparkles, label: "Empower", color: "text-amber-600 bg-amber-100" },
  { icon: TrendingUp, label: "Transform", color: "text-purple-600 bg-purple-100" },
];

const allImages = [
  "/images/Part-2/Rangamati1.jpg",
  "/images/Part-2/kaptai-lake.jpg",
  "/images/Part-2/Chittagong-Hill-Tracts-main-image.jpg",
  "/images/Part-2/rangamati-hill-tracts.webp",
  "/images/Part-2/Konglak_Hill_2_at_Sajek_Rangamati_Bangladesh.jpg",
  "/images/Part-2/Beautiful_Rangamati.jpg",
  "/images/Part-2/Rangamati%202.jpg",
  "/images/Part-2/Kaptai_Lake_(19833365911).jpg",
  "/images/Part-2/Place_of_Peace_5.jpg",
  "/images/Part-2/Rangamati_zeropoint.jpg",
  "/images/Part-2/A_RiverView_of_Kaptai,_Rangamati_01.jpg",
  "/images/Part-2/Kaptai_national_Park_76365.jpg.jpeg",
  "/images/Part-2/pexels-jubersahel-37187163.jpg",
  "/images/Part-2/pexels-saadbinhasan-35478426.jpg",
  "/images/Part-2/istockphoto-1439533463-1024x1024.jpg",
];

export default function Vision() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % allImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="vision" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-lg">
            {allImages.map((src, i) => (
              <div
                key={src}
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
                style={{
                  backgroundImage: `url(${src})`,
                  opacity: i === current ? 1 : 0,
                }}
              />
            ))}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {allImages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === current ? "bg-white w-5" : "bg-white/50"
                  }`}
                  aria-label={`Image ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-wide mb-2">
              Our Vision
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight">
              Geography should never be a barrier to quality education
            </h2>
            <p className="mt-4 text-muted text-lg leading-relaxed">
              Connecting remote schools in Rangamati with digital learning
              opportunities, quality educational resources, and
              technology-enabled teaching.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              {steps.map((step, i) => (
                <div key={step.label} className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-lg flex items-center justify-center ${step.color}`}
                    >
                      <step.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-foreground text-sm">
                      {step.label}
                    </span>
                  </div>
                  {i < steps.length - 1 && (
                    <span className="text-muted text-lg">&rarr;</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
