'server-only';

import ConvertBox from '@/app/[locale]/_components/convertBox';
import Footer from '@/app/[locale]/_components/footer';
import Header from '@/app/[locale]/_components/header';
import { Box } from '@radix-ui/themes';

export default async function Home() {
    return (
        <Box
        // display={{
        //     initial: 'block',
        //     // if screen size is greater than 520px, hide the heading
        //     xs: 'none',
        // }}
        >
            <Header />
            <ConvertBox />
            <Footer />
        </Box>
    );
}
