'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../lib/translations';
import LanguageSwitcher from './LanguageSwitcher';
import { useEstimate } from '../contexts/EstimateContext';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const { language } = useLanguage();
  const t = translations[language];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setShowEstimateForm } = useEstimate();
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  const handleEstimateClick = () => {
    setIsMobileMenuOpen(false);
    if (pathname !== '/') {
      window.location.href = '/#estimate';
    } else {
      setShowEstimateForm(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 点击外部区域关闭菜单
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // 路由变化时关闭菜单
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50" ref={menuRef}>
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
            {/* Quick Estimate Button */}
            <button
              onClick={handleEstimateClick}
              className="hidden md:block px-4 py-2 bg-yellow-600 text-white font-semibold text-sm rounded-lg hover:shadow-lg hover:bg-yellow-700 transition-all duration-300 hover:scale-105"
            >
              {language === 'zh' ? '快速估价' : 'Get Estimate'}
            </button>
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
                       <button
                         onClick={handleEstimateClick}
                         className="w-full text-left text-gray-700 hover:text-yellow-600 block px-3 py-2 rounded-md text-lg font-medium bg-yellow-600 text-white hover:bg-yellow-700 hover:shadow-lg transition-all duration-300"
                       >
                         {language === 'zh' ? '快速估价' : 'Get Estimate'}
                       </button>
                     </div>
                   </div>
                 )}
      </div>
    </nav>
  );
}
