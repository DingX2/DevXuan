import type { ParentProps } from 'solid-js';
import { styled } from 'solid-styled-components';
import type { Style } from '@/types';

interface Props extends Style, ParentProps {
    direction?: 'column-reverse' | 'column' | 'row-reverse' | 'row';
    position?: 'relative' | 'absolute' | 'static';
    spacing?: number | string;
    useFlexGap?: boolean;
    alignItemCenter?: boolean;
    alignItemStart?: boolean;
    left?: boolean;
    center?: boolean;
    right?: boolean;
    between?: boolean;
}
/**
 * Stack 컴포넌트는 자식 요소를 상하 또는 좌우로 나열하는 레이아웃을 구현할 때 사용하는 컴포넌트입니다.
 *
 * @param {Props} props - Stack 컴포넌트에서 사용되는 Props입니다.
 * @param {ParentProps} [children] - Stack에 포함될 자식 요소입니다.
 * @param {'column-reverse' | 'absolute' | 'row-reverse' | 'row'} [direction='column'] - Stack 내 자식 요소들의 나열 방향입니다.
 * @param {'relative' | 'absolute' | 'static'} [position='relative'] - Stack 내 자식 요소들의 position입니다.
 * @param {boolean} [left=false] - Stack 내 자식 요소들을 좌측에 정렬합니다.
 * @param {boolean} [center=false] - Stack 내 자식 요소들을 가운데에 정렬합니다.
 * @param {boolean} [right=false] - Stack 내 자식 요소들을 우측에 정렬합니다.
 * @param {boolean} [between=false] - Stack 내 자식 요소들을 우측에 정렬합니다.
 * @param {number | string} [spacing=0] - Stack 내 자식 요소들 간의 간격입니다.
 * @param {boolean} [useFlexGap=false] - CSS flexbox 속성인 gap을 사용할지 여부입니다.
 * @param {boolean} [alignItemCenter=false] - Stack 내 자식 요소들을 세로 가운데에 정렬합니다.
 * @returns {JSX.Element} Stack 컴포넌트의 JSX.Element를 반환합니다.
 */
export const Stack = styled.div<Props>`
    display: flex;
    width: 100%;
    flex-direction: ${({ direction }) => direction || 'column'};
    align-items: ${({ alignItemCenter, alignItemStart }) => {
        if (alignItemCenter) return 'center';
        if (alignItemStart) return 'flex-start';
        return '';
    }};
    ${({ position }) => `position: ${position};`}
    ${({ useFlexGap, spacing }) => (useFlexGap ? `gap: ${spacing || 0}px; ` : `margin-top: ${spacing || 0}px;`)}
    ${({ sx }) => sx}
    ${({ left, center, right, between }) => {
        if (left) {
            return 'justify-content: flex-start;';
        }
        if (center) {
            return 'justify-content: center;';
        }
        if (right) {
            return 'justify-content: flex-end;';
        }
        if (between) {
            return 'justify-content: space-between;';
        }
        return '';
    }};
`;
