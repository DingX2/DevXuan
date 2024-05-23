import { type Component, createSignal, onMount, onCleanup } from 'solid-js';
import { type Style } from '@/types';

interface Props extends Style {
    width?: string;
    height?: string;
    canvasRef?: (el: HTMLCanvasElement) => void;
}

const [pos, setPos] = createSignal({ x: 0, y: 0 });
const [canvasState, setCanvasState] = createSignal<{ rect: DOMRect | null; ctx: CanvasRenderingContext2D | null }>({
    rect: null,
    ctx: null,
});
const colors = ['#B2ADEF', '#8CE1F9', '#B0C1E4', '#EDF0EF', '#249BEB', '#FBB2E2'];
const [dots, setDots] = createSignal<{ x: number; y: number; radius: number; color: string }[]>([]);

export const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

export const drawDot = (x: number, y: number) => {
    const color = getRandomColor();
    const { ctx } = canvasState();

    if (!ctx) return;
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();
    setPos({ x, y });
    setDots((dots) => [...dots, { x, y, radius: 10, color }]);
};

let intervalId: NodeJS.Timeout | undefined;
let isAutoplayRunning = false;

export const autoplay = (mode: boolean) => {
    const { rect, ctx } = canvasState();
    if (!rect || !ctx) return;

    const drawRandomDot = () => {
        const x = Math.random() * rect.width;
        const y = Math.random() * rect.height;

        drawDot(x, y);
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

    drawDot(x, y);
};

const redrawDots = () => {
    const { ctx } = canvasState();
    if (!ctx) return;

    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    dots().forEach((dot) => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, 2 * Math.PI);
        ctx.fillStyle = dot.color;
        ctx.fill();
    });
};

export const Canvas: Component<Props> = (props) => {
    let canvasRef: HTMLCanvasElement | null = null;

    const updateCanvasSize = (el: HTMLCanvasElement) => {
        el.width = el.offsetWidth;
        el.height = el.offsetHeight;
        const rect = el.getBoundingClientRect();
        setCanvasState({ rect, ctx: el.getContext('2d') });
        redrawDots();
    };

    const setCanvasRef = (el: HTMLCanvasElement) => {
        canvasRef = el;
        if (el) {
            updateCanvasSize(el);
        }
    };

    const handleResize = () => {
        if (canvasRef) {
            updateCanvasSize(canvasRef);
        }
    };

    const style = {
        canvas: ` /* css */ 
            position: absolute;
            top: 0;
            left: 0;
            width: 100vw;
            height: 100vh;
            border: none;
            z-index: -10;
            ${props.sx}
            `,
    };

    onMount(() => {
        if (canvasRef) {
            setCanvasRef(canvasRef);
        }
        window.addEventListener('resize', handleResize);
    });

    onCleanup(() => {
        window.removeEventListener('resize', handleResize);
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
