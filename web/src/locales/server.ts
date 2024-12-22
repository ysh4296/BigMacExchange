import { createI18nServer } from 'next-international/server';

export const { getI18n, getScopedI18n, getCurrentLocale, getStaticParams } =
    createI18nServer({
        ko: () => import('./ko'),
        en: () => import('./en'),
        jp: () => import('./jp'),
        zh: () => import('./zh'),
        fr: () => import('./fr'),
        de: () => import('./de'),
        es: () => import('./es'),
    });
