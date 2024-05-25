import { type Component, createSignal, onMount, onCleanup } from 'solid-js';
import { canvas } from '@/constants';
import { type Dot, type Props, type CanvasState } from '@/types';
import { debounce } from '@/utils';
import { redraw, drawDot, updateCanvas } from '@/hooks';

let canvasRef: HTMLCanvasElement | null = null;
export const [pos, setPos] = createSignal({ x: 0, y: 0 });
export const [canvasState, setCanvasState] = createSignal<CanvasState>({
    rect: null,
    ctx: null,
});
const [dots, setDots] = createSignal<Dot[]>([]);
const [imageCache, setImageCache] = createSignal<{ [key: string]: HTMLImageElement }>({});

let intervalId: NodeJS.Timeout | undefined;
let isAutoplayRunning = true;

export const autoplay = (mode: boolean) => {
    const { rect, ctx } = canvasState();
    if (!rect || !ctx) return;

    const drawRandomDot = () => {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;
        drawDot(x, y, 'Image', canvasRef!, canvas.colors, [], setDots, canvas.imageSources, imageCache, setImageCache);
    };

    if (mode && !isAutoplayRunning) {
        intervalId = setInterval(drawRandomDot, 2000);
        isAutoplayRunning = true;
    } else if (!mode && intervalId) {
        clearInterval(intervalId);
        intervalId = undefined;
        isAutoplayRunning = false;
    }
};

export const handleClick = (event: MouseEvent, ref: HTMLCanvasElement) => {
    const { ctx, rect } = canvasState();
    if (!ctx || !rect) return;

    const x = (event.clientX - rect.left) * (ref.width / rect.width);
    const y = (event.clientY - rect.top) * (ref.height / rect.height);

    drawDot(x, y, 'Image', ref, canvas.colors, [], setDots, canvas.imageSources, imageCache, setImageCache);
};

export const Canvas: Component<Props> = (props) => {
    const setCanvasRef = (el: HTMLCanvasElement) => {
        canvasRef = el;
        if (el) {
            updateCanvas(el, setCanvasState);
        }
    };

    const handleResizeDebounce = debounce({
        func: () => {
            if (canvasRef) {
                updateCanvas(canvasRef, setCanvasState);
                redraw(canvasRef, canvasState().ctx, dots());
            }
        },
        delay: 300,
    });

    const style = {
        canvas: /* css */ `
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            border: none;
            z-index: 0;
            ${props.sx}
        `,
    };

    onMount(() => {
        if (!canvasRef) return;
        updateCanvas(canvasRef, setCanvasState);
        window.addEventListener('resize', handleResizeDebounce);

        onCleanup(() => {
            window.removeEventListener('resize', handleResizeDebounce);
        });
    });

    return (
        <>
            <canvas
                ref={setCanvasRef}
                width={props.width}
                height={props.height}
                style={style.canvas}
                onClick={(e) => {
                    if (canvasRef) handleClick(e, canvasRef);
                }}
            />
            <span>
                x:{pos().x} y:{pos().y}
            </span>
        </>
    );
};
