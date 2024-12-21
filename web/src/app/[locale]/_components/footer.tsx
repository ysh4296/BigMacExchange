'server-only';

import { Flex } from '@radix-ui/themes';
import IndexDescription from '@/component/description/indexDescription';
import BigMacIndexMarquee from '@/component/marquee/bigMacIndexMarquee';

export default async function Footer() {
    return (
        <Flex m="4" direction="column" height="100%" gap="6">
            <IndexDescription />
            <BigMacIndexMarquee />
        </Flex>
    );
}
