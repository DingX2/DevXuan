import { Motion } from 'solid-motionone';
import { styled } from 'solid-styled-components';
import type { Style } from '@/types';

interface Props extends Style {
    type?: 'whiteBox' | 'grayBox';
    width?: string;
    height?: string;
    backgroundColor?: string;
    direction?: 'column' | 'row';
    spacing?: number | string;
    useFlexGap?: boolean;
    padding?: string;
    pointer?: boolean;
    fitContent?: boolean;
    onClick?: () => void;
}

/**
 * @param {'whiteBox'|'grayBox'} type - type 종류
 * @param {string} width - 너비
 * @param {string} height - 높이
 * @param {string} backgroundColor - 배경색
 * @param {'column' | 'row'} direction - 방향
 * @param {number | string} spacing - gap
 * @param {boolean} useFlexGap - gap 사용유무
 * @param {string} padding - padding
 * @param {boolean} pointer - pointer
 * @param {boolean} fitContent - fitContent 사용유무
 * @param {() => void} onClick - 클릭이벤트
 */
export const Box = styled(Motion.div)<Props>`
    ${({ type }) => (type === 'whiteBox' ? `background-color: #fff; padding: 1rem;` : '')};
    ${({ type }) => (type === 'grayBox' ? `background-color: #eee; padding: 0.5rem 1rem;` : '')};
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '100%'};
    display: flex;
    ${({ direction }) => `flex-direction: ${direction || 'row'};`}
    justify-content: center;
    align-items: center;
    ${({ backgroundColor }) => (backgroundColor ? `background-color: ${backgroundColor}; ` : '')}
    border-radius: 13px;
    ${({ padding }) => (padding ? `padding: ${padding};` : '')}
    ${({ useFlexGap, spacing }) => (useFlexGap ? `gap: ${spacing || 0}px; ` : `margin-top: ${spacing || 0}px;`)}
    ${({ pointer }) => (pointer ? `cursor: pointer;` : '')}
    ${({ fitContent }) => (fitContent ? `height: fit-content; width: fit-content;` : '')}
    ${({ sx }) => sx}
`;
