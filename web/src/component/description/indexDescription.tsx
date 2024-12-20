'server-only';

import { getI18n } from '@/locales/server';
import { Card, Flex, Heading, Text } from '@radix-ui/themes';

const IndexDescription = async () => {
    const t = await getI18n();
    return (
        <Card
            style={{
                boxShadow: 'var(--shadow-4)',
                backgroundColor: 'var(--gray-8)',
            }}
        >
            <Flex direction="column" gap="4" p="4">
                <Heading>{t('BigMacIndexTitle')}</Heading>
                <Text as="span" color="gray">
                    {t('BigMacIndexDescription')}
                </Text>
            </Flex>
        </Card>
    );
};

export default IndexDescription;
