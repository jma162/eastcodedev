'use client';

import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const [language, setLanguage] = useState('zh');

  useEffect(() => {
    // 从localStorage获取保存的语言设置
    const savedLanguage = localStorage.getItem('language') || 'zh';
    setLanguage(savedLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'zh' ? 'en' : 'zh';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
    // 触发页面重新渲染
    window.location.reload();
  };

  return (
    <button
      onClick={toggleLanguage}
      className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors duration-200 font-medium"
    >
      {language === 'zh' ? 'English' : '中文'}
    </button>
  );
}
