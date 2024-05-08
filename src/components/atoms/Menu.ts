import { styled } from 'solid-styled-components';

interface Props {
    href?: string;
}

export const Menu = styled.a<Props>`
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 0.5rem 1rem;
    color: black;
    &:hover {
        color: #a0f;
        background-color: #f0f;
        transition:
            color 0.5s,
            background-color 0.5s;
    }
`;
