'use client';

import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../lib/translations';

export default function Services() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left side - Title and subtitle */}
            <div className="text-center lg:text-left lg:flex-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
                {t.services.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-yellow-100 max-w-3xl mx-auto lg:mx-0 px-4 lg:px-0">
                {t.services.subtitle}
              </p>
            </div>
            
            {/* Right side - WeChat QR Code */}
            <div className="mt-8 lg:mt-0 lg:ml-8">
              <div className="text-center">
                <p className="text-white text-sm mb-3">
                  {language === 'zh' ? '微信扫码咨询' : 'Scan WeChat QR Code'}
                </p>
                <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                  <img 
                    src="/QRCode.png" 
                    alt={language === 'zh' ? '微信二维码' : 'WeChat QR Code'}
                    className="w-28 h-28 sm:w-32 sm:h-32"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-200">
              <div className="bg-yellow-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                {language === 'zh' ? '全新网站' : 'New Website'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {language === 'zh' ? '从零开始创建专业网站' : 'Create professional websites from scratch'}
              </p>
            </div>

            <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-200">
              <div className="bg-yellow-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                {language === 'zh' ? '手机APP开发' : 'Mobile APP Development'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {language === 'zh' ? 'iOS和Android应用开发' : 'iOS and Android app development'}
              </p>
            </div>

            <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-200">
              <div className="bg-yellow-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                {language === 'zh' ? '餐馆网页/订餐预约' : 'Restaurant Webpage/Reservation'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {language === 'zh' ? '在线订餐和预约系统' : 'Online ordering and reservation system'}
              </p>
            </div>

            <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-200">
              <div className="bg-yellow-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                {language === 'zh' ? '奶茶甜品店网页' : 'Bubble Tea/Dessert Shop Webpage'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {language === 'zh' ? '特色饮品店专属网站' : 'Specialized website for beverage shops'}
              </p>
            </div>

            <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-200">
              <div className="bg-yellow-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                {language === 'zh' ? '旧站升级/内容更新' : 'Website Upgrade/Content Update'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {language === 'zh' ? '网站功能升级' : 'Website functionality upgrade'}
              </p>
            </div>

            <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-200">
              <div className="bg-yellow-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                {language === 'zh' ? '电商网页' : 'E-commerce Webpage'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {language === 'zh' ? '在线购物平台开发' : 'Online shopping platform development'}
              </p>
            </div>

            <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-200">
              <div className="bg-yellow-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                {language === 'zh' ? '商品展示网页' : 'Product Display Webpage'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {language === 'zh' ? '产品展示和推广网站' : 'Product showcase and promotion website'}
              </p>
            </div>

            <div className="bg-yellow-50 p-4 sm:p-6 rounded-lg text-center hover:shadow-md transition-shadow duration-200">
              <div className="bg-yellow-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1 sm:mb-2">
                {language === 'zh' ? '美容美发预约' : 'Beauty Salon Appointment'}
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                {language === 'zh' ? '美容美发预约系统' : 'Beauty salon appointment system'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Website Templates Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {language === 'zh' ? '网站类型' : 'Website Types'}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'zh' 
                ? '我们为不同行业提供专业的网站模板，快速上线，美观实用'
                : 'Professional website  for different industries, fast launch, beautiful and practical'
              }
            </p>
          </div>

          {/* Template Categories */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* 美容美甲模板 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
              <div className="h-64 bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-pink-200 via-purple-200 to-pink-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-10 h-10 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">美容美甲</h3>
                    <p className="text-sm text-gray-600">Beauty & Nail Salon</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-gray-700">美容</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-pink-600 transition-colors duration-300">
                  {language === 'zh' ? '美容美甲' : 'Beauty & Nail'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'zh' 
                    ? '专业美容美甲网站模板，包含预约系统、服务展示、客户评价等功能'
                    : 'Professional beauty and nail salon template with booking system, service showcase, and customer reviews'
                  }
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">预约系统</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">服务展示</span>
                  <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">客户评价</span>
                </div>
              </div>
            </div>

            {/* 餐厅模板 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
              <div className="h-64 bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-orange-200 via-red-200 to-orange-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">餐厅</h3>
                    <p className="text-sm text-gray-600">Restaurant</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-gray-700">餐厅</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                  {language === 'zh' ? '餐厅' : 'Restaurant'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'zh' 
                    ? '专业餐厅网站模板，包含菜单展示、在线订餐、位置信息等功能'
                    : 'Professional restaurant template with menu display, online ordering, and location info'
                  }
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">在线订餐</span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">菜单展示</span>
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">位置信息</span>
                </div>
              </div>
            </div>

            {/* 汽车服务模板 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
              <div className="h-64 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-blue-200 via-cyan-200 to-blue-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">汽车服务</h3>
                    <p className="text-sm text-gray-600">Auto Service</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-gray-700">汽车</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {language === 'zh' ? '汽车服务' : 'Auto Service'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'zh' 
                    ? '专业汽车服务网站模板，包含上门服务、保险协助、预约系统等功能'
                    : 'Professional auto service template with mobile service, insurance assistance, and booking system'
                  }
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">上门服务</span>
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">保险协助</span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">预约系统</span>
                </div>
              </div>
            </div>

            {/* 医疗诊所模板 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
              <div className="h-64 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-green-200 via-emerald-200 to-green-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">医疗诊所</h3>
                    <p className="text-sm text-gray-600">Medical Clinic</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-gray-700">医疗</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                  {language === 'zh' ? '医疗诊所' : 'Medical Clinic'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'zh' 
                    ? '专业医疗诊所网站模板，包含在线预约、医生介绍、服务项目等功能'
                    : 'Professional medical clinic template with online booking, doctor profiles, and service listings'
                  }
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">在线预约</span>
                  <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium">医生介绍</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">服务项目</span>
                </div>
              </div>
            </div>

            {/* 律师事务所模板 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
              <div className="h-64 bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-indigo-200 via-purple-200 to-indigo-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">律师事务所</h3>
                    <p className="text-sm text-gray-600">Law Firm</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-gray-700">法律</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                  {language === 'zh' ? '律师事务所' : 'Law Firm'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'zh' 
                    ? '专业律师事务所网站模板，包含律师介绍、案例展示、咨询服务等功能'
                    : 'Professional law firm template with lawyer profiles, case studies, and consultation services'
                  }
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">律师介绍</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">案例展示</span>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">咨询服务</span>
                </div>
              </div>
            </div>

            {/* 教育培训模板 */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
              <div className="h-64 bg-gradient-to-br from-yellow-50 to-amber-50 overflow-hidden relative">
                <div className="w-full h-full bg-gradient-to-br from-yellow-200 via-amber-200 to-yellow-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <svg className="w-10 h-10 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-lg font-bold text-gray-800">教育培训</h3>
                    <p className="text-sm text-gray-600">Education</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-gray-700">教育</span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {language === 'zh' ? '教育培训' : 'Education'}
                </h3>
                <p className="text-gray-600 mb-4">
                  {language === 'zh' 
                    ? '专业教育培训网站模板，包含课程展示、在线报名、师资介绍等功能'
                    : 'Professional education template with course display, online registration, and teacher profiles'
                  }
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">课程展示</span>
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">在线报名</span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">师资介绍</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'zh' ? '我们的工作流程' : 'Our Work Process'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'zh' 
                ? '我们采用系统化的方法，确保每个项目都能按时高质量完成。'
                : 'We use a systematic approach to ensure every project is completed on time with high quality.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {language === 'zh' ? '需求分析' : 'Requirements Analysis'}
              </h3>
              <p className="text-gray-600">
                {language === 'zh' 
                  ? '深入了解客户需求，制定详细的项目计划。'
                  : 'Deep understanding of client needs and creating detailed project plans.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {language === 'zh' ? '设计阶段' : 'Design Phase'}
              </h3>
              <p className="text-gray-600">
                {language === 'zh' 
                  ? '创建原型和视觉设计，确保符合品牌形象。'
                  : 'Creating prototypes and visual designs that align with brand identity.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {language === 'zh' ? '开发实现' : 'Development'}
              </h3>
              <p className="text-gray-600">
                {language === 'zh' 
                  ? '使用最新技术进行开发，确保代码质量和性能。'
                  : 'Development using latest technologies, ensuring code quality and performance.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {language === 'zh' ? '测试交付' : 'Testing & Delivery'}
              </h3>
              <p className="text-gray-600">
                {language === 'zh' 
                  ? '全面测试后交付项目，并提供后续支持服务。'
                  : 'Comprehensive testing before delivery and providing ongoing support services.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-yellow-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {language === 'zh' ? '准备开始您的项目？' : 'Ready to Start Your Project?'}
          </h2>
          <p className="text-xl text-yellow-100 mb-8">
            {language === 'zh' 
              ? '联系我们获取免费咨询和项目报价。'
              : 'Contact us for a free consultation and project quote.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-yellow-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 inline-block"
            >
              {t.nav.contact}
            </a>
            
            {/* WeChat QR Code */}
            <div className="text-center">
              <p className="text-white text-sm mb-3">
                {language === 'zh' ? '或微信扫码咨询' : 'Or scan WeChat QR Code'}
              </p>
              <div className="inline-block bg-white bg-opacity-20 p-3 rounded-lg">
                <img 
                  src="/QRCode.png" 
                  alt={language === 'zh' ? '微信二维码' : 'WeChat QR Code'}
                  className="w-20 h-20 sm:w-24 sm:h-24"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
