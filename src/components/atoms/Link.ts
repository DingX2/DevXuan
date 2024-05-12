import { styled } from 'solid-styled-components';
import { A } from '@solidjs/router';

interface Props {
    href?: string;
    target?: '_self' | `_blank`;
}

export const Link = styled(A)<Props>`
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem 1rem;
    color: black;
    text-decoration-line: none;
    &:hover {
        color: #a0f;
        transition:
            color 0.5s,
            background-color 0.5s;
    }
`;
