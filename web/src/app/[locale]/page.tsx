import ConvertBox from '@/component/convertBox';
import Footer from '@/component/footer';
import Header from '@/component/header';
import { getDictionary } from '@/utils/getLocales';
import { Box } from '@radix-ui/themes';

export default async function Home({
    params,
}: {
    params: Promise<{ locale: Locale }>;
}) {
    const { locale } = await params;
    const dict = await getDictionary(locale); // en

    return (
        <Box
        // display={{
        //     initial: 'block',
        //     // if screen size is greater than 520px, hide the heading
        //     xs: 'none',
        // }}
        >
            <Header
                Title={dict['MainTitle']}
                Description={dict['MainDescription']}
            />
            {/* <XLSData /> */}
            <ConvertBox />
            <Footer />
        </Box>
    );
}
