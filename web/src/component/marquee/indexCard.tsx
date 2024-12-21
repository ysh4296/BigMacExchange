'use client';

import { Card, Flex, Text } from '@radix-ui/themes';

const IndexCard = ({ item }: { item: BigMacData }) => {
    return (
        <Card m="2" style={{ width: '300px', height: '100px' }}>
            <Flex p="2" direction="column" gap="2">
                <Text size="5" weight="bold">
                    {item.Country}
                </Text>
                <Flex direction="row" gap="2">
                    <Text as="span" size="3">
                        {Intl.NumberFormat('en-US').format(item.local_price)}
                    </Text>
                    <Text
                        as="span"
                        size="3"
                        style={{ color: 'var(--gray-10)' }}
                    >
                        {item.currency_code}
                    </Text>
                </Flex>
            </Flex>
        </Card>
    );
};

export default IndexCard;
