import { styled } from 'solid-styled-components';

interface Props {
    width?: string;
    height?: string;
}

/**
 * @param {string} width - The width of the box.
 * @param {string} height - The height of the box.
 */
export const Box = styled.div<Props>`
    width: ${({ width }) => width || '100%'};
    height: ${({ height }) => height || '100%'};
    display: flex;
    justify-content: center;
    align-items: center;
`;
