import { onMount, onCleanup, type Component, splitProps, type JSX } from 'solid-js';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// GSAP에서 스크롤 기반 애니메이션을 쓰기 위해 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

/**
 * 스크롤 위치에 따라 자식 요소를 자연스럽게 등장시키는 래퍼 컴포넌트
 *
 * 역할:
 * - children을 감싸는 div를 렌더링
 * - 마운트 시 아래에서 위로 올라오며 opacity가 증가하는 애니메이션 실행
 * - 스크롤 트리거와 애니메이션 인스턴스를 언마운트 시 정리
 *
 * @property {JSX.Element} children - 애니메이션을 적용할 대상 요소
 * @property {number} [yOffset] - 초기 Y축 오프셋 값. 기본값 50
 * @property {number} [delay] - 애니메이션 시작 전 딜레이
 * @property {number} [duration] - 애니메이션 지속 시간. 기본값 0.8
 * @property {string} [ease] - GSAP easing 값. 기본값 'power2.out'
 * @property {string} [scrollStart] - ScrollTrigger 시작 지점. 기본값 'top 80%'
 * @property {HTMLElement} [scrollContainerRef] - 커스텀 스크롤 컨테이너
 */
interface AnimatedRevealProps extends JSX.HTMLAttributes<HTMLDivElement> {
    children: JSX.Element;
    yOffset?: number;
    delay?: number;
    duration?: number;
    ease?: string;
    scrollStart?: string;
    scrollContainerRef?: HTMLElement;
}

export const AnimatedReveal: Component<AnimatedRevealProps> = (allProps) => {
    // 애니메이션 관련 props와 나머지 div 속성을 분리
    const [local, others] = splitProps(allProps, [
        'children',
        'yOffset',
        'delay',
        'duration',
        'ease',
        'scrollStart',
        'scrollContainerRef',
    ]);

    // 실제 애니메이션이 적용될 DOM 참조
    let ref!: HTMLDivElement;

    onMount(() => {
        // 요소가 마운트되면 gsap 애니메이션 생성
        const tween = gsap.fromTo(
            ref,
            {
                // 초기 상태: 아래쪽에 있고 투명함
                y: local.yOffset ?? 50,
                opacity: 0,
            },
            {
                // 최종 상태: 제자리로 올라오고 보이게 됨
                y: 0,
                opacity: 1,
                duration: local.duration ?? 0.8,
                delay: local.delay ?? 0,
                ease: local.ease ?? 'power2.out',
                scrollTrigger: {
                    // 현재 요소가 트리거 대상
                    trigger: ref,
                    // 별도 스크롤 컨테이너가 있으면 사용, 없으면 window 사용
                    scroller: local.scrollContainerRef || window,
                    // 요소 상단이 뷰포트 80% 지점에 왔을 때 시작
                    start: local.scrollStart ?? 'top 80%',
                    // 보이면 재생, 나가면 reverse
                    toggleActions: 'play none none reverse',
                    // 빠른 스크롤 종료 시 성능 최적화 옵션
                    fastScrollEnd: true,
                },
            },
        );

        onCleanup(() => {
            // 컴포넌트 제거 시 scrollTrigger와 tween 정리
            tween.scrollTrigger?.kill();
            tween.kill();
        });
    });

    return (
        // 나머지 HTML 속성(class, style 등)은 그대로 div에 전달
        <div ref={ref} {...others}>
            {local.children}
        </div>
    );
};

export default AnimatedReveal;
