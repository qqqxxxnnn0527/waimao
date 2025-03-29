import { getCollection } from 'astro:content';

// 支持的语言
export const languages = {
  en: 'English',
  zh: '中文'
};

export const defaultLang = 'en';

// 获取当前页面的语言
export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

// 创建翻译函数
export async function useTranslations(lang: keyof typeof languages) {
  const translations = await import(`../../public/locales/${lang}.json`);
  return function t(key: string) {
    return key.split('.').reduce((obj, k) => obj && obj[k], translations as any) || key;
  };
}

// 创建语言切换链接
export function getLanguageLink(currentPath: string, lang: string) {
  const [, currentLang, ...rest] = currentPath.split('/');
  if (currentLang in languages) {
    return `/${lang}/${rest.join('/')}`;
  }
  return `/${lang}${currentPath}`;
}