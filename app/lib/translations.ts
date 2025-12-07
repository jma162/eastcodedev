export const translations = {
  zh: {
    nav: {
      home: '首页',
      about: '关于我们',
      services: '服务',
      contact: '联系我们'
    },
    home: {
      title: '专业网站设计服务',
      subtitle: '费城纽约网站设计公司',
      description: '专业网站设计，企业网站设计，最快14天上线，质量保证。',
      cta: '马上定制'
    },
    about: {
      title: '关于我们',
      subtitle: '专业团队，优质服务',
      description: '我们是一支经验丰富的网页设计团队，致力于为客户提供创新的数字解决方案。',
    },
    services: {
      title: '我们的服务',
      subtitle: '全面的数字解决方案',
      webDesign: {
        title: '网页设计',
        description: '创造美观、用户友好的网站界面'
      },
      webDevelopment: {
        title: '网站开发',
        description: '使用最新技术构建高性能网站'
      },
      mobileApp: {
        title: '移动应用',
        description: '开发跨平台的移动应用程序'
      },
      seo: {
        title: 'SEO优化',
        description: '提升网站在搜索引擎中的排名'
      }
    },
    contact: {
      title: '联系我们',
      subtitle: '让我们开始您的项目',
      name: '姓名',
      email: '邮箱',
      message: '留言',
      submit: '发送消息',
      address: '地址',
      phone: '电话/短信咨询',
      emailLabel: '邮箱'
    },
    footer: {
      rights: '版权所有',
      year: '2025'
    }
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact'
    },
    home: {
      title: 'Professional Web Design Services',
      subtitle: 'Philadelphia New York Web Design Company',
      description: 'Professional web design, corporate website design, launch in 14 days, quality guaranteed.',
      cta: 'Start Customizing'
    },
    about: {
      title: 'About Us',
      subtitle: 'Professional Team, Quality Service',
      description: 'We are an experienced web design team dedicated to providing innovative digital solutions for our clients.',
      team: 'Our Team',
      experience: 'Years Experience',
      projects: 'Completed Projects',
      clients: 'Satisfied Clients'
    },
    services: {
      title: 'Our Services',
      subtitle: 'Comprehensive Digital Solutions',
      webDesign: {
        title: 'Web Design',
        description: 'Creating beautiful and user-friendly website interfaces'
      },
      webDevelopment: {
        title: 'Web Development',
        description: 'Building high-performance websites with latest technologies'
      },
      mobileApp: {
        title: 'Mobile Apps',
        description: 'Developing cross-platform mobile applications'
      },
      seo: {
        title: 'SEO Optimization',
        description: 'Improving website rankings in search engines'
      }
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'Let\'s Start Your Project',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      submit: 'Send Message',
      address: 'Address',
      phone: 'Phone/SMS Consultation',
      emailLabel: 'Email'
    },
    footer: {
      rights: 'All rights reserved',
      year: '2025'
    }
  }
};

export type Language = 'zh' | 'en';
export type TranslationKey = keyof typeof translations.zh;
