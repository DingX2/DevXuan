import { styled } from 'solid-styled-components';
import { type Style } from '@/types';
import { css } from '@/styles';

interface Props extends Style {
    variant?: 'primary' | 'secondary';
    backgroundColor?: string;
    color?: string;
    width?: string;
    height?: string;
    fontSize?: number;
    icon?: string;
}

/**
 * @param {'primary' | 'secondary'} variant - primary, secondary 디자인 버튼
 * @param {string} backgroundColor - background-color
 * @param {string} color - color
 * @param {string} width - width 100% 기본
 * @param {string} height - height auto 기본
 * @param {number} fontSize - font-size
 * @param {string} icon - 이미지 버튼, 24px 기본
 */

export const Button = styled.button<Props>`
    background-image: ${({ icon = '' }) => (icon ? `url(${icon})` : 'none')};
    background-size: 1.5rem;
    background-repeat: no-repeat;
    background-position: center;

    display: flex;
    justify-content: center;
    align-items: center;

    width: ${({ icon, width = icon ? '24px' : '100%' }) => width};
    height: ${({ icon, height = icon ? '24px' : 'auto' }) => height};
    ${({ icon }) => (icon ? 'border: none;' : '')}

    color: ${({ color }) => color};
    background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: ${({ fontSize }) => fontSize};
    cursor: pointer;
    ${({ variant }) => (variant === 'primary' ? css.ButtonStylePrimary : '')}
    ${({ variant }) => (variant === 'secondary' ? css.ButtonStyleSecondary : '')}
    ${({ sx }) => sx}
`;
