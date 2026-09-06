"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const leaders = [
  {
    name: "Dipan Talukdar",
    title: "Chairman, RHDC",
    photo: "/images/Part-6/chairman_Dipan_Talukdar.jpg",
    quote: "Quote to be collected.",
  },
  {
    name: "Khondkar Mohammad Rizaul Karim",
    title: "CEO, RHDC",
    photo: "/images/Part-6/CEO_Rizaul%20Karim.jpg",
    quote: "Quote to be collected.",
  },
  {
    name: "Ranajyoti Chakma",
    title: "Chairman, PBL Bangladesh",
    photo: "",
    quote: "Quote to be collected.",
  },
];

const slides: (typeof leaders)[] = [];
for (let i = 0; i < leaders.length; i += 2) {
  slides.push(leaders.slice(i, i + 2));
}

function LeaderCard({ leader }: { leader: (typeof leaders)[number] }) {
  return (
    <div className="flex-1 flex flex-col sm:flex-row border border-border rounded-2xl overflow-hidden bg-white">
      <div className="sm:w-48 shrink-0">
        {leader.photo ? (
          <div
            className="w-full h-48 sm:h-full bg-cover bg-center bg-muted-light"
            style={{ backgroundImage: `url(${leader.photo})` }}
          />
        ) : (
          <div className="w-full h-48 sm:h-full bg-border flex items-center justify-center">
            <span className="text-5xl font-bold text-muted/30">
              {leader.name.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="flex-1 p-6 flex flex-col justify-center">
        <div className="text-primary text-4xl font-serif leading-none mb-3">
          &ldquo;&rdquo;
        </div>
        <p className="text-muted text-sm italic leading-relaxed">
          {leader.quote}
        </p>
        <div className="mt-4 pt-3 border-t border-border">
          <p className="font-semibold text-foreground">{leader.name}</p>
          <p className="text-sm text-muted">{leader.title}</p>
        </div>
      </div>
    </div>
  );
}

export default function Leadership() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  function navigate(dir: number) {
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  }

  return (
    <section id="leadership" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
            Leadership Voices
          </h2>
          <p className="mt-4 text-muted text-lg">
            Perspectives from Rangamati Hill District Council&apos;s leadership
            on transforming education in Rangamati.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {slides.map((pair, slideIdx) => (
                <div
                  key={slideIdx}
                  className="w-full shrink-0 grid grid-cols-1 md:grid-cols-2 gap-6 px-1"
                >
                  {pair.map((leader) => (
                    <LeaderCard key={leader.name} leader={leader} />
                  ))}
                </div>
              ))}
            </div>
          </div>

          {slides.length > 1 && (
            <>
              <button
                onClick={() => navigate(-1)}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white border border-border rounded-full shadow-md flex items-center justify-center hover:bg-muted-light transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={() => navigate(1)}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-10 h-10 bg-white border border-border rounded-full shadow-md flex items-center justify-center hover:bg-muted-light transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>

              <div className="flex justify-center gap-2 mt-6">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${
                      i === current ? "bg-primary w-8" : "bg-border"
                    }`}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
