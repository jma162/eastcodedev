'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../lib/translations';
import Head from 'next/head';
import StructuredData from '../components/StructuredData';

export default function Contact() {
  const { language } = useLanguage();
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 这里可以添加表单提交逻辑
    alert(language === 'zh' ? '感谢您的留言！我们会尽快回复。' : 'Thank you for your message! We will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Head>
        <title>联系我们 - EastCodeDev专业网站设计开发服务</title>
        <meta name="description" content="联系EastCodeDev获取专业的网站设计开发服务。电话：215-934-1280，邮箱：info@eastcodedev.com，微信扫码咨询。专业团队为您提供免费咨询和项目报价。" />
        <meta name="keywords" content="联系我们,EastCodeDev联系方式,网站设计咨询,免费咨询,项目报价,电话咨询,微信咨询" />
        <link rel="canonical" href="https://eastcodedev.com/contact" />
        <meta property="og:title" content="联系我们 - EastCodeDev专业网站设计开发服务" />
        <meta property="og:description" content="联系EastCodeDev获取专业的网站设计开发服务。电话：215-934-1280，邮箱：info@eastcodedev.com，微信扫码咨询。" />
        <meta property="og:url" content="https://eastcodedev.com/contact" />
        <meta property="og:type" content="website" />
      </Head>
      <StructuredData type="contact" />
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              {t.contact.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-yellow-100 max-w-3xl mx-auto px-4">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                {language === 'zh' ? '发送消息' : 'Send us a Message'}
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.name}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm sm:text-base"
                    placeholder={language === 'zh' ? '请输入您的姓名' : 'Enter your name'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.email}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm sm:text-base"
                    placeholder={language === 'zh' ? '请输入您的邮箱' : 'Enter your email'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent text-sm sm:text-base"
                    placeholder={language === 'zh' ? '请输入您的留言' : 'Enter your message'}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-yellow-600 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold hover:bg-yellow-700 transition-colors duration-200 text-sm sm:text-base"
                >
                  {t.contact.submit}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                {language === 'zh' ? '联系信息' : 'Contact Information'}
              </h2>
              
              <div className="space-y-6 sm:space-y-8">

                <div className="flex items-start">
                  <div className="bg-yellow-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                      {t.contact.phone}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      <a href="tel:12154341280" className="text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium">
                        215-934-1280
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                      {t.contact.emailLabel}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600">
                      <a href="mailto:info@eastcodedev.com" className="text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium">
                        info@eastcodedev.com
                      </a>
                    </p>
                  </div>
                </div>

        <div className="flex items-start">
          <div className="bg-green-100 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
            <Image 
              src="/wechatLogo.png" 
              alt="微信咨询图标 - WeChat Logo"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6"
              priority={false}
              loading="lazy"
            />
          </div>
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
              {language === 'zh' ? '微信咨询' : 'WeChat Consultation'}
            </h3>
            <div className="flex items-center space-x-4">
              <div className="text-sm sm:text-base text-gray-600">
                {language === 'zh' ? '扫码添加微信' : 'Scan QR Code to Add WeChat'}
              </div>
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <Image
                  src="/QRCode.png"
                  alt={language === 'zh' ? 'EastCodeDev微信二维码 - 扫码添加微信咨询' : 'EastCodeDev WeChat QR Code - Scan to add WeChat consultation'}
                  width={112}
                  height={112}
                  className="w-24 h-24 sm:w-28 sm:h-28"
                  priority={false}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

                <div className="flex items-start">
                  <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {language === 'zh' ? '工作时间' : 'Business Hours'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'zh' 
                        ? '周一至周五: 9:00 - 18:00\n周六: 10:00 - 16:00\n周日: 休息'
                        : 'Monday - Friday: 9:00 - 18:00\nSaturday: 10:00 - 16:00\nSunday: Closed'
                      }
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      </div>
    </>
  );
}
