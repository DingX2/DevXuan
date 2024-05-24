import type { Accessor, Setter } from 'solid-js';
import type { Dot } from '@/types';
import { useCachedImage, getRandom } from '@/utils';

/**
 * 점이나 이미지를 그리는 함수
 * @param {number} x - x좌표
 * @param {number} y - y좌표
 * @param {'Image' | 'Dot' | 'Redraw'} option - 이미지, 점 선택
 * @param {HTMLCanvasElement} canvasRef - 캔버스 엘리먼트
 * @param {string[] | string} colors - 컬러 색상표 or 저장된 컬러
 * @param {Dot[]} [dots] - 점 정보
 * @param {(dots: Dot[]) => void} [setDots] - 점 정보 업데이트 함수
 * @param {string[] | HTMLImageElement} [imageSource] - 이미지 소스 또는 저장된 이미지 소스
 * @param {Accessor} imageCache - 이미지 캐시
 * @param {Setter} setImageCache - 이미지 캐시 업데이트 함수
 * @returns {void}
 *
 * @example drawDot(x, y, option, canvasRef); 필수 옵션
 */

export const drawDot = (
    x: number,
    y: number,
    option: 'Image' | 'Dot' | 'Redraw',
    canvasRef: HTMLCanvasElement,
    colors?: string[] | string,
    dots?: Dot[],
    setDots?: (dots: Dot[]) => void,
    imageSources?: string[] | HTMLImageElement,
    imageCache?: Accessor<{ [key: string]: HTMLImageElement }>,
    setImageCache?: Setter<{ [key: string]: HTMLImageElement }>,
) => {
    const ctx = canvasRef.getContext('2d');
    if (!ctx) return;
    const actualColor =
        typeof colors === 'string' ? colors : getRandom({ array: colors || [], length: colors?.length || 0 });

    let actualImage: HTMLImageElement | string = '';
    if (imageSources instanceof HTMLImageElement) {
        actualImage = imageSources;
    } else if (Array.isArray(imageSources)) {
        if (imageSources.length > 0 && imageCache && setImageCache) {
            actualImage = useCachedImage(imageSources[0], imageCache, setImageCache);
        } else {
            actualImage = '';
        }
    }
    if (typeof imageSources === 'string' && imageCache && setImageCache) {
        actualImage = useCachedImage(imageSources, imageCache, setImageCache);
    }

    const drawImageWithColor = (svgImage: HTMLImageElement) => {
        const width = 100;
        const height = 100;
        const offsetX = x - width / 2;
        const offsetY = y - height / 2;

        const offScreenCanvas = document.createElement('canvas');
        const offScreenCtx = offScreenCanvas.getContext('2d');
        offScreenCanvas.width = width;
        offScreenCanvas.height = height;
        if (!offScreenCtx) return;

        offScreenCtx.drawImage(svgImage, 0, 0, width, height);
        offScreenCtx.globalCompositeOperation = 'source-in';
        offScreenCtx.fillStyle = actualColor;
        offScreenCtx.fillRect(0, 0, width, height);

        ctx.drawImage(offScreenCanvas, offsetX, offsetY, width, height);
        const newDot = { x, y, radius: 10, actualColor, image: svgImage };
        if (setDots && dots) {
            setDots([...dots, newDot]);
        }
    };

    if (option === 'Image' && typeof actualImage === 'string') {
        const svgImage = useCachedImage(actualImage, imageCache, setImageCache);
        svgImage.src = actualImage;

        if (!svgImage.complete) {
            svgImage.onload = () => {
                drawImageWithColor(svgImage);
            };
        } else {
            drawImageWithColor(svgImage);
        }
    } else if (option === 'Dot') {
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, 2 * Math.PI);
        ctx.fillStyle = actualColor;
        ctx.fill();
        const newDot = { x, y, radius: 10, color: actualColor };
        if (setDots && dots) {
            setDots([...dots, newDot]);
        }
    } else if (option === 'Redraw') {
        if (actualImage && actualImage instanceof HTMLImageElement) {
            drawImageWithColor(actualImage);
        } else {
            ctx.beginPath();
            ctx.arc(x, y, 10, 0, 2 * Math.PI);
            ctx.fillStyle = actualColor;
            ctx.fill();
        }
    }

    console.log(actualColor, actualImage, x, y);
};
