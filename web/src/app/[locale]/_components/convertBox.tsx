'use client';

import { Card, Flex, Grid, Text } from '@radix-ui/themes';
import { useI18n } from '@/locales/client';
import SelectCountry from '@/component/Input/selectCountry';
import CurrencyInput from '@/component/Input/currencyInput';
import { useState } from 'react';
import useDataStore from '@/store/data';
import CurrencyText from '@/component/output/currencyText';

export default function ConvertBox() {
    const t = useI18n();
    const { data } = useDataStore();

    const [from, setFrom] = useState<string>();
    const [to, setTo] = useState<string>();
    const [amount, setAmount] = useState<string>('');

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

                    <CurrencyInput
                        label={
                            data.find(
                                (item: BigMacData) => item.Country === from
                            )?.currency_code || ''
                        }
                        value={amount}
                        onChange={setAmount}
                    />
                </Flex>

                <Flex direction="column" gap="2">
                    <Text>Output</Text>
                    <CurrencyText
                        currency={
                            data.find(
                                (item: BigMacData) => item.Country === from
                            )?.currency_code || ''
                        }
                        amount={Number(amount)}
                    />

                    <CurrencyText
                        currency={'big mac'}
                        amount={Math.floor(
                            Number(amount) /
                                Number(
                                    data.find(
                                        (item: BigMacData) =>
                                            item.Country === from
                                    )?.local_price
                                ) || 1
                        )}
                    />

                    <CurrencyText
                        currency={
                            data.find((item: BigMacData) => item.Country === to)
                                ?.currency_code || ''
                        }
                        amount={Math.floor(
                            (Number(amount) /
                                Number(
                                    data.find(
                                        (item: BigMacData) =>
                                            item.Country === from
                                    )?.local_price
                                ) || 1) *
                                Number(
                                    data.find(
                                        (item: BigMacData) =>
                                            item.Country === to
                                    )?.local_price
                                )
                        )}
                    />
                </Flex>
            </Grid>
            <Text>description</Text>
        </Card>
    );
}
