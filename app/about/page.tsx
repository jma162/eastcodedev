'use client';

import Link from 'next/link';
import { useLanguage } from '../hooks/useLanguage';
import { translations } from '../lib/translations';

export default function About() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <>
      <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-600 to-orange-600 py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
              {t.about.title}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-yellow-100 max-w-3xl mx-auto px-4">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                {language === 'zh' ? '我们的故事' : 'Our Story'}
              </h2>
              <p className="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6">
                {t.about.description}
              </p>
              <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
                {language === 'zh' 
                  ? (
                    <>
                      自成立以来，我们一直致力于为客户提供最优质的网页设计和开发服务。我们相信，一个好的网站不仅仅是美观的界面，更是用户体验和商业价值的完美结合。查看我们的{' '}
                      <Link href="/services" className="text-yellow-600 hover:text-yellow-700 underline">专业服务</Link>
                      {' '}或{' '}
                      <Link href="/contact" className="text-yellow-600 hover:text-yellow-700 underline">联系我们</Link>
                      {' '}获取更多信息。
                    </>
                  )
                  : (
                    <>
                      Since our founding, we have been committed to providing the highest quality web design and development services to our clients. We believe that a good website is not just a beautiful interface, but a perfect combination of user experience and business value. Check out our{' '}
                      <Link href="/services" className="text-yellow-600 hover:text-yellow-700 underline">professional services</Link>
                      {' '}or{' '}
                      <Link href="/contact" className="text-yellow-600 hover:text-yellow-700 underline">contact us</Link>
                      {' '}for more information.
                    </>
                  )
                }
              </p>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <div className="aspect-w-16 aspect-h-9">
                <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg h-64 flex items-center justify-center">
                  <svg className="w-24 h-24 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {language === 'zh' ? '我们的价值观' : 'Our Values'}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {language === 'zh' 
                ? '我们相信这些核心价值观指导着我们的工作方式和与客户的合作。'
                : 'We believe these core values guide our way of working and collaboration with clients.'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {language === 'zh' ? '质量第一' : 'Quality First'}
              </h3>
              <p className="text-gray-600">
                {language === 'zh' 
                  ? '我们始终追求最高的质量标准，确保每个项目都达到客户的期望。'
                  : 'We always pursue the highest quality standards, ensuring every project meets client expectations.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {language === 'zh' ? '创新思维' : 'Innovation'}
              </h3>
              <p className="text-gray-600">
                {language === 'zh' 
                  ? '我们不断探索新技术和创意解决方案，为客户提供前沿的设计。'
                  : 'We continuously explore new technologies and creative solutions to provide cutting-edge designs for clients.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {language === 'zh' ? '团队合作' : 'Collaboration'}
              </h3>
              <p className="text-gray-600">
                {language === 'zh' 
                  ? '我们重视团队合作，相信集体智慧能够创造更好的解决方案。'
                  : 'We value teamwork and believe that collective wisdom can create better solutions.'
                }
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {language === 'zh' ? '客户至上' : 'Client Focus'}
              </h3>
              <p className="text-gray-600">
                {language === 'zh' 
                  ? '我们以客户为中心，深入了解需求，提供个性化的解决方案。'
                  : 'We are client-centric, deeply understanding needs and providing personalized solutions.'
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
