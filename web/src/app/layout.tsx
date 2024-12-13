import { Providers } from './providers';
import "@radix-ui/themes/styles.css";

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
