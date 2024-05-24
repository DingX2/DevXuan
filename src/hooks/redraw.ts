import { type Dot } from '@/types';
import { drawDot } from './drawDot';

/**
 * 화면 크기 변환시 캔버스 다시 그리기
 * @param { HTMLCanvasElement } ref - 캔버스 엘리먼트
 * @param { CanvasRenderingContext2D | null} ctx - 캔버스 초기화
 * @param {Dot[]} dots - 저장된 dots 데이터
 * @returns {void}
 * @example redraw(ctx, dots);
 */

export const redraw = (ref: HTMLCanvasElement, ctx: CanvasRenderingContext2D | null, dots: Dot[]) => {
    if (!ctx) return;
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    console.log('redraw', dots);
    dots.forEach((dot) => {
        drawDot(dot.x, dot.y, 'Redraw', ref, dot.color, undefined, undefined, dot.image, undefined, undefined);
    });
};
