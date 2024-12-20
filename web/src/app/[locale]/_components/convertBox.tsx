'use client';

import { Heading, Button, Card, Flex, Grid, Text } from '@radix-ui/themes';
import { useI18n } from '@/locales/client';
import SelectCountry from '@/component/Input/selectCountry';
import CurrencyInput from '@/component/Input/currencyInput';
import { useState } from 'react';
import useDataStore from '@/store/data';
import CurrencyText from '@/component/output/currencyText';
import { ArrowLeftRight } from 'lucide-react';

export default function ConvertBox() {
    const t = useI18n();
    const { data } = useDataStore();

    const [from, setFrom] = useState<string>();
    const [to, setTo] = useState<string>();
    const [amount, setAmount] = useState<string>('');

    return (
        <Card
            m="4"
            style={{
                boxShadow: 'var(--shadow-4)',
            }}
        >
            <Heading my="2">{t('ConvertBox')}</Heading>
            <Grid columns={{ initial: '1', sm: '2' }} gap="3" width="auto">
                <Flex direction="column" gap="2">
                    <Flex justify="between" gap="2">
                        <SelectCountry
                            label={t('from')}
                            value={from}
                            onChange={setFrom}
                        />
                        <Flex height="100%" align="center">
                            <Button
                                variant="ghost"
                                m="4"
                                onClick={() => {
                                    const temp = from;
                                    setFrom(to);
                                    setTo(temp);
                                }}
                            >
                                <ArrowLeftRight />
                            </Button>
                        </Flex>
                        <SelectCountry
                            label={t('to')}
                            value={to}
                            onChange={setTo}
                        />
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

                <Flex direction="column" gap="2" justify="center">
                    <Text>Output</Text>
                    {from && to && amount ? (
                        <>
                            <CurrencyText
                                currency={
                                    data.find(
                                        (item: BigMacData) =>
                                            item.Country === from
                                    )?.currency_code || ''
                                }
                                amount={Number(amount)}
                            />
                            <CurrencyText
                                currency={'big mac'}
                                amount={Number(
                                    (
                                        Number(amount) /
                                            Number(
                                                data.find(
                                                    (item: BigMacData) =>
                                                        item.Country === from
                                                )?.local_price
                                            ) || 1
                                    ).toFixed(1)
                                )}
                            />
                            <CurrencyText
                                currency={
                                    data.find(
                                        (item: BigMacData) =>
                                            item.Country === to
                                    )?.currency_code || ''
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
                        </>
                    ) : (
                        <Text>Please select country and amount</Text>
                    )}
                </Flex>
            </Grid>
        </Card>
    );
}
