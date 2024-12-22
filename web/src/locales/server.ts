import { createI18nServer } from 'next-international/server';

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } =
    createI18nServer({
        ko: () => import('./ko'),
        en: () => import('./en'),
        ja: () => import('./ja'),
        zh: () => import('./zh'),
        fr: () => import('./fr'),
        de: () => import('./de'),
        es: () => import('./es'),
    });
