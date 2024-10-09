import 'server-only';
<<<<<<< HEAD
import { Dictionary } from '../../../types';

const dictionaries: {
  [key: string]: () => Promise<Dictionary>
} = {
  en: () => import('./dictionaries/en.json').then((module) => module.default as Dictionary),
  zh: () => import('./dictionaries/zh.json').then((module) => module.default as Dictionary),
}

export const getDictionary = async (lang: string) => 
  dictionaries[lang]?.() ?? dictionaries.en();
=======
import { Locale } from '../../../i18n-config';

const dictionaries: {
  [key: string]: () => Promise<{} | Record<string, string>>
} = {
  en: () => import('./dictionaries/en.json').then((module) => module.default),
  zh: () => import('./dictionaries/zh.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => 
  dictionaries[locale]?.() ?? dictionaries.en();
>>>>>>> 68b24419416f0a5e1e0bb4990d5fb489e8cfe005
