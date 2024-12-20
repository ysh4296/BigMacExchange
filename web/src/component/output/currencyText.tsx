import { Text } from '@radix-ui/themes';

interface CurrencyTextProps {
    currency: string;
    amount: number;
}

const CurrencyText = ({ currency, amount }: CurrencyTextProps) => {
    const formattedAmount = new Intl.NumberFormat('en-US').format(amount);

    return <Text>{`${formattedAmount} ${currency}`}</Text>;
};

export default CurrencyText;
