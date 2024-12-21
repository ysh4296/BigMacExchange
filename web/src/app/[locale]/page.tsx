'server-only';

import ConvertBox from '@/app/[locale]/_components/convertBox';
import Footer from '@/app/[locale]/_components/footer';
import Header from '@/app/[locale]/_components/header';
import { Flex } from '@radix-ui/themes';

export default async function Home() {
    return (
        <Flex
            direction="column"
            gap="6"
            style={{
                backgroundColor: 'var(--gray-2)',
            }}
        >
            <Header />
            <ConvertBox />
            <Footer />
        </Flex>
    );
}
