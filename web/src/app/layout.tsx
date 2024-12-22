import { Providers } from './providers';
import { Metadata } from 'next';
import '@radix-ui/themes/styles.css';
import { getI18n } from '@/locales/server';
import GoogleAdsense from './googleAdsense';

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();
    return {
        title: t('MainTitle'),
        description: t('MainDescription'),
        openGraph: {
            url: 'https://bigmacexchange.com',
            title: t('MainTitle'),
            description: t('MainDescription'),
        },
    };
}

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body style={{ margin: '0' }}>
                <Providers>{children}</Providers>
            </body>
            <GoogleAdsense />
        </html>
    );
}

export default Layout;
