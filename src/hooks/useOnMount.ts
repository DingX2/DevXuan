import { onCleanup, onMount, createEffect } from 'solid-js';

interface Props {
    ref: HTMLCanvasElement | null;
    func: (
        ref: HTMLCanvasElement,
        setter: (state: { rect: DOMRect; ctx: CanvasRenderingContext2D | null }) => void,
    ) => void;
    setter: (state: { rect: DOMRect; ctx: CanvasRenderingContext2D | null }) => void;
    resizeFunc: () => void;
    [key: string]: unknown;
}

/**
 * useOnMount 실행 및 onCleanup 훅
 * @param {HTMLCanvasElement | null} ref - 캔버스 엘리먼트
 * @param {() => void} func - 실행할 함수
 * @param {unknown} props - 추가 프로퍼티
 * @param {(state: { rect: DOMRect; ctx: CanvasRenderingContext2D | null }) => void} setter - 캔버스 상태 설정 함수
 * @example useOnMount({ ref, func, setter, ...props });
 */

export const useOnMount = ({ ref, func, setter, resizeFunc }: Props) => {
    onMount(() => {
        console.log('ref', ref);
        if (!ref) return;
        func(ref, setter);
        window.addEventListener('resize', resizeFunc);

        onCleanup(() => {
            console.log('Removing resize event listener');
            window.removeEventListener('resize', resizeFunc);
        });
    });

    createEffect(() => {
        if (ref) {
            console.log('Updating canvas size');
            func(ref, setter);
        }
    });
};
