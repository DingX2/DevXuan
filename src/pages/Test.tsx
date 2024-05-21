import { Stack, Box, Button, Image, Logo, Text } from '@/components/atoms';
import { Background, Card, Speech } from '@/components/molecules';
import { History } from '@/components/organisms';

export const Test = () => {
    return (
        <Stack direction="column">
            <Stack direction="column">
                <Box />
                <Button>기본 버튼</Button>
                <Button width="54px">버튼입니다</Button>
                <Button icon="/image/Typescript_logo.svg" />
                <Button icon="/image/Typescript_logo.svg" width="54px" height="54px" />
                <Image src="/image/Typescript_logo.svg" width={30} height={30} />
                <Logo />
                <Text>Text</Text>
            </Stack>

            <Stack direction="column">
                <Background height="50">
                    <Speech>테스트용입니다</Speech>
                    <Card shadow />
                    <Card borderColor="#000" />
                </Background>
                <History />
            </Stack>
        </Stack>
    );
};
