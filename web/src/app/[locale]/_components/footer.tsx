'server-only';

import { getI18n } from '@/locales/server';
import { Flex, Text } from '@radix-ui/themes';
import IndexDescription from '@/component/description/indexDescription';
import BigMacIndexMarquee from '@/component/marquee/bigMacIndexMarquee';

export default async function Footer() {
    const t = await getI18n();
    return (
        <Flex m="4" direction="column" height="100%">
            <IndexDescription />
            <Text>{t('hello')}</Text>
            <BigMacIndexMarquee />
        </Flex>
    );
}
