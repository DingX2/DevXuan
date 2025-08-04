import { onMount, onCleanup, type Component, splitProps, type JSX } from 'solid-js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps extends JSX.HTMLAttributes<HTMLHeadingElement> {
    children: string;
    // 스타일 관련 props
    sx?: string;
    fontSize?: string;
    fontStyle?: string;
    fontWeight?: string | number;
    color?: string;
    textAlign?: 'left' | 'center' | 'right';
    component?: keyof JSX.IntrinsicElements;

    // 애니메이션 관련 props
    scrollContainerRef?: HTMLHeadingElement;
    containerClassName?: string;
    textClassName?: string;
    animationDuration?: number;
    ease?: string;
    scrollStart?: string;
    scrollEnd?: string;
    stagger?: number;
    yOffset?: number;
    delay?: number;
}

export const ScrollFloat: Component<ScrollFloatProps> = (allProps) => {
    const [local, others] = splitProps(allProps, [
        'children',
        'sx',
        'fontSize',
        'fontStyle',
        'fontWeight',
        'color',
        'textAlign',
        'component',
        'scrollContainerRef',
        'containerClassName',
        'textClassName',
        'animationDuration',
        'ease',
        'scrollStart',
        'scrollEnd',

        'yOffset',
        'delay',
    ]);

    let containerRef!: HTMLHeadingElement;
    let scrollTriggerInstances: ScrollTrigger[] = [];

    // Extract reactive values at component level
    const {
        scrollContainerRef,
        containerClassName = '',
        textClassName = '',
        animationDuration = 1,
        ease = 'power2.out',
        scrollStart = 'top 80%',
        yOffset = 50,
        delay = 0,
        fontSize,
        fontWeight,
        color,
        textAlign,
        fontStyle,
        sx,
    } = local;

    // 스타일 생성 함수
    const getContainerStyles = () => {
        let styles = '';

        if (fontSize) styles += `font-size: ${fontSize}; `;
        if (fontWeight) styles += `font-weight: ${fontWeight}; `;
        if (color) styles += `color: ${color}; `;
        if (textAlign) styles += `text-align: ${textAlign}; `;
        if (fontStyle) {
            const fontFamilyMap: Record<string, string> = {
                Deco: 'Cafe24Decoshadow',
                MeongiB: 'Cafe24Meongi-B',
                MeongiW: 'Cafe24Meongi-W',
                Ssurround: 'Cafe24SsurroundAir',
                Pretendard: 'Pretendard-Regular',
            };
            const fontFamily = fontFamilyMap[fontStyle] || fontStyle;
            styles += `font-family: ${fontFamily}; `;
        }
        if (sx) styles += sx;

        return styles;
    };

    // 텍스트를 통째로 사용 (개별 문자로 나누지 않음)

    onMount(() => {
        if (!containerRef) return;

        const scroller = scrollContainerRef || window;

        // GPU 가속을 위한 초기 설정
        gsap.set(containerRef, {
            force3D: true,
        });

        const animation = gsap.fromTo(
            containerRef,
            {
                y: yOffset,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                duration: animationDuration,
                delay,
                ease,
                scrollTrigger: {
                    trigger: containerRef,
                    scroller,
                    start: scrollStart,
                    toggleActions: 'play none none reverse',
                    fastScrollEnd: true,
                },
            },
        );

        // ScrollTrigger 인스턴스 저장
        scrollTriggerInstances = ScrollTrigger.getAll();

        onCleanup(() => {
            animation.kill();
            scrollTriggerInstances.forEach((instance) => instance.kill());
            ScrollTrigger.refresh();
        });
    });

    return (
        <h2 ref={containerRef} class={`scroll-float ${containerClassName}`} style={getContainerStyles()} {...others}>
            <span class={`scroll-float-text ${textClassName}`}>{local.children}</span>
        </h2>
    );
};

export default ScrollFloat;
