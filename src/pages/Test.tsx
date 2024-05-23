import { Stack, Box, Button, Image, Logo, Text } from '@/components/atoms';
import { Background, Card, Speech, Content, Canvas } from '@/components/molecules';
import { History } from '@/components/organisms';
import { backgrounds } from '@/constants';

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
                <Content />
                <Canvas width="300" height="200" />
                <Background height="20" select sx={backgrounds.gradient} />
                <Background height="10" select sx={backgrounds.grid} />
                <Background height="10" image="/image/Speech.svg">
                    <Speech>테스트용입니다</Speech>
                    <Card shadow />
                    <Card borderColor="#000" />
                </Background>
                <History />
            </Stack>
        </Stack>
    );
};
