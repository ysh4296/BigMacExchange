import { Flex, Select, Text } from '@radix-ui/themes';

interface SelectCountryProps {
    label: string;
    value: string;
    onChange: (value: string) => void;
}

export default function SelectCountry({
    label,
    value,
    onChange,
}: SelectCountryProps) {
    return (
        <Flex
            display="flex"
            align="start"
            flexGrow={'1'}
            direction="column"
            style={{ width: '50%' }}
        >
            <Text>{label}</Text>
            <Select.Root value={value} onValueChange={onChange} size="3">
                <Select.Trigger
                    placeholder="Select Country"
                    style={{ width: '100%', minHeight: '40px' }}
                />
                <Select.Content style={{ width: '100%', minHeight: '40px' }}>
                    <Select.Group>
                        <Select.Label>Country</Select.Label>
                        <Select.Item value="korea">Korea</Select.Item>
                        <Select.Item value="usa">USA</Select.Item>
                        <Select.Item value="china">China</Select.Item>
                        <Select.Item value="japan">Japan</Select.Item>
                    </Select.Group>
                </Select.Content>
            </Select.Root>
        </Flex>
    );
}
