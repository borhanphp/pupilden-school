"use client";

import { useEffect, useState } from "react";

const images = [
  "/images/images-part-1/digital-classroom.jpg",
  "/images/images-part-1/school-image-2.jpg",
  "/images/images-part-1/hero-3.jpeg",
  "/images/images-part-1/hero-4.jpeg",
  "/images/images-part-1/hero-5.jpeg",
  "/images/images-part-1/hero-6.jpeg",
  "/images/images-part-1/hero-7.jpeg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-16 h-[90vh] min-h-[600px] overflow-hidden">
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${src})` }}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30" />

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Bringing Digital Learning to Every Corner of Rangamati
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/85 leading-relaxed max-w-3xl mx-auto tracking-wide">
            Connecting teachers and students in Rangamati with quality digital education,
            learning resources, and technology-enabled classrooms.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#about"
              className="inline-flex items-center justify-center bg-white text-primary font-semibold px-8 py-3.5 rounded-xl hover:bg-white/90 transition-colors text-base"
            >
              Learn More
            </a>
            <a
              href="#digital-classes"
              className="inline-flex items-center justify-center border border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors text-base"
            >
              Watch Overview
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${
              i === current ? "bg-white w-8" : "bg-white/50"
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
