import { styled } from 'solid-styled-components';
import { A } from '@solidjs/router';

interface Props {
    href?: string;
    target?: '_self' | `_blank`;
    active?: string;
    inactive?: string;
}

export const Link = styled(A)<Props>`
    min-width: max-content;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem 1rem;
    color: black;
    text-decoration-line: none;

    &:hover {
        color: #748df2;
        transition:
            color 0.5s,
            background-color 0.5s;
    }

    &.active {
        color: #748df2;
        fill: #748df2;
        border-bottom: 1px solid #748df2;
    }
`;
