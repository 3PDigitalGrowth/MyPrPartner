"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";

const programs = [
  { name: "Schools Program", href: "#programs" },
  { name: "Industry & Professional Associations Program", href: "#programs" },
  { name: "Crisis Masterclass", href: "#programs" },
];

const navLinks = [
  { name: "Plans & Pricing", href: "#pricing" },
  { name: "About", href: "#about" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-gray-200 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image src="/logo.svg" alt="My PR Partner" width={200} height={32} priority />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-8">
            {/* Programs dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-1 text-sm font-medium text-text-dark hover:text-teal transition-colors"
              >
                Programs
                <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
              </button>
              {dropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-xl bg-white shadow-lg border border-gray-100 py-2">
                  {programs.map((p) => (
                    <Link
                      key={p.name}
                      href={p.href}
                      className="block px-4 py-2.5 text-sm text-text-medium hover:bg-bg-grey hover:text-teal transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      {p.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-dark hover:text-teal transition-colors"
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#cta"
              className="rounded-full bg-teal px-6 py-2.5 text-sm font-medium text-white hover:bg-teal-dark transition-colors"
            >
              Start Free Trial
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

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-1">
            <p className="px-3 py-2 text-xs font-medium uppercase tracking-wider text-text-medium">
              Programs
            </p>
            {programs.map((p) => (
              <Link
                key={p.name}
                href={p.href}
                className="block px-3 py-2.5 text-sm text-text-medium hover:text-teal transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {p.name}
              </Link>
            ))}
            <div className="border-t border-gray-100 my-2" />
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2.5 text-sm font-medium text-text-dark hover:text-teal transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link
                href="#cta"
                className="block w-full rounded-full bg-teal px-6 py-2.5 text-center text-sm font-medium text-white hover:bg-teal-dark transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
