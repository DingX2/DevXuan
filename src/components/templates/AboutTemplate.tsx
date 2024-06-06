import { type Component, createSignal } from 'solid-js';
import { Stack, Text, Box, Button } from '@/components/atoms';
import { Canvas, Speech, autoplay } from '@/components/molecules';
import { ProfileCard } from '@/components/organisms';
import { mobileHome } from '@/constants';
// import { DotsProvider, DotsContext, useCounter } from '@/contexts';

export const AboutTemplate: Component = () => {
    let canvasRef!: HTMLCanvasElement;
    const [clicked, setClicked] = createSignal<boolean>(true);

    const animateCanvas = () => {
        const newState = !clicked();
        // const [dots, { set, add, get }] = useCounter();
        // console.log(dots());
        autoplay(newState);
        setClicked(newState);
    };

    return (
        <>
            {/* <DotsProvider> */}
            <Canvas width="100vw" height="100vh" ref={canvasRef} />
            <Button variant="primary" onClick={animateCanvas} sx={`position: relative; z-index: 2;`}>
                <span>🎉</span>
                <span>피드백 받아보기</span>
            </Button>

            <ProfileCard>
                <Stack direction="row" useFlexGap spacing={20} sx={mobileHome.mobileStack}>
                    <Stack direction="column" useFlexGap spacing={10}>
                        <Box direction="column">
                            <Speech>피드백</Speech>
                            <Text component="p" textAlign="end" position="right">
                                피드백으로 개선하는 구현은 {'\n'} 여러 번 덧칠하며 완성하는 유화와 비슷합니다.
                            </Text>
                        </Box>
                    </Stack>
                    <Stack direction="column" center>
                        <Box direction="column">
                            <Speech>인사이트</Speech>
                            <Text component="p" textAlign="end" position="right">
                                사용자 경험과 개발자 경험을 모두 개선하여 {'\n'} 중요한 인사이트에 집중하고자 합니다.
                            </Text>
                        </Box>
                    </Stack>
                </Stack>
            </ProfileCard>
            {/* </DotsProvider> */}
        </>
    );
};
