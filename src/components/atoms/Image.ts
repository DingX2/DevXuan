import { styled } from 'solid-styled-components';
import { Motion } from 'solid-motionone';
import type { Style } from '@/types';

interface Props extends Style {
    width?: string | number;
    height?: string | number;
    useAbsolute?: boolean;
    center?: boolean;
    bottom?: number;
    zIndex?: number;
}

/**
 * Image component.
 * @param {string | number} width - Image width.
 * @param {string | number} height - Image height.
 * @param {boolean} useAbsolute - absolute 설정
 * @param {boolean} center - 가로 중앙 설정
 * @param {number} bottom -  absolute시 위치설정
 * @param {number} zIndex - z-index 설정
 */
export const Image = styled(Motion.img)<Props>`
    width: ${({ width = '100%' }) => (typeof width === 'number' ? `${width}px` : width)};
    height: ${({ height = 'auto' }) => (typeof height === 'number' ? `${height}px` : height)};
    position: ${({ useAbsolute }) => (useAbsolute ? 'absolute' : 'relative')};
    z-index: ${({ zIndex }) => zIndex || 0};
    ${({ useAbsolute, bottom }) => (useAbsolute ? `bottom: ${bottom || 0}px` : '')};
    object-fit: cover;
    ${({ useAbsolute, center }) =>
        useAbsolute && center
            ? `
                left: 50%;
                transform: translateX(-50%);
            `
            : ''}
    ${({ sx }) => sx}
`;
