import { styled } from 'solid-styled-components';

interface Props {
    backgroundColor?: string;
    color?: string;
    size?: number;
    fontSize?: number;
}

export const Button = styled.button<Props>`
    color: #000;
    background: ${({ backgroundColor }) => backgroundColor || '#FF0000'}
    padding: 0.5rem 1rem;
    border-radius: 5px;
    font-size: ${({ fontSize }) => fontSize};
`;
