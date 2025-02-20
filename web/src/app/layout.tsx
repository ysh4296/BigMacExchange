import { Providers } from './providers';
import { Metadata } from 'next';
import '@radix-ui/themes/styles.css';
import { getI18n } from '@/locales/server';
import Addons from './Addons';

export async function generateMetadata(): Promise<Metadata> {
    const t = await getI18n();
    return {
        title: t('MetaTitle'),
        description: t('MetaDescription'),
        openGraph: {
            url: 'https://bigmacexchange.com',
            title: t('MainTitle'),
            description: t('MainDescription'),
            images: [
                {
                    url: 'https://bigmacexchange.com/favicon.ico',
                    width: 800,
                    height: 600,
                    alt: 'Og Image Alt',
                },
            ],
        },
        alternates: {
            canonical: 'https://bigmacexchange.com',
            languages: {
                en: 'https://bigmacexchange.com/en',
                ko: 'https://bigmacexchange.com/ko',
                ja: 'https://bigmacexchange.com/ja',
                zh: 'https://bigmacexchange.com/zh',
                de: 'https://bigmacexchange.com/de',
                fr: 'https://bigmacexchange.com/fr',
                es: 'https://bigmacexchange.com/es',
            },
        },
    };
}

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body style={{ margin: '0' }}>
                <Providers>{children}</Providers>
            </body>
            <Addons />
        </html>
    );
}

export default Layout;
