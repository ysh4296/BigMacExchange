import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://bigmacexchange.com',
            lastModified: new Date(),
            alternates: {
                languages: {
                    es: 'https://bigmacexchange.com/es',
                    de: 'https://bigmacexchange.com/de',
                    ko: 'https://bigmacexchange.com/ko',
                    ja: 'https://bigmacexchange.com/ja',
                    zh: 'https://bigmacexchange.com/zh',
                    fr: 'https://bigmacexchange.com/fr',
                    en: 'https://bigmacexchange.com/en',
                },
            },
        },
    ];
}
