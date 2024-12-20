import { Text } from '@radix-ui/themes';

interface CurrencyTextProps {
    currency: string;
    amount: number;
}

const CurrencyText = ({ currency, amount }: CurrencyTextProps) => {
    return <Text>{`${amount} ${currency}`}</Text>;
};

export default CurrencyText;
