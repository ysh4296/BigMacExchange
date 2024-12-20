import { createI18nClient } from 'next-international/client';

export const {
    useI18n,
    useScopedI18n,
    I18nProviderClient,
    useChangeLocale,
    defineLocale,
    useCurrentLocale,
} = createI18nClient({
    ko: () => import('./ko'),
    en: () => import('./en'),
    jp: () => import('./jp'),
    'zh-cn': () => import('./zh-cn'),
});
