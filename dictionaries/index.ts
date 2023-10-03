import 'server-only';
import type { Locales } from '@/types/locales';

const dictionaries = {
  en: () => import('./en.json').then((module) => module.default),
  es: () => import('./es.json').then((module) => module.default),
};

export const getDictionary = async (locale: Locales) => dictionaries[locale]();
