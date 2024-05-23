import { type Component, createSignal } from 'solid-js';

interface Props {
    width?: string;
    height?: string;
}

const [pos, setPos] = createSignal({ x: 0, y: 0 });
const id = (+new Date()).toString(36);
const colors = ['#B2ADEF', '#8CE1F9', '#B0C1E4', '#EDF0EF', '#249BEB', '#FBB2E2'];

const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)];
};

const handleClick = (event: MouseEvent) => {
    const ref = document.getElementById(id) as HTMLCanvasElement | null;
    if (!ref) return;

    const rect = ref.getBoundingClientRect();
    const ctx = ref.getContext('2d');
    if (!ctx) return;

    const color = getRandomColor();

    const x = (event.clientX - rect.left) * (ref.width / rect.width);
    const y = (event.clientY - rect.top) * (ref.height / rect.height);

    ctx.beginPath();
    ctx.arc(x, y, 10, 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill();

    setPos({ x, y });
};

export const Canvas: Component<Props> = ({ width, height }) => {
    const style = {
        border: '1px solid #000',
    };

    return (
        <>
            <canvas id={id} width={width} height={height} style={style} onClick={handleClick} />
            <span>
                x:{pos().x} y:{pos().y}
            </span>
        </>
    );
};
