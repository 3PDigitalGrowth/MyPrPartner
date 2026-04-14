"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Phone, Mail, ExternalLink, GraduationCap, Building2, Shield } from "lucide-react";

const navLinks = [
  { name: "Crisis masterclass", href: "#programs" },
  { name: "Plans & pricing", href: "#programs" },
  { name: "About", href: "#about" },
  { name: "Resources", href: "#resources" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTimeout = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) {
        setMegaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleMegaEnter() {
    clearTimeout(megaTimeout.current);
    setMegaOpen(true);
  }

  function handleMegaLeave() {
    megaTimeout.current = setTimeout(() => setMegaOpen(false), 200);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Utility bar */}
      <div className={`bg-text-dark transition-all duration-300 ${scrolled ? "h-0 overflow-hidden opacity-0" : "h-10 opacity-100"}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a href="tel:1300000000" className="flex items-center gap-1.5 text-[13px] text-white/90 hover:text-white transition-colors">
              <Phone className="h-3.5 w-3.5" />
              1300 XXX XXX
            </a>
            <a href="#contact" className="hidden sm:flex items-center gap-1.5 text-[13px] text-white/90 hover:text-white transition-colors">
              <Mail className="h-3.5 w-3.5" />
              Contact us
            </a>
          </div>
          <a href="#" className="flex items-center gap-1.5 text-[13px] text-white/90 hover:text-white transition-colors">
            Member login
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className={`bg-white border-b border-gray-200 transition-shadow duration-300 ${scrolled ? "shadow-sm" : ""}`}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-[72px] items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image src="/logo.png" alt="My PR Partner" width={180} height={48} priority className="h-10 w-auto" />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex lg:items-center lg:gap-7">
              {/* Programs mega-dropdown */}
              <div
                className="relative"
                ref={megaRef}
                onMouseEnter={handleMegaEnter}
                onMouseLeave={handleMegaLeave}
              >
                <button
                  onClick={() => setMegaOpen(!megaOpen)}
                  className="flex items-center gap-1 text-[15px] font-medium text-text-dark hover:text-teal transition-colors"
                >
                  Programs
                  <ChevronDown className={`h-4 w-4 transition-transform ${megaOpen ? "rotate-180" : ""}`} />
                </button>
              </div>

              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[15px] font-medium text-text-dark hover:text-teal transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              <Link
                href="#contact"
                className="rounded-full border border-teal px-5 py-2 text-[14px] font-medium text-teal hover:bg-teal hover:text-white transition-colors"
              >
                Contact us
              </Link>
              <Link
                href="#programs"
                className="rounded-full bg-teal px-5 py-2 text-[14px] font-medium text-white hover:bg-teal-dark transition-colors"
              >
                Explore programs
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden p-2 text-text-dark"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mega-dropdown panel */}
        {megaOpen && (
          <div
            className="hidden lg:block absolute left-0 right-0 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] border-t border-gray-100"
            onMouseEnter={handleMegaEnter}
            onMouseLeave={handleMegaLeave}
          >
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
              <div className="grid grid-cols-2 gap-12">
                {/* Left column */}
                <div>
                  <p className="font-heading text-base font-bold text-text-dark mb-4">
                    Training, resources &amp; support
                  </p>
                  <div className="space-y-4">
                    <Link
                      href="#programs"
                      className="flex items-start gap-3 group"
                      onClick={() => setMegaOpen(false)}
                    >
                      <GraduationCap className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[15px] font-medium text-text-dark group-hover:text-teal transition-colors">Schools program</p>
                        <p className="text-[14px] text-gray-400">For school leaders and staff</p>
                      </div>
                    </Link>
                    <Link
                      href="#programs"
                      className="flex items-start gap-3 group"
                      onClick={() => setMegaOpen(false)}
                    >
                      <Building2 className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-[15px] font-medium text-text-dark group-hover:text-teal transition-colors">Industry &amp; professional associations program</p>
                        <p className="text-[14px] text-gray-400">For associations and member organisations</p>
                      </div>
                    </Link>
                  </div>
                </div>
                {/* Right column */}
                <div>
                  <p className="font-heading text-base font-bold text-text-dark mb-4">
                    Specialist training
                  </p>
                  <Link
                    href="#programs"
                    className="flex items-start gap-3 group"
                    onClick={() => setMegaOpen(false)}
                  >
                    <Shield className="h-5 w-5 text-teal mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[15px] font-medium text-text-dark group-hover:text-teal transition-colors">Crisis masterclass</p>
                      <p className="text-[14px] text-gray-400">For PR and communications professionals and business leaders</p>
                    </div>
                  </Link>
                </div>
              </div>
              {/* Bottom link */}
              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link
                  href="#programs"
                  className="text-[14px] font-medium text-teal hover:text-teal-dark transition-colors"
                  onClick={() => setMegaOpen(false)}
                >
                  View all programs &amp; pricing &rarr;
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-1">
              <p className="px-3 py-2 text-xs font-medium tracking-wider text-text-medium">Programs</p>
              <Link href="#programs" className="flex items-center gap-2 px-3 py-2.5 text-sm text-text-medium hover:text-teal transition-colors" onClick={() => setMobileOpen(false)}>
                <GraduationCap className="h-4 w-4 text-teal" /> Schools program
              </Link>
              <Link href="#programs" className="flex items-center gap-2 px-3 py-2.5 text-sm text-text-medium hover:text-teal transition-colors" onClick={() => setMobileOpen(false)}>
                <Building2 className="h-4 w-4 text-teal" /> Industry &amp; professional associations
              </Link>
              <Link href="#programs" className="flex items-center gap-2 px-3 py-2.5 text-sm text-text-medium hover:text-teal transition-colors" onClick={() => setMobileOpen(false)}>
                <Shield className="h-4 w-4 text-teal" /> Crisis masterclass
              </Link>
              <div className="border-t border-gray-100 my-2" />
              {navLinks.map((link) => (
                <Link key={link.name} href={link.href} className="block px-3 py-2.5 text-sm font-medium text-text-dark hover:text-teal transition-colors" onClick={() => setMobileOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <div className="pt-3 space-y-2">
                <Link href="#contact" className="block w-full rounded-full border border-teal px-6 py-2.5 text-center text-sm font-medium text-teal hover:bg-teal hover:text-white transition-colors" onClick={() => setMobileOpen(false)}>
                  Contact us
                </Link>
                <Link href="#programs" className="block w-full rounded-full bg-teal px-6 py-2.5 text-center text-sm font-medium text-white hover:bg-teal-dark transition-colors" onClick={() => setMobileOpen(false)}>
                  Explore programs
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
