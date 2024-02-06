import { Button, Flex, Text } from '@radix-ui/themes';

export default function MyApp() {
    return (
        <Flex direction="column" gap="2">
            <Text>Hello from Radix Themes :)</Text>
            <Button>Lets go</Button>
        </Flex>
    );
}