import { getDictionary } from '@/utils/getLocales';
import { Box, Heading, Text } from '@radix-ui/themes';

export default async function Home({ params }: { params: { locale: Locale } }) {
    const { locale } = await params;
    const dict = await getDictionary(locale); // en

    return (
        <Box
            display={{
                initial: 'block',
                // if screen size is greater than 520px, hide the heading
                xs: 'none',
            }}
        >
            <Heading color="amber">{dict['welcome']}</Heading>
            <Text>hihi</Text>
        </Box>
    );
}
