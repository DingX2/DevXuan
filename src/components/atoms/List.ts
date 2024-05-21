import type { ParentComponent } from 'solid-js';
import { styled } from 'solid-styled-components';

export const List: ParentComponent = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 0 0 50px 50px;
    list-style: none;
`;
