import { styled } from 'solid-styled-components';

interface Props {
    width?: string | number;
    height?: string | number;
}

/**
 * Image component.
 * @param {string | number} width - Image width.
 * @param {string | number} height - Image height.
 */
export const Image = styled.img<Props>`
    width: ${({ width = '100%' }) => (typeof width === 'number' ? `${width}px` : width)};
    height: ${({ height = 'auto' }) => (typeof height === 'number' ? `${height}px` : height)};
`;
