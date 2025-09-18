'use client';

import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../lib/translations';

export default function Footer() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2">
            <h3 className="text-xl sm:text-2xl font-bold text-yellow-400 mb-3 sm:mb-4">EastCodeDev</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4">
              {language === 'zh' 
                ? '专业的网页设计和开发服务提供商，致力于为客户创造优质的数字化体验。'
                : 'Professional web design and development service provider, committed to creating quality digital experiences for our clients.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              {language === 'zh' ? '快速链接' : 'Quick Links'}
            </h4>
            <ul className="space-y-1 sm:space-y-2">
              <li><a href="/" className="text-sm sm:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-200">{t.nav.home}</a></li>
              <li><a href="/about" className="text-sm sm:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-200">{t.nav.about}</a></li>
              <li><a href="/services" className="text-sm sm:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-200">{t.nav.services}</a></li>
              <li><a href="/contact" className="text-sm sm:text-base text-gray-300 hover:text-yellow-400 transition-colors duration-200">{t.nav.contact}</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
              {language === 'zh' ? '联系信息' : 'Contact Info'}
            </h4>
            <div className="space-y-1 sm:space-y-2 text-gray-300">
              <p className="text-sm sm:text-base">{t.contact.email}: <a href="mailto:info@eastcodedev.com" className="text-white hover:text-gray-300 transition-colors duration-200">info@eastcodedev.com</a></p>
              <p className="text-sm sm:text-base">{t.contact.phone}: <a href="tel:12154341280" className="text-white hover:text-gray-300 transition-colors duration-200">215-934-1280</a></p>
            </div>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700">
          <p className="text-center text-xs sm:text-sm text-gray-400">
            © {t.footer.year} EastCodeDev. {t.footer.rights}.
          </p>
        </div>
      </div>
    </footer>
  );
}
