import type { ParentProps } from 'solid-js';
import { styled } from 'solid-styled-components';
import type { Style } from '@/types';

interface Props extends Style, ParentProps {
    direction?: 'column-reverse' | 'column' | 'row-reverse' | 'row';
    spacing?: number | string;
    useFlexGap?: boolean;
}
/**
 * Stack 컴포넌트는 자식 요소를 상하 또는 좌우로 나열하는 레이아웃을 구현할 때 사용하는 컴포넌트입니다.
 *
 * @param {Props} props - Stack 컴포넌트에서 사용되는 Props입니다.
 * @param {ParentProps} [props.children] - Stack에 포함될 자식 요소입니다.
 * @param {'column-reverse' | 'column' | 'row-reverse' | 'row'} [props.direction='column'] - Stack 내 자식 요소들의 나열 방향입니다.
 * @param {number | string} [props.spacing=0] - Stack 내 자식 요소들 간의 간격입니다.
 * @param {boolean} [props.useFlexGap=false] - CSS flexbox 속성인 gap을 사용할지 여부입니다.
 * @returns {JSX.Element} Stack 컴포넌트의 JSX.Element를 반환합니다.
 */
export const Stack = styled.div<Props>`
    display: flex;
    width: 100%;
    flex-direction: ${(props) => props.direction || 'column'};
    ${(props) => (props.useFlexGap ? `gap: ${props.spacing || 0}px; ` : `margin-top: ${props.spacing || 0}px;`)}
    ${({ sx }) => sx}
`;
