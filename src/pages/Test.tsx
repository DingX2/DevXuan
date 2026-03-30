import { createSignal, onMount } from 'solid-js';
import { gsap } from 'gsap';
import { Stack, Box, Button, Image, Logo, Text } from '@/components/atoms';
import { Background, Card, Speech, Content, Canvas, autoplay } from '@/components/molecules';
import { backgrounds } from '@/styles';

export const Test = () => {
    let canvasRef!: HTMLCanvasElement;
    let gsapBoxRef!: HTMLDivElement;
    let gsapTextRef!: HTMLDivElement;
    const [clicked, setClicked] = createSignal<boolean>(false);

    const animateCanvas = () => {
        const newState = !clicked();
        autoplay(newState);
        setClicked(newState);
    };

    const animateGSAP = () => {
        // GSAP 애니메이션 예제
        gsap.to(gsapBoxRef, {
            duration: 2,
            x: 200,
            rotation: 360,
            scale: 1.5,
            backgroundColor: '#ff6b6b',
            ease: 'back.out(1.7)',
        });

        gsap.to(gsapTextRef, {
            duration: 1.5,
            y: -50,
            opacity: 0.7,
            color: '#4ecdc4',
            delay: 0.5,
            ease: 'power2.out',
        });
    };

    const resetGSAP = () => {
        gsap.set([gsapBoxRef, gsapTextRef], { clearProps: 'all' });
    };

    onMount(() => {
        // 초기 GSAP 설정
        gsap.set(gsapBoxRef, {
            width: '100px',
            height: '100px',
            backgroundColor: '#3498db',
            borderRadius: '10px',
            margin: '20px auto',
        });

        gsap.set(gsapTextRef, {
            fontSize: '24px',
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#2c3e50',
            marginTop: '20px',
        });
    });

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

            {/* GSAP 애니메이션 테스트 섹션 */}
            <Stack
                direction="column"
                style={{ padding: '40px', background: '#f8f9fa', 'border-radius': '10px', margin: '20px' }}
            >
                <h2 style={{ 'text-align': 'center', color: '#2c3e50', 'margin-bottom': '30px' }}>
                    GSAP Animation Test
                </h2>
                <div ref={gsapBoxRef} />
                <div ref={gsapTextRef}>GSAP Animation Box</div>
                <Stack direction="row" style={{ 'justify-content': 'center', gap: '20px', 'margin-top': '30px' }}>
                    <button
                        onClick={animateGSAP}
                        style={{
                            padding: '12px 24px',
                            background: '#3498db',
                            color: 'white',
                            border: 'none',
                            'border-radius': '6px',
                            cursor: 'pointer',
                            'font-size': '16px',
                        }}
                    >
                        Animate with GSAP
                    </button>
                    <button
                        onClick={resetGSAP}
                        style={{
                            padding: '12px 24px',
                            background: '#e74c3c',
                            color: 'white',
                            border: 'none',
                            'border-radius': '6px',
                            cursor: 'pointer',
                            'font-size': '16px',
                        }}
                    >
                        Reset Animation
                    </button>
                </Stack>
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
