import { Text, Box, Heading } from '@radix-ui/themes';

interface HeaderProps {
    Title: string;
    Description: string;
}

const Header = (props: HeaderProps) => {
    return (
        <Box as="div">
            <Heading>{props.Title}</Heading>
            <Text>{props.Description}</Text>
        </Box>
    );
};

export default Header;
