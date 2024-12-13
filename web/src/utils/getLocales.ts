import 'server-only';

const dictionaries: Record<Locale, () => Promise<Record<string, string>>> = {
    'en-US': () =>
        import('../locales/en-US/dictionary.json').then(
            (module) => module.default
        ),
    'ko-KR': () =>
        import('../locales/ko-KR/dictionary.json').then(
            (module) => module.default
        ),
};

export const getDictionary = async (locale: Locale) => dictionaries[locale]();
