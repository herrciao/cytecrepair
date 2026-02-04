'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex items-center justify-center w-10 h-10 bg-primary-600 rounded">
              <span className="text-white font-bold text-xl">5</span>
            </div>
            <span className="font-bold text-lg text-secondary-900">
              5 Axis Head Repair
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/#services"
              className="text-secondary-600 hover:text-primary-600 font-medium transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#how-we-work"
              className="text-secondary-600 hover:text-primary-600 font-medium transition-colors"
            >
              How We Work
            </Link>
            <Link
              href="/#faq"
              className="text-secondary-600 hover:text-primary-600 font-medium transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/#contact"
              className="btn-primary"
            >
              Request Assessment
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-secondary-600 hover:text-primary-600 hover:bg-secondary-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/#services"
                className="text-secondary-600 hover:text-primary-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/#how-we-work"
                className="text-secondary-600 hover:text-primary-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                How We Work
              </Link>
              <Link
                href="/#faq"
                className="text-secondary-600 hover:text-primary-600 font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/#contact"
                className="btn-primary text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Request Assessment
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
