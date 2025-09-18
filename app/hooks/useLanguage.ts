'use client';

import { useState, useEffect } from 'react';
import { Language } from '../lib/translations';

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('zh');

  useEffect(() => {
    // 从localStorage获取保存的语言设置
    const savedLanguage = localStorage.getItem('language') as Language || 'zh';
    setLanguage(savedLanguage);
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return { language, changeLanguage };
}
