'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from './hooks/useLanguage';
import { translations } from './lib/translations';
import StructuredData from './components/StructuredData';
import { useRef, useEffect, useState } from 'react';
import { useEstimate } from './contexts/EstimateContext';

export default function Home() {
  const { language } = useLanguage();
  const t = translations[language];
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // 估价功能状态
  const { showEstimateForm, setShowEstimateForm } = useEstimate();
  const [estimateForm, setEstimateForm] = useState({
    projectType: '',
    features: '',
    customFeatures: '',
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay failed:', error);
      });
    }
  }, []);

  // 监听 URL hash，如果是从其他页面跳转过来的，打开估价表单
  useEffect(() => {
    if (window.location.hash === '#estimate') {
      setShowEstimateForm(true);
      window.history.replaceState(null, '', window.location.pathname);
    }
  }, [setShowEstimateForm]);

  const handleEstimateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // 验证必填字段
    if (!estimateForm.projectType) {
      alert(language === 'zh' ? '请选择网站类型' : 'Please select a project type');
      setSubmitStatus('error');
      return;
    }

    if (!estimateForm.email || !estimateForm.email.trim()) {
      alert(language === 'zh' ? '请输入邮箱地址' : 'Please enter your email address');
      setSubmitStatus('error');
      return;
    }

    // 验证邮箱格式
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(estimateForm.email)) {
      alert(language === 'zh' ? '请输入有效的邮箱地址' : 'Please enter a valid email address');
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // 构建消息内容
      const featuresText = estimateForm.features === (language === 'zh' ? '其他' : 'Other') 
        ? estimateForm.customFeatures || (language === 'zh' ? '无' : 'None')
        : (estimateForm.features || (language === 'zh' ? '无' : 'None'));
      
      const messageContent = `估价请求 / Estimate Request\n\n网站类型 / Project Type: ${estimateForm.projectType}\n功能需求 / Features: ${featuresText}\n\n${estimateForm.message ? `其他信息 / Additional Info:\n${estimateForm.message}` : ''}`;

      const requestBody = {
        name: estimateForm.name || (language === 'zh' ? '估价请求' : 'Estimate Request'),
        email: estimateForm.email.trim(),
        message: messageContent,
        language: language
      };

      console.log('Submitting form:', requestBody);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log('Response status:', response.status);
      console.log('Response data:', data);

      if (response.ok) {
        setSubmitStatus('success');
        setEstimateForm({
          projectType: '',
          features: '',
          customFeatures: '',
          name: '',
          email: '',
          message: ''
        });
        setTimeout(() => {
          setShowEstimateForm(false);
          setSubmitStatus('idle');
        }, 3000);
      } else {
        console.error('Submission error:', data);
        setSubmitStatus('error');
        // 显示更详细的错误信息
        if (data.error) {
          alert(language === 'zh' ? `提交失败: ${data.error}` : `Submission failed: ${data.error}`);
        }
      }
    } catch (error) {
      console.error('Error submitting estimate:', error);
      setSubmitStatus('error');
      alert(language === 'zh' ? `网络错误: ${error instanceof Error ? error.message : 'Unknown error'}` : `Network error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleEstimateChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setEstimateForm({
      ...estimateForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="website" />
      <StructuredData type="service" />
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section with Video Background */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Hero Video Background */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50 z-10"></div>
        
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/10 via-transparent to-orange-600/10 z-10"></div>

        {/* Content Container */}
        <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 md:py-32">
          <div className="max-w-4xl mx-auto">
            {/* Badge */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-4 sm:mb-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-white text-xs sm:text-sm font-medium">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></span>
                <span className="whitespace-nowrap">{language === 'zh' ? '专业网站设计服务' : 'Professional Web Design Services'}</span>
              </div>
              <div className="inline-flex items-center gap-2 text-white/90 text-xs sm:text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="whitespace-nowrap">{language === 'zh' ? '服务费城、纽约及周边地区' : 'Serving Philadelphia, New York & Surrounding Areas'}</span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-center mb-6 sm:mb-8">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 sm:mb-4 leading-tight px-2">
                {t.home.title}
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent px-2">
                {t.home.subtitle}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed px-2">
                {t.home.description}
              </p>
            </div>

            {/* Foundation Package Highlight with QR Code */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 mb-8 sm:mb-10 px-2">
              {/* Foundation Package Card */}
              <div className="w-full max-w-lg bg-white/10 backdrop-blur-md border-2 border-yellow-400/50 rounded-2xl px-4 sm:px-6 py-5 sm:py-6 shadow-2xl shadow-yellow-500/20">
                <div className="text-center mb-4">
                  <div className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    {language === 'zh' ? '基础套餐' : 'Foundation Package'}
                  </div>
                  <h3 className="text-white text-xl sm:text-2xl font-bold mb-3">
                    {language === 'zh' ? '专业网站，为增长而建' : 'Your professional website, built for growth'}
                  </h3>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-center sm:text-left w-full sm:w-auto">
                    <div className="flex items-baseline justify-center sm:justify-start gap-2 mb-2">
                      <span className="text-white/50 line-through text-base sm:text-lg">
                        $1,499
                      </span>
                      <span className="text-3xl sm:text-4xl font-bold text-yellow-300">
                        $1,099
                      </span>
                    </div>
                    <div className="text-white/80 text-xs sm:text-sm">
                      {language === 'zh' ? '限时优惠价格' : 'Limited Time Offer'}
                    </div>
                  </div>
                  <div className="hidden sm:block h-16 w-px bg-white/20 flex-shrink-0"></div>
                  <div className="text-center sm:text-left w-full sm:w-auto">
                    <div className="text-white text-sm sm:text-base font-medium mb-2">
                      {language === 'zh' ? '定制4页面网站' : 'Custom 4-Page Website'}
                    </div>
                    <div className="text-white/70 text-xs">
                      {language === 'zh' 
                        ? '首页 / 关于我们 / 服务 / 联系我们' 
                        : 'Home / About / Services / Contact'}
                    </div>
                    <div className="text-white/60 text-xs mt-1">
                      {language === 'zh' ? '响应式设计 + SEO优化 + 7天上线' : 'Responsive + SEO + Launch in 7 Days'}
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-2 mt-2 pt-2 border-t border-white/20">
                      <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                      </svg>
                      <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-yellow-400 text-xs font-semibold">
                        {language === 'zh' ? '开发一次，手机电脑通用' : 'One Development, Mobile & Desktop'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* WeChat QR Code */}
              <div className="text-center">
                <p className="text-white/90 text-sm sm:text-base mb-3 sm:mb-4 font-medium">
                  {language === 'zh' ? '微信扫码咨询' : 'Scan WeChat QR Code'}
                </p>
                <div className="inline-block bg-white/10 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/30 shadow-xl">
                  <Image 
                    src="/QRCode.png" 
                    alt={language === 'zh' ? 'EastCodeDev微信二维码 - 扫码咨询网站设计服务' : 'EastCodeDev WeChat QR Code - Scan to consult web design services'}
                    width={120}
                    height={120}
                    className="w-24 h-24 sm:w-28 sm:h-28 mx-auto rounded-lg"
                    priority={true}
                    quality={90}
                    sizes="(max-width: 640px) 96px, 112px"
                  />
                </div>
              </div>
            </div>

            {/* Website Benefits */}
            <div className="mb-8 sm:mb-10 px-2">
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {/* Benefit 1: Google Search */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-5 text-center hover:bg-white/15 transition-all duration-300">
                    <div className="mb-3 flex justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-2">
                      {language === 'zh' ? 'Google快速找到' : 'Easy Google Search'}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                      {language === 'zh' 
                        ? 'SEO优化，让客户在Google搜索时快速找到您的企业' 
                        : 'SEO optimized so customers can quickly find your business on Google'}
                    </p>
                  </div>

                  {/* Benefit 2: Professional Image */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-5 text-center hover:bg-white/15 transition-all duration-300">
                    <div className="mb-3 flex justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-2">
                      {language === 'zh' ? '专业形象' : 'Professional Image'}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                      {language === 'zh' 
                        ? '提升企业专业形象，增强客户信任度' 
                        : 'Enhance your professional image and build customer trust'}
                    </p>
                  </div>

                  {/* Benefit 3: 24/7 Online */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-5 text-center hover:bg-white/15 transition-all duration-300 sm:col-span-2 lg:col-span-1">
                    <div className="mb-3 flex justify-center">
                      <svg className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-white font-semibold text-sm sm:text-base mb-2">
                      {language === 'zh' ? '24小时在线' : '24/7 Online'}
                    </h3>
                    <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                      {language === 'zh' 
                        ? '全天候展示您的服务和产品，随时吸引潜在客户' 
                        : 'Showcase your services and products 24/7, attracting customers anytime'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-2">
              <button
                onClick={() => setShowEstimateForm(true)}
                className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-yellow-600 text-white font-semibold text-base sm:text-lg rounded-xl shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 flex items-center justify-center"
              >
                <span>{language === 'zh' ? '快速估价' : 'Get Estimate'}</span>
              </button>
              <Link
                href="/contact"
                className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white font-semibold text-base sm:text-lg rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
              >
                {t.nav.contact}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Estimate Modal */}
      {showEstimateForm && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setShowEstimateForm(false);
              setSubmitStatus('idle');
            }
          }}
        >
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => {
                setShowEstimateForm(false);
                setSubmitStatus('idle');
              }}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  {language === 'zh' ? '快速估价' : 'Project Estimate'}
                </h2>
                <p className="text-gray-600">
                  {language === 'zh' 
                    ? '填写项目信息，我们将尽快为您提供详细报价'
                    : "Fill in your project details and we'll provide you with a detailed quote"
                  }
                </p>
              </div>

              <form onSubmit={handleEstimateSubmit} className="space-y-6">
                {/* 网站类型 */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    {language === 'zh' ? '网站类型' : 'Project Type'} <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="projectType"
                    value={estimateForm.projectType}
                    onChange={handleEstimateChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900"
                  >
                    <option value="">{language === 'zh' ? '请选择网站类型' : 'Select project type'}</option>
                    <option value={language === 'zh' ? '企业官网' : 'Website'}>{language === 'zh' ? '企业官网' : 'Website'}</option>
                    <option value={language === 'zh' ? '电商平台' : 'E-commerce'}>{language === 'zh' ? '电商平台' : 'E-commerce'}</option>
                    <option value={language === 'zh' ? '移动应用' : 'Mobile App'}>{language === 'zh' ? '移动应用' : 'Mobile App'}</option>
                    <option value={language === 'zh' ? '定制开发' : 'Custom Development'}>{language === 'zh' ? '定制开发' : 'Custom Development'}</option>
                  </select>
                </div>

                {/* 功能需求 */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    {language === 'zh' ? '功能需求' : 'Features'}
                  </label>
                  <select
                    name="features"
                    value={estimateForm.features}
                    onChange={handleEstimateChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900 mb-3"
                  >
                    <option value="">{language === 'zh' ? '请选择功能（可选）' : 'Select features (optional)'}</option>
                    <option value={language === 'zh' ? '多语言支持' : 'Multi-language'}>{language === 'zh' ? '多语言支持' : 'Multi-language'}</option>
                    <option value={language === 'zh' ? '预约系统' : 'Booking System'}>{language === 'zh' ? '预约系统' : 'Booking System'}</option>
                    <option value={language === 'zh' ? '支付集成' : 'Payment Integration'}>{language === 'zh' ? '支付集成' : 'Payment Integration'}</option>
                    <option value={language === 'zh' ? '内容管理' : 'CMS'}>{language === 'zh' ? '内容管理' : 'CMS'}</option>
                    <option value={language === 'zh' ? 'SEO优化' : 'SEO Optimization'}>{language === 'zh' ? 'SEO优化' : 'SEO Optimization'}</option>
                    <option value={language === 'zh' ? '其他' : 'Other'}>{language === 'zh' ? '其他（请在下框描述）' : 'Other (describe below)'}</option>
                  </select>
                  {(estimateForm.features === (language === 'zh' ? '其他' : 'Other') || !estimateForm.features) && (
                    <input
                      type="text"
                      name="customFeatures"
                      value={estimateForm.customFeatures}
                      onChange={handleEstimateChange}
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900"
                      placeholder={language === 'zh' ? '请描述您需要的功能' : 'Describe the features you need'}
                    />
                  )}
                </div>

                {/* 姓名 */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    {language === 'zh' ? '姓名' : 'Name'}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={estimateForm.name}
                    onChange={handleEstimateChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900"
                    placeholder={language === 'zh' ? '请输入您的姓名' : 'Enter your name'}
                  />
                </div>

                {/* 邮箱 */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    {language === 'zh' ? '邮箱' : 'Email'} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={estimateForm.email}
                    onChange={handleEstimateChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900"
                    placeholder={language === 'zh' ? '请输入您的邮箱' : 'Enter your email'}
                  />
                </div>

                {/* 其他信息 */}
                <div>
                  <label className="block text-sm font-bold text-gray-900 mb-2">
                    {language === 'zh' ? '其他信息' : 'Additional Information'}
                  </label>
                  <textarea
                    name="message"
                    value={estimateForm.message}
                    onChange={handleEstimateChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 text-gray-900"
                    placeholder={language === 'zh' ? '请描述您的项目需求...' : 'Describe your project requirements...'}
                  />
                </div>

                {/* 提交按钮 */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-8 py-4 bg-yellow-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting 
                      ? (language === 'zh' ? '提交中...' : 'Submitting...')
                      : (language === 'zh' ? '提交估价请求' : 'Submit Estimate Request')
                    }
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setShowEstimateForm(false);
                      setSubmitStatus('idle');
                    }}
                    className="px-8 py-4 bg-white border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300"
                  >
                    {language === 'zh' ? '取消' : 'Cancel'}
                  </button>
                </div>

                {/* 提交状态 */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
                    <p className="font-semibold mb-1">{language === 'zh' ? '✅ 提交成功！' : '✅ Success!'}</p>
                    <p className="text-sm">{language === 'zh' ? '我们已收到您的估价请求，将尽快联系您。' : 'We have received your estimate request and will contact you soon.'}</p>
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-700 text-center">
                    <p className="font-semibold mb-1">{language === 'zh' ? '❌ 提交失败' : '❌ Submission Failed'}</p>
                    <p className="text-sm mb-2">{language === 'zh' ? '请检查必填字段（网站类型和邮箱）是否已填写。' : 'Please check that required fields (Project Type and Email) are filled.'}</p>
                    <p className="text-xs">{language === 'zh' ? '如问题持续，请直接致电 215-934-1280 或发送邮件至 info@eastcodedev.com' : 'If the problem persists, please call 215-934-1280 or email info@eastcodedev.com'}</p>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}

      {/* Pricing Packages Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
              {language === 'zh' ? '我们的套餐' : 'Our Packages'}
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              {language === 'zh' 
                ? '根据您的业务需求选择最合适的方案——从快速建立在线形象到长期维护和持续改进。'
                : 'Select the plan that aligns with your business needs – from establishing your online presence quickly to ongoing maintenance and continuous improvements.'}
            </p>
            <div className="flex items-center justify-center gap-2 text-yellow-400 mb-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-base sm:text-lg font-semibold">
                {language === 'zh' ? '开发一次，手机电脑通用' : 'One Development, Works on Mobile & Desktop'}
              </span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto">
              {language === 'zh' 
                ? '所有套餐均包含响应式设计，一次开发即可在手机、平板和电脑上完美显示'
                : 'All packages include responsive design - one development works perfectly on mobile, tablet, and desktop'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Package 1: Foundation */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {language === 'zh' ? '基础套餐' : 'Foundation'}
                </h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-gray-400 line-through text-xl sm:text-2xl">
                    $1,499
                  </span>
                  <span className="text-3xl sm:text-4xl font-bold text-yellow-400">
                    $1,099
                  </span>
                </div>
                <p className="text-yellow-300 text-sm sm:text-base leading-relaxed">
                  {language === 'zh' 
                    ? '专为初创企业和需要建立专业在线形象的小型公司设计。'
                    : 'Designed for startups and small companies looking to establish a professional online presence.'}
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">
                    {language === 'zh' ? '打造专业网站，助力业务发展' : 'A professional website crafted to support your business growth'}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">
                    {language === 'zh' ? '包含4个核心页面（首页、关于我们、服务介绍、联系方式）' : 'Includes 4 essential pages (Home, About Us, Services, Contact)'}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">
                    {language === 'zh' ? '自适应所有设备，搜索引擎优化配置' : 'Adapts to all devices with search engine optimization configured'}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">
                    {language === 'zh' ? '包含一次内容调整机会' : 'Includes one content adjustment opportunity'}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">
                    {language === 'zh' ? '客户咨询表单功能' : 'Customer inquiry form functionality'}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">
                    {language === 'zh' ? '一周内完成并上线' : 'Completed and launched within one week'}
                  </span>
                </li>
              </ul>
              <button
                onClick={() => setShowEstimateForm(true)}
                className="w-full px-6 py-3 bg-yellow-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105"
              >
                {language === 'zh' ? '选择此套餐' : 'Choose This Package'}
              </button>
            </div>

            {/* Package 2: Elevate */}
            <div className="bg-gray-800/50 backdrop-blur-sm border-2 border-yellow-500 rounded-2xl p-6 sm:p-8 hover:border-yellow-400 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/30 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                  {language === 'zh' ? '最受欢迎' : 'MOST POPULAR'}
                </span>
              </div>
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {language === 'zh' ? '升级套餐' : 'Elevate'}
                </h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-gray-400 line-through text-xl sm:text-2xl">
                    $2,299
                  </span>
                  <span className="text-3xl sm:text-4xl font-bold text-yellow-400">
                    $1,899
                  </span>
                </div>
                <p className="text-yellow-300 text-sm sm:text-base leading-relaxed">
                  {language === 'zh' 
                    ? '专为正在扩张并希望建立稳定客户来源的企业打造。'
                    : 'Tailored for businesses that are expanding and want to build a steady stream of customers.'}
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">
                    {language === 'zh' ? '可扩展至7个页面（适合展示产品或作品）' : 'Expandable up to 7 pages (ideal for showcasing products or portfolios)'}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">
                    {language === 'zh' ? '内容发布系统（博客/新闻功能）' : 'Content publishing system (blog/news features)'}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">
                    {language === 'zh' ? '客户信息收集和邮件订阅功能' : 'Customer information collection and email subscription features'}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">
                    {language === 'zh' ? '两次内容优化调整' : 'Two content optimization adjustments'}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">
                    {language === 'zh' ? '一对一网站管理教学和操作指导' : 'One-on-one website management training and operational guidance'}
                  </span>
                </li>
              </ul>
              <button
                onClick={() => setShowEstimateForm(true)}
                className="w-full px-6 py-3 bg-yellow-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105"
              >
                {language === 'zh' ? '选择此套餐' : 'Choose This Package'}
              </button>
            </div>

            {/* Package 3: Maintain */}
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl p-6 sm:p-8 hover:border-yellow-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-500/20">
              <div className="mb-6">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  {language === 'zh' ? '维护套餐' : 'Maintain'}
                </h3>
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-gray-400 line-through text-xl sm:text-2xl">
                    $350<span className="text-base text-gray-500">/{language === 'zh' ? '月' : 'mo'}</span>
                  </span>
                  <span className="text-3xl sm:text-4xl font-bold text-yellow-400">
                    $250<span className="text-lg sm:text-xl text-gray-400">/{language === 'zh' ? '月' : 'month'}</span>
                  </span>
                </div>
                <p className="text-yellow-300 text-sm sm:text-base leading-relaxed">
                  {language === 'zh' 
                    ? '专为时间有限的企业主设计，由专业团队负责网站的日常运营和维护。'
                    : 'Designed for time-constrained business owners, with a professional team handling daily operations and maintenance.'}
                </p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">
                    {language === 'zh' ? '每月定期内容更新（文字、图片、产品信息、价格调整）' : 'Regular monthly content updates (text, images, product information, pricing adjustments)'}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">
                    {language === 'zh' ? '系统维护和安全性监控' : 'System maintenance and security monitoring'}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">
                    {language === 'zh' ? '搜索引擎优化微调和链接维护' : 'Search engine optimization fine-tuning and link maintenance'}
                  </span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm sm:text-base">
                    {language === 'zh' ? '优先处理内容修改和技术问题' : 'Priority handling of content modifications and technical issues'}
                  </span>
                </li>
              </ul>
              <button
                onClick={() => setShowEstimateForm(true)}
                className="w-full px-6 py-3 bg-yellow-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-yellow-500/50 transition-all duration-300 hover:scale-105"
              >
                {language === 'zh' ? '选择此套餐' : 'Choose This Package'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-100 to-orange-100 rounded-full px-4 py-2 mb-6">
              <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-yellow-800">{language === 'zh' ? '项目案例' : 'Portfolio'}</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {language === 'zh' ? '最新项目' : 'Recent Work'}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {language === 'zh' 
                ? '查看我们最近完成的项目，了解我们的专业水平和服务质量。'
                : 'Check out our recent projects to see our professional level and service quality.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Project 1: Asianfresh (家和超市) */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
              {/* 图片区域 */}
              <div className="h-64 bg-gradient-to-br from-green-50 to-emerald-50 overflow-hidden relative">
                <Image 
                  src="/家和超市.png" 
                  alt="家和超市官方网站 - Asianfresh 费城唐人街超市网站项目案例"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={true}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">家和超市</h3>
                  <p className="text-gray-600 mb-4 font-medium">Asianfresh</p>
                  <div className="flex justify-center space-x-2">
                    <span className="bg-green-100 text-green-800 px-3 py-1.5 rounded-full text-sm font-medium">多语言</span>
                    <span className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-full text-sm font-medium">特惠活动</span>
                  </div>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  {language === 'zh' ? '家和超市官方网站' : 'Asianfresh Official Website'}
                </h4>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                  {language === 'zh' 
                    ? '费城唐人街超市网站，包含每周特惠、营业时间、联系方式等功能。'
                    : 'Chinatown Philadelphia supermarket website with weekly specials, business hours, and contact information.'
                  }
                </p>
                <a
                  href="https://www.asianfreshfood.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 bg-yellow-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span>{language === 'zh' ? '查看网站' : 'View Website'}</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 2: Rising Tide Salon */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
              {/* 图片区域 */}
              <div className="h-64 bg-gradient-to-br from-purple-50 to-pink-50 overflow-hidden relative">
                <Image 
                  src="/美发店.png" 
                  alt="Rising Tide 美发沙龙网站项目案例 - 高端美发沙龙服务展示和在线预约系统"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={true}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-gray-700">美发沙龙</span>
                  </div>
                </div>
              </div>
              
              {/* 内容区域 */}
              <div className="p-6">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">Rising Tide</h3>
                  <p className="text-gray-600 mb-4 font-medium">Hair Salon & Skin Care</p>
                  <div className="flex justify-center space-x-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1.5 rounded-full text-sm font-medium">预约系统</span>
                    <span className="bg-pink-100 text-pink-800 px-3 py-1.5 rounded-full text-sm font-medium">美发</span>
                  </div>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  {language === 'zh' ? 'Rising Tide 美发沙龙' : 'Rising Tide Hair Salon'}
                </h4>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                  {language === 'zh' 
                    ? '高端美发沙龙网站，包含服务展示、在线预约、价格表等功能。'
                    : 'Premium hair salon website with service displays, online booking, and pricing information.'
                  }
                </p>
                <a
                  href="https://rising-tide-salon.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 bg-yellow-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span>{language === 'zh' ? '查看网站' : 'View Website'}</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 3: Starlights Auto Glass */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
              {/* 图片区域 */}
              <div className="h-64 bg-gradient-to-br from-indigo-50 to-blue-50 overflow-hidden relative">
                <Image 
                  src="/汽车.png" 
                  alt="Starlights Auto Glass 汽车玻璃服务网站项目案例 - 上门服务和保险协助"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={true}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">Starlights Auto Glass</h3>
                  <p className="text-gray-600 mb-4 font-medium">Auto Glass Service</p>
                  <div className="flex justify-center space-x-2">
                    <span className="bg-indigo-100 text-indigo-800 px-3 py-1.5 rounded-full text-sm font-medium">上门服务</span>
                    <span className="bg-blue-100 text-blue-800 px-3 py-1.5 rounded-full text-sm font-medium">终身保修</span>
                  </div>
                </div>
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  {language === 'zh' ? 'Starlights 汽车玻璃服务' : 'Starlights Auto Glass Service'}
                </h4>
                <p className="text-gray-600 mb-3 sm:mb-4 text-xs sm:text-sm">
                  {language === 'zh' 
                    ? '专业汽车玻璃服务网站，包含上门服务、保险协助、终身保修等功能。'
                    : 'Professional auto glass service website with mobile service, insurance assistance, and lifetime warranty features.'
                  }
                </p>
                <a
                  href="https://www.starlightsautoglass.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 bg-yellow-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span>{language === 'zh' ? '查看网站' : 'View Website'}</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 4: Hung Vuong Markets */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group backdrop-blur-sm">
              {/* 图片区域 */}
              <div className="h-64 bg-gradient-to-br from-yellow-50 to-orange-50 overflow-hidden relative">
                <Image 
                  src="/huvongHung.png" 
                  alt="恒发超市官方网站 - Hung Vuong Markets 多分店信息展示网站项目案例"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  quality={85}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  {language === 'zh' ? '恒发超市官方网站' : 'Hung Vuong Markets Official Website'}
                </h4>
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
                  className="group/btn inline-flex items-center gap-2 bg-yellow-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span>{language === 'zh' ? '查看网站' : 'View Website'}</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 5: Artistry Spa Wellness */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group">
              {/* 图片区域 */}
              <div className="h-64 bg-gradient-to-br from-pink-50 to-purple-50 overflow-hidden relative">
          <Image
                  src="/artistry.png" 
                  alt="Artistry Spa 美容中心网站项目案例 - 服务展示和在线预约系统"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  quality={85}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  {language === 'zh' ? 'Artistry Spa 美容中心' : 'Artistry Spa Wellness Center'}
                </h4>
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
                  className="group/btn inline-flex items-center gap-2 bg-yellow-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span>{language === 'zh' ? '查看网站' : 'View Website'}</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Project 6: Auto Safe Glass */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 group md:col-span-2 lg:col-span-1">
              {/* 图片区域 */}
              <div className="h-64 bg-gradient-to-br from-blue-50 to-cyan-50 overflow-hidden relative">
                <Image 
                  src="/autoglass.png" 
                  alt="Auto Safe Glass 汽车玻璃服务网站项目案例 - 上门服务和保险协助"
                  width={400}
                  height={256}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  quality={85}
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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
                <h4 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                  {language === 'zh' ? 'Auto Safe Glass 汽车玻璃' : 'Auto Safe Glass Auto Glass Service'}
                </h4>
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
                  className="group/btn inline-flex items-center gap-2 bg-yellow-600 text-white px-4 py-2.5 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <span>{language === 'zh' ? '查看网站' : 'View Website'}</span>
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
    </>
  );
}
