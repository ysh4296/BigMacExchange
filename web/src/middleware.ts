import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Start of Selection
const locales: Locale[] = ['en-US', 'ko-KR']; // 로케일 타입 명시

function getLocale(request: NextRequest): string {
    // request 타입 명시
    // 기본 로케일을 반환하는 로직을 구현합니다.
    const acceptLanguage = request.headers.get('accept-language');
    const preferredLocale = acceptLanguage
        ? (acceptLanguage.split(',')[0] as Locale)
        : ('en-US' as Locale);
    return locales.includes(preferredLocale) ? preferredLocale : 'en-US';
}

export function middleware(request: NextRequest) {
    // 경로에 지원되는 로케일이 있는지 확인합니다.
    const { pathname } = request.nextUrl;
    const pathnameHasLocale = locales.some(
        (locale) =>
            pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    // 경로에 지원되는 로케일이 있으면 리턴
    if (pathnameHasLocale) return;

    // Redirect if there is no locale
    const locale = getLocale(request);
    request.nextUrl.pathname = `/${locale}${pathname}`;
    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
       '/((?!_next|data).*)',
        // Optional: only run on root (/) URL
        // '/'
    ],
};
