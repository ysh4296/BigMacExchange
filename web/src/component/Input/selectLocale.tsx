'use client';

import { LANGUAGE_RECORD } from '@/constant/language';
import { LOCALE_LIST } from '@/constant/locale';
import { useChangeLocale, useCurrentLocale, useI18n } from '@/locales/client';
import { Flex, Select } from '@radix-ui/themes';

const SelectLocale = () => {
    const t = useI18n();
    const changeLocale = useChangeLocale();
    const currentLocale = useCurrentLocale();

    return (
        <Flex width={'100%'} justify={'end'}>
            <Select.Root
                value={currentLocale}
                onValueChange={(value: LanguageCode) => {
                    changeLocale(value);
                }}
                size="3"
            >
                <Select.Trigger
                    aria-label={'selectLocale'}
                    placeholder={t('SelectLocale')}
                    style={{ minHeight: '40px' }}
                />
                <Select.Content style={{ minHeight: '40px' }}>
                    <Select.Group>
                        <Select.Label>Language</Select.Label>
                        {LOCALE_LIST.map((item: LanguageCode) => {
                            return (
                                <Select.Item
                                    aria-label={item}
                                    key={item}
                                    value={item}
                                    disabled={item === currentLocale}
                                >
                                    {LANGUAGE_RECORD[item]}
                                </Select.Item>
                            );
                        })}
                    </Select.Group>
                </Select.Content>
            </Select.Root>
        </Flex>
    );
};

export default SelectLocale;
