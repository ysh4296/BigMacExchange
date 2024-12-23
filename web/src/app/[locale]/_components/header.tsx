'server-only';

import { Text, Heading, Flex, Link } from '@radix-ui/themes';
import { getI18n } from '@/locales/server';
import SelectLocale from '@/component/Input/selectLocale';
import { FaGithub } from 'react-icons/fa';

export default async function Header() {
    const t = await getI18n();

    return (
        <Flex as="div" direction={'column'} align={'center'} p={'6'} gap={'4'}>
            <Flex width={'100%'} height={'100%'}>
                <Link
                    href="https://github.com/ysh4296/BigMacExchange"
                    style={{ alignItems: 'center' }}
                >
                    <FaGithub
                        size={30}
                        style={{
                            height: '100%',
                            justifySelf: 'center',
                            alignSelf: 'center',
                        }}
                    />
                </Link>
                <SelectLocale />
            </Flex>
            <Heading as="h1" color="indigo" size={{ initial: '8', sm: '9' }}>
                {t('MainTitle')}
            </Heading>
            <Text color="gray" size={'5'}>
                {t('MainDescription')}
            </Text>
        </Flex>
    );
}
