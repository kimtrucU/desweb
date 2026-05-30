"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200">
        <div className="container flex flex-wrap items-center justify-between py-2 text-sm text-gray-800">
          {/* Opening hours */}
          <div className="flex items-center space-x-2">
            <svg
              className="h-4 w-4 text-teal-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 00-1-1H6zm0 2h8v1H6V4zm-2 3h12v9H4V7z" />
            </svg>
            <span>Opening Hours: MON – SUN 8am – 6pm</span>
          </div>

          {/* Contact info – hidden on mobile */}
          <div className="flex items-center space-x-4 md:space-x-6">
            <div className="hidden md:flex items-center space-x-1">
              <svg
                className="h-4 w-4 text-teal-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm2 .5v9l4-3 3 2.25 5-6.75h-12z" />
              </svg>
              <span>(512) 796‑5783</span>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <svg
                className="h-4 w-4 text-teal-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>info@kimthedogtrainer.com</span>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav
        className={`
          sticky top-0 z-30 bg-white transition-shadow
          ${scrolled ? "shadow-lg" : "shadow"}
        `}
      >
        <div className="container flex items-center justify-between py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-12 overflow-hidden rounded-full shadow-md">
              <Image src="/images/logo.png" alt="Logo" fill />
            </div>
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-6 font-montserrat uppercase text-gray-800">
            {[
              "HOME",
              "GROUP & PRIVATE OBEDIENCE",
              "PUPPY TRAINING",
              "BEHAVIOR MODIFICATION",
              "ABOUT US",
              "BLOG",
            ].map((label) => (
              <li key={label}>
                <Link href={`#${label.toLowerCase().replace(/[^a-z]/g, "")}`}>{label}</Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <ul className="md:hidden bg-white border-t border-gray-200 font-montserrat uppercase text-gray-800">
            {[
              "HOME",
              "GROUP & PRIVATE OBEDIENCE",
              "PUPPY TRAINING",
              "BEHAVIOR MODIFICATION",
              "ABOUT US",
              "BLOG",
            ].map((label) => (
              <li
                key={label}
                className="border-b border-gray-200"
                onClick={closeMenu}
              >
                <Link
                  href={`#${label.toLowerCase().replace(/[^a-z]/g, "")}`}
                  className="block px-4 py-3"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
}
