'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './hooks/useLanguage';
import { translations } from './lib/translations';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-orange-100">
      {/* Hero Section with Banner */}
      <section className="relative bg-gradient-to-br from-yellow-100 to-orange-200">
        {/* Special Offer Banner */}
        <div className="bg-red-600 text-white py-2 text-center">
          <p className="text-xs sm:text-sm font-semibold">
            {language === 'zh' 
              ? '🔥 特价优惠：新客户可享受50% OFF + 免费定制域名 + 一年免费基础维护' 
              : '🔥 Special Offer: 50% OFF for New Clients + Free Custom Domain + 1 Year Free Basic Maintenance'
            }
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
              {t.home.title}
            </h1>
            <h2 className="text-lg sm:text-xl text-yellow-600 mb-4 sm:mb-6 font-semibold">
              {t.home.subtitle}
            </h2>
            <p className="text-base sm:text-lg text-gray-700 mb-8 sm:mb-10 max-w-3xl mx-auto font-medium">
              {t.home.description}
            </p>
            
            {/* Buttons and Contact Info */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-8">
              <Link
                href="/services"
                className="bg-yellow-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200 text-center"
              >
                {t.home.cta}
              </Link>
              <Link
                href="/contact"
                className="border-2 border-yellow-600 text-yellow-600 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition-colors duration-200 text-center"
              >
                {t.nav.contact}
              </Link>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Phone */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {language === 'zh' ? '电话/短信咨询' : 'Phone/SMS Consultation'}
                </h3>
                <a href="tel:12154341280" className="text-yellow-600 hover:text-yellow-700 font-medium">
                  215-934-1280
                </a>
              </div>

              {/* Email */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {language === 'zh' ? '邮件咨询' : 'Email'}
                </h3>
                <a href="mailto:info@eastcodedev.com" className="text-yellow-600 hover:text-yellow-700 font-medium text-sm">
                  info@eastcodedev.com
                </a>
              </div>

              {/* WeChat QR Code */}
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex items-center justify-center mb-3">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center">
        <Image
                      src="/wechatLogo.png" 
                      alt="WeChat Logo"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {language === 'zh' ? '微信咨询' : 'WeChat'}
                </h3>
                <div className="text-center">
            <Image
                    src="/QRCode.png" 
                    alt={language === 'zh' ? '微信二维码' : 'WeChat QR Code'}
                    width={64}
                    height={64}
                    className="w-16 h-16 mx-auto mb-2"
                  />
                  <p className="text-xs text-gray-500">
                    {language === 'zh' ? '扫码添加' : 'Scan to add'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {language === 'zh' ? '我们的服务' : 'Our Services'}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              {language === 'zh' 
                ? '从网站建设到移动应用，我们为各行各业提供专业的数字解决方案。'
                : 'From website development to mobile apps, we provide professional digital solutions for all industries.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            <div className="text-center p-4 sm:p-6">
              <div className="bg-yellow-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {language === 'zh' ? '网站开发' : 'Website Development'}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {language === 'zh' 
                  ? '企业官网、电商平台、展示网站等'
                  : 'Corporate websites, e-commerce platforms, showcase sites'
                }
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="bg-yellow-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {language === 'zh' ? '移动应用' : 'Mobile Apps'}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {language === 'zh' 
                  ? 'iOS、Android应用开发'
                  : 'iOS and Android app development'
                }
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="bg-yellow-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {language === 'zh' ? '技术支持' : 'Technical Support'}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {language === 'zh' 
                  ? '专业的技术支持和问题解决'
                  : 'Professional technical support and problem solving'
                }
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="bg-yellow-600 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200 inline-block"
            >
              {language === 'zh' ? '查看所有服务' : 'View All Services'}
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {language === 'zh' ? '最新项目' : 'Recent Work'}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              {language === 'zh' 
                ? '查看我们最近完成的项目，了解我们的专业水平和服务质量。'
                : 'Check out our recent projects to see our professional level and service quality.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Project 1: Hung Vuong Markets */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
              {/* 图片区域 */}
              <div className="h-64 bg-gradient-to-br from-yellow-50 to-orange-50 overflow-hidden relative">
                <Image 
                  src="/huvongHung.png" 
                  alt="Hung Vuong Markets"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-gray-700">超市网站</span>
                  </div>
                </div>
              </div>
              
              {/* 内容区域 */}
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">恒发超市</h3>
                  <p className="text-gray-600 mb-4 font-medium">Hung Vuong Markets</p>
                  <div className="flex justify-center space-x-2">
                    <span className="bg-yellow-100 text-yellow-800 px-3 py-1.5 rounded-full text-sm font-medium">多语言</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1.5 rounded-full text-sm font-medium">电商</span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  {language === 'zh' ? '恒发超市官方网站' : 'Hung Vuong Markets Official Website'}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                  {language === 'zh' 
                    ? '多分店信息展示、每周特惠活动、商铺租赁等完整功能。'
                    : 'Multi-store information display, weekly special offers, store leasing and complete functionality.'
                  }
                </p>
                <a
                  href="https://www.hungvuongs.com/"
          target="_blank"
          rel="noopener noreferrer"
                  className="inline-flex items-center bg-yellow-600 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200 text-xs sm:text-sm"
                >
                  {language === 'zh' ? '查看网站' : 'View Website'}
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 2: Artistry Spa Wellness */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
              {/* 图片区域 */}
              <div className="h-64 bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden relative">
          <Image
                  src="/artistry.png" 
                  alt="Artistry Spa"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-gray-700">美容院</span>
                  </div>
                </div>
              </div>
              
              {/* 内容区域 */}
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">Artistry Spa</h3>
                  <p className="text-gray-600 mb-4 font-medium">Wellness Center</p>
                  <div className="flex justify-center space-x-2">
                    <span className="bg-pink-100 text-pink-800 px-3 py-1.5 rounded-full text-sm font-medium">预约系统</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full text-sm font-medium">美容</span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  {language === 'zh' ? 'Artistry Spa 美容中心' : 'Artistry Spa Wellness Center'}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                  {language === 'zh' 
                    ? '服务展示、在线预约系统、客户评价等完整功能。'
                    : 'Service displays, online booking system, customer reviews and complete functionality.'
                  }
                </p>
                <a
                  href="https://artistryspawellness.com/"
          target="_blank"
          rel="noopener noreferrer"
                  className="inline-flex items-center bg-yellow-600 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200 text-xs sm:text-sm"
                >
                  {language === 'zh' ? '查看网站' : 'View Website'}
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 3: Auto Safe Glass */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group md:col-span-2 lg:col-span-1">
              {/* 图片区域 */}
              <div className="h-64 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden relative">
                <Image 
                  src="/autoglass.png" 
                  alt="Auto Safe Glass"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-gray-700">汽车玻璃</span>
                  </div>
                </div>
              </div>
              
              {/* 内容区域 */}
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">Auto Safe Glass</h3>
                  <p className="text-gray-600 mb-4 font-medium">Auto Glass Service</p>
                  <div className="flex justify-center space-x-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium">上门服务</span>
                    <span className="bg-cyan-100 text-cyan-800 px-3 py-1.5 rounded-full text-sm font-medium">保险</span>
                  </div>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  {language === 'zh' ? 'Auto Safe Glass 汽车玻璃' : 'Auto Safe Glass Auto Glass Service'}
                </h3>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                  {language === 'zh' 
                    ? '专业汽车玻璃服务网站，包含上门服务、保险协助、终身保修等功能。'
                    : 'Professional auto glass service website with mobile service, insurance assistance, and lifetime warranty features.'
                  }
                </p>
                <a
                  href="https://www.autosafeglass.com/"
          target="_blank"
          rel="noopener noreferrer"
                  className="inline-flex items-center bg-yellow-600 text-white px-3 sm:px-4 py-2 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200 text-xs sm:text-sm"
                >
                  {language === 'zh' ? '查看网站' : 'View Website'}
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {language === 'zh' ? '为什么选择我们' : 'Why Choose Us'}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              {language === 'zh' 
                ? '我们提供全方位的数字解决方案，帮助您的业务在竞争激烈的市场中脱颖而出。'
                : 'We provide comprehensive digital solutions to help your business stand out in a competitive market.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4 sm:p-6">
              <div className="bg-yellow-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {language === 'zh' ? '专业设计' : 'Professional Design'}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {language === 'zh' 
                  ? '我们的设计师拥有丰富的经验，能够创造出既美观又实用的网站界面。'
                  : 'Our designers have extensive experience creating beautiful and functional website interfaces.'
                }
              </p>
            </div>

            <div className="text-center p-4 sm:p-6">
              <div className="bg-yellow-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {language === 'zh' ? '快速开发' : 'Fast Development'}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {language === 'zh' 
                  ? '使用最新的技术和工具，确保项目能够快速交付，同时保持高质量。'
                  : 'Using the latest technologies and tools to ensure fast delivery while maintaining high quality.'
                }
              </p>
            </div>

            <div className="text-center p-4 sm:p-6 sm:col-span-2 lg:col-span-1">
              <div className="bg-yellow-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {language === 'zh' ? '持续支持' : 'Ongoing Support'}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {language === 'zh' 
                  ? '项目完成后，我们提供专业的技术支持，确保网站稳定运行。'
                  : 'After project completion, we provide professional technical support to ensure stable website operation.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-r from-red-600 to-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white bg-opacity-95 rounded-lg p-6 sm:p-8 mb-6 sm:mb-8 shadow-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-red-600 mb-3 sm:mb-4">
              {language === 'zh' ? '🔥 特价优惠进行中！' : '🔥 Special Offer Available!'}
            </h2>
            <div className="text-lg sm:text-xl md:text-2xl text-gray-800 font-bold mb-4">
              {language === 'zh' 
                ? '专业公司网站建设'
                : 'Professional Corporate Website'
              }
            </div>
            <div className="text-base sm:text-lg text-gray-700 mb-6 font-medium">
              {language === 'zh' 
                ? '✅ 最快14天上线 ✅ 质量保证 ✅ 专业设计'
                : '✅ Launch in 14 Days ✅ Quality Guaranteed ✅ Professional Design'
              }
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-6">
            <Link
              href="/contact"
              className="bg-white text-red-600 px-6 sm:px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors duration-200 inline-block text-lg"
            >
              {language === 'zh' ? '马上定制' : 'Start Customizing'}
            </Link>
            <a
              href="tel:12154341280"
              className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors duration-200 inline-block"
            >
              {language === 'zh' ? '电话/短信 215-934-1280' : 'Phone/SMS 215-934-1280'}
            </a>
          </div>
          
          {/* WeChat QR Code in CTA */}
          <div className="text-center">
            <p className="text-white text-sm mb-3">
              {language === 'zh' ? '或微信扫码咨询' : 'Or scan WeChat QR Code'}
            </p>
            <div className="inline-block bg-white bg-opacity-20 p-3 rounded-lg">
              <Image 
                src="/QRCode.png" 
                alt={language === 'zh' ? '微信二维码' : 'WeChat QR Code'}
                width={80}
                height={80}
                className="w-20 h-20 mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
