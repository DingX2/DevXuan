import type { ParentComponent } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Motion } from 'solid-motionone';
import type { Style } from '@/types';

interface PositionSelector {
    [key: string]: string;
    left: string;
    center: string;
    right: string;
}

const positionSelector: PositionSelector = {
    left: 'flex-start',
    center: 'center',
    right: 'flex-end',
};

type ComponentType = keyof HTMLElementTagNameMap;

interface Props extends Style {
    color?: string;
    fontSize?: string | number;
    fontStyle?: 'MeongiW' | 'MeongiB' | 'Deco' | 'SurroundAir';
    textAlign?: 'start' | 'center' | 'end' | 'justify';
    position?: 'left' | 'center' | 'right';
    bold?: boolean;
    component?: ComponentType;
}

/**
 * @param {string} color - color
 * @param {string | number} fontSize - font-size 16px
 * @param {'MeongiW' | 'MeongiB' | 'Deco' | 'SurroundAir';} fontStyle - font-style 기본: pretendard
 * @param {'start' | 'center' | 'end' | 'justify'} textAlign - text-align
 * @param {'left' | 'center' | 'right'} position - position
 * @param {boolean} bold - 굵게 유무
 */

export const Text: ParentComponent<Props> = ({
    component = 'span',
    children,
    color,
    fontSize = '16px',
    fontStyle,
    textAlign,
    position,
    bold,
    sx,
}) => {
    const TextComponent = styled(Motion)<Props>`
        display: flex;
        display: inline-block;
        ${color ? `color: ${color};` : ''}
        ${textAlign ? `text-align: ${textAlign};` : ''}
        ${position ? `justify-content: ${positionSelector[position]};` : ''}

        font-family: ${({ fontStyle }) => {
            if (fontStyle === 'MeongiW') return 'Cafe24MeongiW';
            if (fontStyle === 'MeongiB') return 'Cafe24MeongiB';
            if (fontStyle === 'Deco') return 'Cafe24Decoshadow';
            if (fontStyle === 'SurroundAir') return 'Cafe24SsurroundAir';
            return 'Pretendard-Regular';
        }};

        white-space: pre-line;
        font-size: ${typeof fontSize === 'number' ? `${fontSize}px` : fontSize};
        ${bold ? `font-weight: 700;` : ''}
        ${sx || ''}
    `;

    return (
        <TextComponent as={component} fontStyle={fontStyle}>
            {children}
        </TextComponent>
    );
};
