import { type Component, For, onCleanup, onMount } from 'solid-js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Stack, Text } from '@/components/atoms';
import { Card, AnimatedReveal, CareerCard } from '@/components/molecules';
import { careerData, careerStats, careerSummary } from '@/constants/career';
import { backgrounds } from '@/styles';

const statCardSx = `
    min-width: 180px;
    padding: 1.25rem 1.5rem;
    border-radius: 20px;
    background: rgba(255, 255, 255, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(16px);
    box-shadow: 0 12px 30px rgba(99, 102, 241, 0.08);
`;

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.config({
    autoRefreshEvents: 'visibilitychange,DOMContentLoaded,load',
    ignoreMobileResize: true,
});

export const CareerTemplate: Component = () => {
    let sectionRef!: HTMLDivElement;
    let headerRef!: HTMLDivElement;
    let statsRef!: HTMLDivElement;

    onMount(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(headerRef, { y: -24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55, ease: 'power2.out' });

            gsap.fromTo(
                statsRef,
                { y: 18, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.45, delay: 0.12, ease: 'power2.out' },
            );
        }, sectionRef);

        onCleanup(() => ctx.revert());
    });

    const statItems = [
        { label: 'Active Projects', value: careerStats.totalProjects },
        { label: 'Experience', value: careerStats.totalExperience },
    ];

    return (
        <Stack
            ref={sectionRef}
            as="section"
            direction="column"
            sx={`
                ${backgrounds.gradient}
                min-height: 100vh;
                padding: 4rem 2rem;
                position: relative;
                overflow: hidden;
            `}
        >
            <div
                style={{
                    position: 'absolute',
                    inset: '0',
                    background: 'radial-gradient(ellipse at top, rgba(102, 126, 234, 0.1) 0%, transparent 52%)',
                    'pointer-events': 'none',
                }}
            />

            <Stack
                ref={headerRef}
                direction="column"
                sx="text-align: center; margin-bottom: 3.5rem; will-change: transform, opacity;"
            >
                <AnimatedReveal>
                    <Stack direction="column" center>
                        <Text fontStyle="Deco" fontSize="3xl" bold sx="margin-bottom: 1rem;">
                            Career Portfolio
                        </Text>
                        <Text fontSize="md">{careerSummary.join('\n')}</Text>
                    </Stack>
                </AnimatedReveal>
            </Stack>

            <div ref={statsRef} style={{ 'margin-bottom': '3.5rem', 'will-change': 'transform, opacity' }}>
                <Stack direction="row" center useFlexGap spacing={24} sx="flex-wrap: wrap; justify-content: center;">
                    <For each={statItems}>
                        {(item) => (
                            <Card fitContent sx={statCardSx}>
                                <Stack direction="column" center>
                                    <Text fontSize="2xl" bold color="brand" sx="line-height: 1;">
                                        {item.value}
                                    </Text>
                                    <Text fontSize="sm" color="secondary" sx="margin-top: 0.45rem;">
                                        {item.label}
                                    </Text>
                                </Stack>
                            </Card>
                        )}
                    </For>
                </Stack>
            </div>

            <Stack direction="column" sx="max-width: 1120px; margin: 0 auto; width: 100%;">
                <For each={careerData}>{(item, index) => <CareerCard item={item} index={index()} />}</For>
            </Stack>

            <Stack direction="column" center sx="margin-top: 4rem; text-align: center;">
                <Text fontSize="md" color="secondary" sx="margin-bottom: 1rem;">
                    더 자세한 이야기가 궁금하시다면 편하게 연락주세요.
                </Text>
                <a
                    href="mailto:pourding@naver.com"
                    style={{
                        background: 'linear-gradient(45deg, #667eea, #764ba2)',
                        color: 'white',
                        padding: '1rem 2rem',
                        'border-radius': '999px',
                        'text-decoration': 'none',
                        'font-weight': '600',
                        'font-size': '1rem',
                        transition: 'all 0.25s ease',
                        display: 'inline-block',
                        'box-shadow': '0 12px 24px rgba(102, 126, 234, 0.22)',
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 16px 28px rgba(102, 126, 234, 0.28)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = '0 12px 24px rgba(102, 126, 234, 0.22)';
                    }}
                >
                    연락하기
                </a>
            </Stack>
        </Stack>
    );
};
