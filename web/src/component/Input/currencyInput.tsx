import { useI18n } from '@/locales/client';
import { Flex, TextField, Text } from '@radix-ui/themes';

interface CurrencyInputProps {
    label: string;
    value?: string;
    onChange: (value: string) => void;
}

const CurrencyInput = ({ label, value, onChange }: CurrencyInputProps) => {
    const t = useI18n();

    return (
        <Flex
            display="flex"
            align="start"
            flexGrow={'1'}
            direction="column"
            style={{ width: '100%' }}
        >
            <Text>{t('Amount')}</Text>
            <TextField.Root
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
                size="3"
                style={{ width: '100%', textAlign: 'right' }}
            >
                <TextField.Slot side="right">
                    <Text>{label}</Text>
                </TextField.Slot>
            </TextField.Root>
        </Flex>
    );
};

export default CurrencyInput;
