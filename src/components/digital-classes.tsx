"use client";

import { useState } from "react";
import { Play, X } from "lucide-react";

export default function DigitalClasses() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section
      id="digital-classes"
      className="py-20 lg:py-28 bg-linear-to-br from-primary to-primary-dark text-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Bringing Expert Teachers to Remote Classrooms
        </h2>
        <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
          When a school needs additional support in a particular topic or
          subject, expert teachers can connect with students through the
          e-Learning platform.
        </p>

        <button
          onClick={() => setShowVideo(true)}
          className="mt-10 inline-flex items-center gap-3 bg-white text-primary font-semibold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors text-base shadow-lg"
        >
          <Play className="w-5 h-5" />
          How Digital Classes Work
        </button>
      </div>

      {showVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute -top-12 right-0 text-white hover:text-white/80 transition-colors"
              aria-label="Close video"
            >
              <X className="w-8 h-8" />
            </button>
            <div className="relative rounded-2xl overflow-hidden bg-black aspect-video">
              <video
                src="/images/Part-7/e-learning_video.mp4"
                controls
                autoPlay
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
