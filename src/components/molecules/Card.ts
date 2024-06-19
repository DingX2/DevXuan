import type { ParentComponent } from 'solid-js';
import { styled } from 'solid-styled-components';
import type { Style } from '@/types';

interface Props extends Style {
    width?: number | string;
    height?: number | string;
    top?: boolean;
    middle?: boolean;
    bottom?: boolean;
    shadow?: boolean;
    fitContent?: boolean;
    borderColor?: string;
    padding?: string;
}

export const Card: ParentComponent<Props> = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => (typeof width === 'number' ? `${width}vw` : width)};
    max-width: 1080px;
    height: ${({ height }) => (typeof height === 'number' ? `${height}vh` : height)};
    height: ${({ fitContent }) => (fitContent ? 'fit-content' : 'auto')};
    ${({ padding }) => `padding: ${padding};`}
    background: rgba(255, 255, 255, 0.1);
    ${({ shadow }) => (shadow ? 'box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);' : '')};
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-radius: 10px;
    ${({ borderColor }) => (borderColor ? `border: 1px solid ${borderColor};` : 'rgba(255, 255, 255, 0.18)')};
    ${({ top, middle, bottom }) => {
        if (top) {
            return 'justify-content: flex-start;';
        }
        if (middle) {
            return 'justify-content: center;';
        }
        if (bottom) {
            return 'justify-content: flex-end;';
        }
        return '';
    }};
    ${({ sx }) => sx};
`;
