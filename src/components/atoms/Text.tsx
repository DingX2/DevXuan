import type { ParentComponent } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Motion } from 'solid-motionone';
import { textColorTokens, textSizeTokens, type TextRole, type TextSize } from '@/styles/tokens/text';
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

const isTextRole = (value: string): value is TextRole => value in textColorTokens;
const isTextSize = (value: string): value is TextSize => value in textSizeTokens;

const getResolvedFontSize = (fontSize: string | number) => {
    if (typeof fontSize === 'number') return `${fontSize}px`;
    if (isTextSize(fontSize)) return textSizeTokens[fontSize];
    return fontSize;
};

const getFontFamily = (fontStyle?: 'MeongiW' | 'MeongiB' | 'Deco' | 'SurroundAir') => {
    if (fontStyle === 'MeongiW') return 'Cafe24MeongiW';
    if (fontStyle === 'MeongiB') return 'Cafe24MeongiB';
    if (fontStyle === 'Deco') return 'Cafe24Decoshadow';
    if (fontStyle === 'SurroundAir') return 'Cafe24SsurroundAir';
    return 'Pretendard-Regular';
};

interface Props extends Style {
    color?: string;
    fontSize?: string | number;
    fontStyle?: 'MeongiW' | 'MeongiB' | 'Deco' | 'SurroundAir';
    textAlign?: 'start' | 'center' | 'end' | 'justify';
    position?: 'left' | 'center' | 'right';
    bold?: boolean;
    component?: ComponentType;
}

interface StyledTextProps extends Props {
    resolvedColor?: string;
    resolvedFontSize?: string;
}

const StyledText = styled(Motion)<StyledTextProps>`
    display: inline-block;
    ${({ resolvedColor }) => (resolvedColor ? `color: ${resolvedColor};` : '')}
    ${({ textAlign }) => (textAlign ? `text-align: ${textAlign};` : '')}
    ${({ position }) => (position ? `justify-content: ${positionSelector[position]};` : '')}
    ${({ fontStyle }) => `font-family: ${getFontFamily(fontStyle)};`}
    white-space: pre-line;
    ${({ resolvedFontSize }) => (resolvedFontSize ? `font-size: ${resolvedFontSize};` : '')}
    ${({ bold }) => (bold ? 'font-weight: 700;' : '')}
    ${({ sx }) => sx || ''}
`;

export const Text: ParentComponent<Props> = ({
    component = 'span',
    children,
    color = 'primary',
    fontSize = '1rem',
    fontStyle,
    textAlign,
    position,
    bold,
    sx,
}) => {
    const resolvedColor = isTextRole(color) ? textColorTokens[color] : color;
    const resolvedFontSize = getResolvedFontSize(fontSize);

    return (
        <StyledText
            as={component}
            fontStyle={fontStyle}
            textAlign={textAlign}
            position={position}
            bold={bold}
            sx={sx}
            resolvedColor={resolvedColor}
            resolvedFontSize={resolvedFontSize}
        >
            {children}
        </StyledText>
    );
};
