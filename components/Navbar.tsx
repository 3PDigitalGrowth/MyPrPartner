"use client";

import { useState, useEffect } from "react";
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
      <nav className={`border-b border-gray-200 bg-white transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""}`}>
        <Navigation />
      </nav>
    </header>
  );
}
