'use client';

import { Box, Card, Flex, Grid, Text } from '@radix-ui/themes';
import { useI18n } from '@/locales/client';
import SelectCountry from '@/component/Input/selectCountry';
import { useState } from 'react';

export default function ConvertBox() {
    const t = useI18n();

    const [from, setFrom] = useState<string>('value');
    const [to, setTo] = useState<string>('value');

    return (
        <Card>
            <Text>{t('ConvertBox')}</Text>
            <Grid columns={{ initial: '1', sm: '2' }} gap="3" width="auto">
                <Flex direction="column" gap="2">
                    <Flex justify="between" gap="2">
                        <SelectCountry
                            label="from"
                            value={from}
                            onChange={setFrom}
                        />
                        <SelectCountry label="to" value={to} onChange={setTo} />
                    </Flex>
                </Flex>
                <Box>
                    <Text>Output</Text>
                </Box>
            </Grid>
            <Text>description</Text>
        </Card>
    );
}
