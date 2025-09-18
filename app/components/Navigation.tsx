'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../lib/translations';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navigation() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
                  {/* Logo */}
                  <div className="flex-shrink-0">
                    <Link href="/" className="text-3xl sm:text-4xl font-bold text-yellow-600">
                      EastCodeDev
                    </Link>
                  </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {t.nav.home}
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {t.nav.about}
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {t.nav.services}
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-yellow-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>

          {/* Language Switcher */}
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-700 hover:text-yellow-600 focus:outline-none focus:text-yellow-600"
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="sr-only">
                  {isMobileMenuOpen ? 'Close main menu' : 'Open main menu'}
                </span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

                 {/* Mobile menu */}
                 {isMobileMenuOpen && (
                   <div className="md:hidden" id="mobile-menu">
                     <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50">
                       <Link
                         href="/"
                         className="text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-lg font-medium"
                         onClick={() => setIsMobileMenuOpen(false)}
                       >
                         {t.nav.home}
                       </Link>
                       <Link
                         href="/about"
                         className="text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-lg font-medium"
                         onClick={() => setIsMobileMenuOpen(false)}
                       >
                         {t.nav.about}
                       </Link>
                       <Link
                         href="/services"
                         className="text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-lg font-medium"
                         onClick={() => setIsMobileMenuOpen(false)}
                       >
                         {t.nav.services}
                       </Link>
                       <Link
                         href="/contact"
                         className="text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-lg font-medium"
                         onClick={() => setIsMobileMenuOpen(false)}
                       >
                         {t.nav.contact}
                       </Link>
                     </div>
                   </div>
                 )}
      </div>
    </nav>
  );
}
