import { type Component, For, onCleanup, onMount } from 'solid-js';
import { gsap } from 'gsap';
import { Stack, Text } from '@/components/atoms';
import { type careerData } from '@/constants/career';
import { Card } from './Card';

const sectionCardSx = `
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.82), rgba(255, 255, 255, 0.72));
    border: 1px solid rgba(255, 255, 255, 0.35);
    backdrop-filter: blur(20px);
    position: relative;
    overflow: hidden;
    transition: transform 0.24s ease, box-shadow 0.24s ease, border-color 0.24s ease;
    box-shadow: 0 18px 40px hsla(239, 83.50%, 66.70%, 0.08);

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 24px 48px rgba(99, 102, 241, 0.14);
        border-color: rgba(102, 126, 234, 0.32);
    }

    &::before {
        content: '';
        position: absolute;
        inset: 0 auto auto 0;
        width: 100%;
        height: 4px;
        background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
    }
`;

const tagSx = `
    background: rgba(102, 126, 234, 0.12);
    color: #4c51bf;
    padding: 0.375rem 0.65rem;
    border-radius: 999px;
    border: 1px solid rgba(102, 126, 234, 0.22);
`;

const linkSx = `
    color: #667eea;
    text-decoration: none;
    padding: 0.55rem 0.95rem;
    border: 1px solid #667eea;
    border-radius: 10px;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: #667eea;
        color: white;
        transform: translateY(-2px);
    }
`;

const bulletRowSx = 'display: grid; gap: 1rem; align-items: start;';
const bulletListSx = 'margin: 0; padding-left: 1.1rem; display: grid; gap: 0.4rem;';
const bulletItemSx = 'line-height: 1.65;';

interface CareerCardProps {
    item: (typeof careerData)[number];
    index: number;
}

export const CareerCard: Component<CareerCardProps> = (props) => {
    let cardRef!: HTMLDivElement;

    onMount(() => {
        const tween = gsap.fromTo(
            cardRef,
            {
                y: 32,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: 0.55,
                delay: props.index * 0.08,
                ease: 'power2.out',
                scrollTrigger: {
                    trigger: cardRef,
                    start: 'top 88%',
                    toggleActions: 'play none none reverse',
                    fastScrollEnd: true,
                },
            },
        );

        onCleanup(() => {
            tween.scrollTrigger?.kill();
            tween.kill();
        });
    });

    return (
        <Stack ref={cardRef} style={{ 'margin-bottom': '1.75rem', 'will-change': 'transform, opacity' }}>
            <Card shadow fitContent sx={sectionCardSx}>
                <Stack direction="column" sx="padding: 2rem;">
                    <Stack direction="row" alignItemStart sx="margin-bottom: 1.5rem; gap: 1rem;">
                        <Text fontSize="2xl" bold sx="line-height: 1; flex-shrink: 0;">
                            {props.item.icon}
                        </Text>

                        <Stack direction="column" useFlexGap spacing={8} sx="min-width: 0;">
                            <Stack
                                direction="row"
                                alignItemCenter
                                useFlexGap
                                spacing={12}
                                sx="flex-wrap: wrap; row-gap: 0.5rem;"
                            >
                                <Text
                                    fontStyle="MeongiW"
                                    fontSize="2xl"
                                    color="secondary"
                                    bold
                                    sx="text-shadow: 0 1px 3px rgba(255,255,255,0.65);"
                                >
                                    {props.item.title}
                                </Text>
                                <Text
                                    fontSize="md"
                                    color="inverse"
                                    sx={`
                                        background: linear-gradient(45deg, #667eea, #764ba2);
                                        padding: 0.28rem 0.8rem;
                                        border-radius: 999px;
                                        font-weight: 600;
                                    `}
                                >
                                    {props.item.status}
                                </Text>
                            </Stack>

                            <Text fontSize="md" color="secondary" sx="line-height: 1.5;">
                                {props.item.subtitle}
                            </Text>
                            <Text fontSize="md" color="secondary">
                                {props.item.period}
                            </Text>
                        </Stack>
                    </Stack>

                    <Text fontSize="md" color="secondary" sx="line-height: 1.7; margin-bottom: 1.5rem;">
                        {props.item.description}
                    </Text>

                    {props.item.image && (
                        <Stack style={{ 'margin-bottom': '1.5rem' }}>
                            <img
                                src={props.item.image}
                                alt={props.item.title}
                                style={{
                                    width: '100%',
                                    'max-width': '640px',
                                    height: 'auto',
                                    'border-radius': '14px',
                                    border: '1px solid rgba(255, 255, 255, 0.28)',
                                    'box-shadow': '0 10px 24px rgba(15, 23, 42, 0.08)',
                                }}
                            />
                        </Stack>
                    )}

                    <Stack direction="row" sx="margin-bottom: 1.5rem; flex-wrap: wrap; gap: 0.5rem;">
                        <For each={props.item.tags}>
                            {(tag) => (
                                <Text fontSize="0.8rem" sx={tagSx}>
                                    #{tag}
                                </Text>
                            )}
                        </For>
                    </Stack>

                    <Stack direction="column" useFlexGap spacing={10} sx="margin-bottom: 1.5rem;">
                        <Text fontSize="lg" bold color="brand">
                            Highlights
                        </Text>

                        <Stack style={bulletRowSx}>
                            <Text bold color="danger">
                                Problem
                            </Text>
                            <ul style={bulletListSx}>
                                <For each={props.item.highlights.problem}>
                                    {(item) => (
                                        <li>
                                            <Text fontSize="sm" color="secondary" sx={bulletItemSx}>
                                                {item}
                                            </Text>
                                        </li>
                                    )}
                                </For>
                            </ul>

                            <Text bold color="warning">
                                Result
                            </Text>
                            <ul style={bulletListSx}>
                                <For each={props.item.highlights.result}>
                                    {(item) => (
                                        <li>
                                            <Text fontSize="sm" color="secondary" sx={bulletItemSx}>
                                                {item}
                                            </Text>
                                        </li>
                                    )}
                                </For>
                            </ul>

                            <Text bold color="success">
                                Solution
                            </Text>
                            <ul style={bulletListSx}>
                                <For each={props.item.highlights.solution}>
                                    {(item) => (
                                        <li>
                                            <Text fontSize="sm" color="secondary" sx={bulletItemSx}>
                                                {item}
                                            </Text>
                                        </li>
                                    )}
                                </For>
                            </ul>
                        </Stack>
                    </Stack>

                    {props.item.links && props.item.links.length > 0 && (
                        <Stack direction="row" useFlexGap spacing={12} sx="flex-wrap: wrap;">
                            <For each={props.item.links}>
                                {(link) => (
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" style={linkSx}>
                                        {link.label}
                                    </a>
                                )}
                            </For>
                        </Stack>
                    )}
                </Stack>
            </Card>
        </Stack>
    );
};
