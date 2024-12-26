import type { NextRequest } from 'next/server';
import { createI18nMiddleware } from 'next-international/middleware';

const I18nMiddleware = createI18nMiddleware(
    ['en', 'ko', 'ja', 'zh', 'de', 'es', 'fr'] as const,
    'en'
);

export function middleware(request: NextRequest) {
    return I18nMiddleware(request);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|data|ads|robots.txt|sitemap.xml|favicon.ico).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
};
