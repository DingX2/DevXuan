import type { ParentComponent } from 'solid-js';
import { styled } from 'solid-styled-components';

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

interface Props {
    color?: string;
    fontSize?: string;
    textAlign?: 'start' | 'center' | 'end' | 'justify';
    position?: 'left' | 'center' | 'right';
    component?: ComponentType;
}

export const Text: ParentComponent<Props> = ({
    component = 'span',
    children,
    color,
    fontSize,
    textAlign,
    position,
}) => {
    const TextComponent = styled(component ?? 'h1')`
        display: flex;
        ${color ? `color: ${color};` : ''}
        ${textAlign ? `text-align: ${textAlign};` : ''}
        ${position ? `justify-content: ${positionSelector[position]};` : ''}

        white-space: pre-line;
        font-size: ${fontSize || '16px'};
    `;

    return <TextComponent>{children}</TextComponent>;
};
