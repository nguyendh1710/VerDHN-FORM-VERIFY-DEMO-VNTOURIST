"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl font-heading text-brand">
            Sunfil
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/" className="text-foreground hover:text-brand font-medium">Home</Link>
            <Link href="/about" className="text-foreground hover:text-brand font-medium">About</Link>
            <Link href="/services" className="text-foreground hover:text-brand font-medium">Services</Link>
            <Link href="/contact" className="text-foreground hover:text-brand font-medium">Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/get-started"
              className="px-4 py-2 bg-brand text-white rounded-xl2 hover:bg-green-600 transition"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-foreground focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <Link href="/" className="block text-foreground hover:text-brand">Home</Link>
          <Link href="/about" className="block text-foreground hover:text-brand">About</Link>
          <Link href="/services" className="block text-foreground hover:text-brand">Services</Link>
          <Link href="/contact" className="block text-foreground hover:text-brand">Contact</Link>
          <Link
            href="/get-started"
            className="block text-center bg-brand text-white rounded-xl2 py-2 mt-2 hover:bg-green-600"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
