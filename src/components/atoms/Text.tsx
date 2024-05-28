import type { ParentComponent } from 'solid-js';
import { styled } from 'solid-styled-components';
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
    fontSize?: string;
    textAlign?: 'start' | 'center' | 'end' | 'justify';
    position?: 'left' | 'center' | 'right';
    bold?: boolean;
    component?: ComponentType;
}

/**
 * @param {string} color - color
 * @param {string} fontSize - font-size
 * @param {'start' | 'center' | 'end' | 'justify'} textAlign - text-align
 * @param {'left' | 'center' | 'right'} position - position
 * @param {boolean} bold - 굵게 유무
 */

export const Text: ParentComponent<Props> = ({
    component = 'span',
    children,
    color,
    fontSize,
    textAlign,
    position,
    bold,
    sx,
}) => {
    const TextComponent = styled(component ?? 'h1')`
        display: flex;
        display: inline-block;
        ${color ? `color: ${color};` : ''}
        ${textAlign ? `text-align: ${textAlign};` : ''}
        ${position ? `justify-content: ${positionSelector[position]};` : ''}
    
        white-space: pre-line;
        font-size: ${fontSize || '16px'};
        ${bold ? `font-weight: 700;` : ''}
        ${sx || ''}
    `;

    return <TextComponent>{children}</TextComponent>;
};
