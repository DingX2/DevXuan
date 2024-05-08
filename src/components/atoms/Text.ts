import { styled } from 'solid-styled-components';

interface Props {
    color?: string;
    fontSize?: string;
}

export const Text = styled.span<Props>`
    color: ${({ color }) => color || 'black'};
    font-size: ${({ fontSize }) => fontSize || '16px'};
`;
