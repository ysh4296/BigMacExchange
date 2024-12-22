'use client';

import { I18nProviderClient } from '@/locales/client';
import { use, useEffect } from 'react';

function Layout({
    params,
    children,
}: {
    params: Promise<{ locale: string }>;
    children: React.ReactNode;
}) {
    // React.use()를 사용하여 Promise 언래핑
    const { locale } = use(params);

    useEffect(() => {
        document.documentElement.lang = locale;
    }, [locale]);

    return <I18nProviderClient locale={locale}>{children}</I18nProviderClient>;
}

export default Layout;
