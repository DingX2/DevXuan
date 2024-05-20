import { styled } from 'solid-styled-components';
import type { Style } from '@/types';

interface Props extends Style {
    width?: string;
    height?: string;
    backgroundColor?: string;
    direction?: 'column' | 'row';
    spacing?: number | string;
    useFlexGap?: boolean;
}

/**
 * @param {string} width - The width of the box.
 * @param {string} height - The height of the box.
 * @param {string} backgroundColor - background color
 * @param {'column' | 'row'} direction - 방향
 * @param {number | string} spacing - gap
 * @param {boolean} useFlexGap - gap 사용유무
 */
export const Box = styled.div<Props>`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '100%'};
    display: flex;
    ${({ direction }) => `flex-direction: ${direction || 'row'};`}
    justify-content: center;
    align-items: center;
    ${({ backgroundColor }) => (backgroundColor ? `background-color: ${backgroundColor}; ` : '')}
    border-radius: 13px;
    padding: 1rem;
    ${({ useFlexGap, spacing }) => (useFlexGap ? `gap: ${spacing || 0}px; ` : `margin-top: ${spacing || 0}px;`)}
    ${({ sx }) => sx}
`;
