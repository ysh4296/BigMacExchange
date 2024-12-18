import { Text, Box, Heading } from '@radix-ui/themes';
import { getI18n } from '@/locales/server';

const Header = async () => {
    const t = await getI18n();

    return (
        <Box as="div">
            <Heading>{t('MainTitle')}</Heading>
            <Text>{t('MainDescription')}</Text>
        </Box>
    );
};

export default Header;
