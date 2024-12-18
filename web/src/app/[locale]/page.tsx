import ConvertBox from '@/component/convertBox';
import Footer from '@/component/footer';
import Header from '@/component/header';
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
            {/* <XLSData /> */}
            <ConvertBox />
            <Footer />
        </Box>
    );
}
