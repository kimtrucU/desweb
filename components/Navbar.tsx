/* components/Navbar.tsx */
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const MENU_ITEMS = [
  { label: "HOME", href: "#" },
  { label: "GROUP & PRIVATE OBEDIENCE", href: "#" },
  { label: "PUPPY TRAINING", href: "#" },
  { label: "BEHAVIOR MODIFICATION", href: "#" },
  { label: "ABOUT US", href: "#" },
  { label: "BLOG", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add / remove a heavier shadow when scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu after clicking a link
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav
      className={`
        sticky top-0 z-30 bg-white transition-shadow
        ${scrolled ? "shadow-lg" : "shadow"}
      `}
    >
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo – round with subtle shadow */}
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-12 overflow-hidden rounded-full shadow-md">
            <Image src="/images/logo.png" alt="Logo" fill />
          </div>
        </Link>

        {/* Desktop navigation */}
        <ul className="hidden md:flex space-x-6 font-montserrat text-base uppercase tracking-wider text-gray-800">
          {MENU_ITEMS.map((item) => (
            <li key={item.label}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex items-center justify-center p-2"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
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
      {isOpen && (
        <ul className="md:hidden bg-white border-t border-gray-200 font-montserrat text-base uppercase tracking-wider text-gray-800">
          {MENU_ITEMS.map((item) => (
            <li key={item.label} className="border-b border-gray-200">
              <Link
                href={item.href}
                className="block px-4 py-3"
                onClick={handleLinkClick}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
