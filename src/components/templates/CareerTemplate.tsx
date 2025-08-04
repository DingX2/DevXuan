import { type Component, For, onMount } from 'solid-js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Stack, Text } from '@/components/atoms';
import { Card, ScrollFloat } from '@/components/molecules';
import { careerData, careerStats } from '@/constants/career';
import { backgrounds } from '@/styles';

// GSAP 플러그인 등록 및 성능 최적화
gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger 성능 최적화 설정
ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    ignoreMobileResize: true,
});

// 성능 최적화를 위한 디바운스 설정
ScrollTrigger.defaults({
    scroller: window,
});

interface CareerCardProps {
    item: (typeof careerData)[0];
    index: number;
}

const CareerCard: Component<CareerCardProps> = (props) => {
    let cardRef!: HTMLDivElement;

    onMount(() => {
        // GPU 가속을 위한 초기 설정
        gsap.set(cardRef, {
            force3D: true,
            transformPerspective: 1000,
        });

        // 최적화된 카드 등장 애니메이션
        gsap.fromTo(
            cardRef,
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                delay: props.index * 0.1,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: cardRef,
                    start: 'top 85%',
                    toggleActions: 'play none none reverse',
                    fastScrollEnd: true,
                },
            },
        );
    });

    return (
        <div
            ref={cardRef}
            style={{
                'margin-bottom': '2rem',
                cursor: 'pointer',
                'will-change': 'transform, opacity',
                transition: 'transform 0.2s ease-out',
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            <Card
                shadow
                fitContent
                sx={`
                    background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
                    border: 1px solid rgba(255, 255, 255, 0.2);
                    backdrop-filter: blur(20px);
                    position: relative;
                    overflow: hidden;
                    will-change: transform;
                    transform: translateZ(0);
                    &::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        right: 0;
                        height: 4px;
                        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
                        will-change: transform;
                    }
                `}
            >
                <Stack direction="column" sx="padding: 2rem;">
                    {/* 헤더 섹션 */}
                    <Stack direction="row" alignItemStart sx="margin-bottom: 1.5rem;">
                        <Text fontSize="2.5rem" sx="margin-right: 1rem; line-height: 1;">
                            {props.item.icon}
                        </Text>
                        <Stack direction="column" useFlexGap spacing={8}>
                            <Stack direction="row" alignItemCenter useFlexGap spacing={12}>
                                <Text
                                    fontStyle="MeongiW"
                                    fontSize="1.5rem"
                                    bold
                                    sx="color: #2d37g; text-shadow: 0 1px 3px rgba(255,255,255,0.8);"
                                >
                                    {props.item.title}
                                </Text>
                                <Text
                                    fontSize="0.9rem"
                                    sx={`
                                        background: linear-gradient(45deg, #667eea, #764ba2);
                                        color: white;
                                        padding: 0.3rem 0.8rem;
                                        border-radius: 20px;
                                        font-weight: 600;
                                    `}
                                >
                                    {props.item.status}
                                </Text>
                            </Stack>
                            <Text fontSize="1.1rem" sx="color: #4a5568; text-shadow: 0 1px 2px rgba(255,255,255,0.6);">
                                {props.item.subtitle}
                            </Text>
                            <Text fontSize="0.9rem" sx="color: #718096; text-shadow: 0 1px 2px rgba(255,255,255,0.5);">
                                {props.item.period}
                            </Text>
                        </Stack>
                    </Stack>

                    {/* 설명 섹션 */}
                    <Text
                        fontSize="1rem"
                        sx="color: #2d3748; line-height: 1.6; margin-bottom: 1.5rem; text-shadow: 0 1px 2px rgba(255,255,255,0.6);"
                    >
                        {props.item.description}
                    </Text>

                    {/* 이미지 섹션 */}
                    {props.item.image && (
                        <div style={{ 'margin-bottom': '1.5rem' }}>
                            <img
                                src={props.item.image}
                                alt={props.item.title}
                                style={{
                                    width: '100%',
                                    'max-width': '600px',
                                    height: 'auto',
                                    'border-radius': '12px',
                                    'box-shadow': '0 4px 20px rgba(0, 0, 0, 0.1)',
                                    border: '1px solid rgba(255, 255, 255, 0.2)',
                                }}
                            />
                        </div>
                    )}

                    {/* 태그 섹션 */}
                    <Stack direction="row" sx="margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.5rem;">
                        <For each={props.item.tags}>
                            {(tag) => (
                                <Text
                                    fontSize="0.8rem"
                                    sx={`
                                        background: rgba(102, 126, 234, 0.15);
                                        color: #4c51bf;
                                        padding: 0.3rem 0.6rem;
                                        border-radius: 12px;
                                        border: 1px solid rgba(102, 126, 234, 0.3);
                                    `}
                                >
                                    #{tag}
                                </Text>
                            )}
                        </For>
                    </Stack>

                    {/* 하이라이트 섹션 */}
                    <Stack direction="column" useFlexGap spacing={8} sx="margin-bottom: 1.5rem;">
                        <Text
                            fontSize="1.1rem"
                            bold
                            sx="color: #2d3748; margin-bottom: 0.5rem; text-shadow: 0 1px 2px rgba(255,255,255,0.6);"
                        >
                            주요 성과
                        </Text>
                        <For each={props.item.highlights}>
                            {(highlight) => (
                                <Stack direction="row" alignItemStart>
                                    <Text
                                        fontSize="0.8rem"
                                        sx="color: #4c51bf; margin-right: 0.5rem; margin-top: 0.1rem;"
                                    >
                                        •
                                    </Text>
                                    <Text
                                        fontSize="0.9rem"
                                        sx="color: #4a5568; line-height: 1.5; text-shadow: 0 1px 1px rgba(255,255,255,0.5);"
                                    >
                                        {highlight}
                                    </Text>
                                </Stack>
                            )}
                        </For>
                    </Stack>

                    {/* 링크 섹션 */}
                    {props.item.links && (
                        <Stack direction="row" useFlexGap spacing={12}>
                            <For each={props.item.links}>
                                {(link) => (
                                    <a
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            color: '#667eea',
                                            'text-decoration': 'none',
                                            'font-size': '0.9rem',
                                            'font-weight': '600',
                                            padding: '0.5rem 1rem',
                                            border: '1px solid #667eea',
                                            'border-radius': '6px',
                                            transition: 'all 0.3s ease',
                                            display: 'inline-block',
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = '#667eea';
                                            e.currentTarget.style.color = 'white';
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'transparent';
                                            e.currentTarget.style.color = '#667eea';
                                            e.currentTarget.style.transform = 'translateY(0)';
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                )}
                            </For>
                        </Stack>
                    )}
                </Stack>
            </Card>
        </div>
    );
};

export const CareerTemplate: Component = () => {
    let headerRef!: HTMLDivElement;
    let statsRef!: HTMLDivElement;

    onMount(() => {
        // GPU 가속을 위한 초기 설정
        gsap.set([headerRef, statsRef], {
            force3D: true,
        });

        // 최적화된 헤더 애니메이션
        gsap.fromTo(
            headerRef,
            {
                y: -30,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: 'power2.out',
            },
        );

        // 최적화된 통계 섹션 애니메이션
        gsap.fromTo(
            statsRef,
            {
                y: 20,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.5,
                delay: 0.2,
                ease: 'power2.out',
            },
        );
    });

    return (
        <Stack
            direction="column"
            sx={`
                ${backgrounds.gradient}
                min-height: 100vh;
                padding: 4rem 2rem;
                position: relative;
                overflow: hidden;
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
                    background: 'radial-gradient(ellipse at top, rgba(102, 126, 234, 0.1) 0%, transparent 50%)',
                    'pointer-events': 'none',
                }}
            />

            {/* 헤더 섹션 */}
            <Stack
                ref={headerRef}
                style={{ 'text-align': 'center', 'margin-bottom': '4rem', 'will-change': 'transform, opacity' }}
            >
                <ScrollFloat
                    fontStyle="Deco"
                    fontSize="3.5rem"
                    component="h1"
                    sx="color: #2d3748; margin-bottom: 1rem; text-shadow: 0 2px 4px rgba(255,255,255,0.8), 0 4px 8px rgba(0,0,0,0.1);"
                >
                    Career Portfolio
                </ScrollFloat>
                <ScrollFloat
                    fontSize="1rem"
                    component="p"
                    sx="color: #4a5568; max-width: 600px; margin: 0 auto; line-height: 1.6; text-shadow: 0 1px 3px rgba(255,255,255,0.6); font-weight: 400;"
                >
                    핵심 업무에 몰입할 수 있도록, 일하기 편한 구조를 설계합니다.
                </ScrollFloat>
            </Stack>

            {/* 통계 섹션 */}
            <div ref={statsRef} style={{ 'margin-bottom': '4rem', 'will-change': 'transform, opacity' }}>
                <Stack direction="row" center useFlexGap spacing={40} sx="flex-wrap: wrap; justify-content: center;">
                    <Stack direction="column" center>
                        <Text fontSize="2.5rem" bold sx="color: #667eea;">
                            {careerStats.totalProjects}
                        </Text>
                        <Text fontSize="1rem" sx="color: #4a5568; text-shadow: 0 1px 2px rgba(255,255,255,0.5);">
                            Active Projects
                        </Text>
                    </Stack>
                    <Stack direction="column" center>
                        <Text fontSize="2.5rem" bold sx="color: #667eea;">
                            {careerStats.totalExperience}
                        </Text>
                        <Text fontSize="1rem" sx="color: #4a5568; text-shadow: 0 1px 2px rgba(255,255,255,0.5);">
                            Experience
                        </Text>
                    </Stack>
                </Stack>
            </div>

            {/* 카드 섹션 */}
            <Stack direction="column" sx="max-width: 1200px; margin: 0 auto; width: 100%;">
                <For each={careerData}>{(item, index) => <CareerCard item={item} index={index()} />}</For>
            </Stack>

            {/* 하단 CTA */}
            <Stack direction="column" center sx="margin-top: 4rem;">
                <Text
                    fontSize="1.1rem"
                    sx="color: #4a5568; margin-bottom: 1rem; text-shadow: 0 1px 2px rgba(255,255,255,0.6);"
                >
                    더 자세한 이야기가 궁금하시다면 편하게 연락주세요.
                </Text>
                <a
                    href="mailto:pourding@naver.com"
                    style={{
                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                        color: 'white',
                        padding: '1rem 2rem',
                        'border-radius': '30px',
                        'text-decoration': 'none',
                        'font-weight': '600',
                        'font-size': '1rem',
                        transition: 'all 0.3s ease',
                        display: 'inline-block',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 10px 20px rgba(102, 126, 234, 0.3)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                    }}
                >
                    연락하기
                </a>
            </Stack>
        </Stack>
    );
};
