import { Card, Grid, Text } from '@radix-ui/themes';

const ConvertBox = () => {
    return (
        <Card>
            <Text>ConvertBox</Text>
            <Grid columns={{ initial: '1', sm: '2' }} gap="3" width="auto">
                <Text>Input</Text>
                <Text>Output</Text>
            </Grid>
            <Text>description</Text>
        </Card>
    );
};

export default ConvertBox;
