"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, ExternalLink } from "lucide-react";
import Navigation from "@/components/navigation/Navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility bar — unchanged from prior build */}
      <div className={`bg-text-dark transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-10 opacity-100"}`}>
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-5">
            <a href="tel:1300000000" className="flex items-center gap-1.5 text-[13px] text-white/90 transition-colors hover:text-white">
              <Phone className="h-3.5 w-3.5" />
              1300 XXX XXX
            </a>
            <a href="#contact" className="hidden items-center gap-1.5 text-[13px] text-white/90 transition-colors hover:text-white sm:flex">
              <Mail className="h-3.5 w-3.5" />
              Contact us
            </a>
          </div>
          <a href="#" className="flex items-center gap-1.5 text-[13px] text-white/90 transition-colors hover:text-white">
            Member login
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      <nav className={`border-b border-gray-200 bg-white transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""}`}>
        <Navigation />
      </nav>
    </header>
  );
}
