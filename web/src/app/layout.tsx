import { Providers } from './providers';

function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html>
            <body>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}

export default Layout;
