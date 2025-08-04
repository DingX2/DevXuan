import { type Component, onMount } from 'solid-js';
import { gsap } from 'gsap';
import { Stack, Text } from '@/components/atoms';
import FuzzyText from '@/components/molecules/FuzzyText';
import { backgrounds } from '@/styles';

export const NotFound: Component = () => {
    let containerRef!: HTMLDivElement;
    let fuzzy404Ref!: HTMLDivElement;
    let fuzzyMessageRef!: HTMLDivElement;
    let contentRef!: HTMLDivElement;
    let buttonRef!: HTMLAnchorElement;

    onMount(() => {
        // GPU 가속을 위한 초기 설정
        gsap.set([containerRef, contentRef], {
            force3D: true,
        });

        // 컨테이너 페이드인 애니메이션
        gsap.fromTo(
            containerRef,
            {
                opacity: 0,
                scale: 0.95,
            },
            {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                ease: 'power2.out',
            },
        );

        // 순차적 요소 애니메이션
        const tl = gsap.timeline({ delay: 0.3 });

        tl.fromTo(fuzzy404Ref, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.7)' })
            .fromTo(
                fuzzyMessageRef,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
                '-=0.3',
            )
            .fromTo(contentRef, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2')
            .fromTo(
                buttonRef,
                { y: 20, opacity: 0, scale: 0.9 },
                { y: 0, opacity: 1, scale: 1, duration: 0.4, ease: 'back.out(1.7)' },
                '-=0.2',
            );
    });

    return (
        <Stack
            ref={containerRef}
            direction="column"
            center
            sx={`
                ${backgrounds.gradient}
                min-height: 100vh;
                padding: 2rem;
                position: relative;
                overflow: hidden;
                will-change: transform, opacity;
                justify-content: center;
                align-items: center;
            `}
        >
            {/* 배경 효과 */}
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    right: '0',
                    bottom: '0',
                    background: 'radial-gradient(ellipse at center, rgba(102, 126, 234, 0.15) 0%, transparent 60%)',
                    'pointer-events': 'none',
                }}
            />

            {/* 메인 콘텐츠 래퍼 */}
            <div style={{ display: 'flex', 'flex-direction': 'column', 'align-items': 'center', width: '100%' }}>
                {/* 메인 404 숫자 */}
                <div
                    ref={fuzzy404Ref}
                    style={{
                        'margin-bottom': '2rem',
                        'will-change': 'transform, opacity',
                        'text-align': 'center',
                    }}
                >
                    <FuzzyText
                        fontSize="clamp(8rem, 20vw, 16rem)"
                        fontWeight={900}
                        color="#667eea"
                        enableHover={true}
                        baseIntensity={0.2}
                        hoverIntensity={0.6}
                    >
                        404
                    </FuzzyText>
                </div>

                {/* 페이지 찾을 수 없음 메시지 */}
                <div
                    ref={fuzzyMessageRef}
                    style={{
                        'margin-bottom': '3rem',
                        'will-change': 'transform, opacity',
                        'text-align': 'center',
                    }}
                >
                    <FuzzyText
                        fontSize="clamp(1.5rem, 4vw, 2.5rem)"
                        fontWeight={700}
                        color="#4a5568"
                        enableHover={true}
                        baseIntensity={0.1}
                        hoverIntensity={0.4}
                    >
                        PAGE NOT FOUND
                    </FuzzyText>
                </div>
            </div>

            {/* 설명 텍스트 및 버튼 */}
            <Stack
                ref={contentRef}
                direction="column"
                center
                useFlexGap
                spacing={24}
                sx="max-width: 600px; text-align: center; will-change: transform, opacity; margin: 0 auto;"
            >
                <Text
                    fontSize="1.2rem"
                    sx="color: #4a5568; line-height: 1.6; text-shadow: 0 1px 2px rgba(255,255,255,0.6);"
                >
                    요청하신 페이지를 찾을 수 없습니다.
                    <br />
                    페이지가 이동되었거나 삭제되었을 수 있습니다.
                </Text>

                <a
                    ref={buttonRef}
                    href="/"
                    style={{
                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                        color: 'white',
                        padding: '1rem 2.5rem',
                        'border-radius': '50px',
                        'text-decoration': 'none',
                        'font-weight': '600',
                        'font-size': '1.1rem',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                        'box-shadow': '0 4px 15px rgba(102, 126, 234, 0.3)',
                        'will-change': 'transform',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 8px 25px rgba(102, 126, 234, 0.4)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0) scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                    }}
                    onMouseDown={(e) => {
                        e.currentTarget.style.transform = 'translateY(-1px) scale(1.02)';
                    }}
                    onMouseUp={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px) scale(1.05)';
                    }}
                >
                    홈으로 돌아가기
                </a>
            </Stack>

            {/* 하단 추가 정보 */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '2rem',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    'text-align': 'center',
                    width: '100%',
                }}
            >
                <Text fontSize="0.9rem" sx="color: #718096; text-shadow: 0 1px 1px rgba(255,255,255,0.5);">
                    문제가 지속되면 관리자에게 문의해주세요.
                </Text>
            </div>
        </Stack>
    );
};
