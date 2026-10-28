"use client";

import { useState } from "react";
import Link from "next/link";
import { GraduationCap, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#vision", label: "Our Vision" },
  { href: "#about", label: "About" },
  { href: "#ecosystem", label: "Ecosystem" },
  { href: "#impact", label: "Impact" },
  // { href: "#leadership", label: "Leadership" },
  { href: "#gallery", label: "Gallery" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
            <GraduationCap className="w-5 h-5 text-white" />
          </div>
          <span className="text-lg font-bold text-foreground">
            e-Learning <span className="text-primary">Rangamati</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-base font-semibold text-foreground hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://app.elearning-rhdc.com/student/login"
            className="text-sm font-medium bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Student Login
          </a>
          <a
            href="https://app.elearning-rhdc.com/teacher/login"
            className="text-sm font-medium bg-primary text-white px-5 py-2 rounded-lg hover:bg-primary-dark transition-colors"
          >
            Login to LMS
          </a>
        </div>

        <button
          className="lg:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white px-4 pb-4">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-semibold text-foreground hover:text-primary"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://app.elearning-rhdc.com/student/login"
            className="mt-2 block text-sm font-medium text-center py-2 bg-green-600 text-white rounded-lg"
          >
            Student Login
          </a>
          <a
            href="https://app.elearning-rhdc.com/teacher/login"
            className="mt-2 block text-sm font-medium text-center py-2 bg-primary text-white rounded-lg"
          >
            Teacher Login
          </a>
        </div>
      )}
    </header>
  );
}
