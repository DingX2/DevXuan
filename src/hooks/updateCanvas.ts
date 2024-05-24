/** 캔버스 상태를 업데이트하는 함수
 * @param {HTMLCanvasElement} el - 캔버스 엘리먼트
 * @param {(state: { rect: DOMRect; ctx: CanvasRenderingContext2D | null }) => void} setCanvasState - 캔버스 상태 설정 함수
 * @return {void}
 * @example updateCanvasSize(el, setCanvasState);
 */

export const updateCanvas = (
    el: HTMLCanvasElement,
    setCanvasState: (state: { rect: DOMRect; ctx: CanvasRenderingContext2D | null }) => void,
) => {
    if (!el) return;
    el.width = el.offsetWidth;
    el.height = el.offsetHeight;
    const rect = el.getBoundingClientRect();
    const ctx = el.getContext('2d');
    setCanvasState({ rect, ctx });
};
