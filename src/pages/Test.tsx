import { createSignal } from 'solid-js';
import { Stack, Box, Button, Image, Logo, Text } from '@/components/atoms';
import { Background, Card, Speech, Content, Canvas, autoplay } from '@/components/molecules';
import { backgrounds } from '@/constants';

export const Test = () => {
    let canvasRef!: HTMLCanvasElement;
    const [clicked, setClicked] = createSignal<boolean>(false);

    const animateCanvas = () => {
        const newState = !clicked();
        autoplay(newState);
        setClicked(newState);
    };

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
            <Canvas width="100vw" height="100vh" ref={canvasRef} />
            <Stack direction="column">
                <Content />

                <button onClick={animateCanvas}>Animate Canvas</button>
                <Background height="20" select sx={backgrounds.gradient} />
                <Background height="10" select sx={backgrounds.grid} />
                <Background height="10" image="/image/Speech.svg">
                    <Speech>테스트용입니다</Speech>
                    <Card shadow />
                    <Card borderColor="#000" />
                </Background>
            </Stack>
        </Stack>
    );
};
