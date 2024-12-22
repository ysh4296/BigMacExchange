'server-only';

import { Text, Heading, Flex } from '@radix-ui/themes';
import { getI18n } from '@/locales/server';
import SelectLocale from '@/component/Input/selectLocale';

export default async function Header() {
    const t = await getI18n();

    return (
        <Flex as="div" direction={'column'} align={'center'} p={'6'} gap={'4'}>
            <SelectLocale />
            <Heading as="h1" color="indigo" size={{ initial: '8', sm: '9' }}>
                {t('MainTitle')}
            </Heading>
            <Text color="gray" size={'5'}>
                {t('MainDescription')}
            </Text>
        </Flex>
    );
}
