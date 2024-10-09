import 'server-only';
import { Dictionary } from '../../../types';

const dictionaries: {
  [key: string]: () => Promise<Dictionary>
} = {
  en: () => import('./dictionaries/en.json').then((module) => module.default as Dictionary),
  zh: () => import('./dictionaries/zh.json').then((module) => module.default as Dictionary),
}

export const getDictionary = async (lang: string) => 
  dictionaries[lang]?.() ?? dictionaries.en();