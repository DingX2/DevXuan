import { type Style } from './styles';

export type CanvasState = {
    rect: DOMRect | null;
    ctx: CanvasRenderingContext2D | null;
};

export interface Props extends Style {
    width?: string;
    height?: string;
    canvasRef?: (el: HTMLCanvasElement) => void;
}
