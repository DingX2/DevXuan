import { styled } from 'solid-styled-components';
import type { Style } from '@/types';

interface Props extends Style {
    width?: string;
    height?: string;
    direction?: 'column' | 'row';
}

/**
 * @param {string} width - The width of the box.
 * @param {string} height - The height of the box.
 */
export const Box = styled.div<Props>`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '100%'};
    display: flex;
    ${({ direction }) => `flex-direction: ${direction || 'row'};`}
    justify-content: center;
    align-items: center;
    ${({ sx }) => sx}
`;
