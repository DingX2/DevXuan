import { onCleanup, createEffect } from 'solid-js';

interface OnMountProps {
    ref: HTMLCanvasElement;
    func: () => void;
    [key: string]: unknown;
}

export const onMount = ({ ref, func, ...props }: OnMountProps) => {
    const { setCanvasRef } = props;

    createEffect(() => {
        if (ref && typeof setCanvasRef === 'function') {
            setCanvasRef(ref);
        }
        window.addEventListener('resize', func);

        onCleanup(() => {
            window.removeEventListener('resize', func);
        });
    });
};
