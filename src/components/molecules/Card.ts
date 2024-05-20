import type { ParentComponent } from 'solid-js';
import { styled } from 'solid-styled-components';

interface Props {
    width?: number;
    height?: number;
    top?: boolean;
    middle?: boolean;
    bottom?: boolean;
    shadow?: boolean;
    borderColor?: string;
}

export const Card: ParentComponent<Props> = styled.div`
    display: flex;
    flex-direction: column;
    width: ${({ width }) => width || 300}px;
    height: ${({ height }) => height || 300}px;
    background: rgba(255, 255, 255, 0.1);
    ${({ shadow }) => (shadow ? 'box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);' : '')};
    backdrop-filter: blur(2.5px);
    -webkit-backdrop-filter: blur(2.5px);
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
`;
