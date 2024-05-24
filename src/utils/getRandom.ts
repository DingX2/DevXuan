interface Props<T> {
    array: T[];
    length: number;
}

/**
 * 랜덤으로 하나의 값을 반환
 * @param {Props} { array, length } - array와 length를 받아서 랜덤으로 하나의 값을 반환
 * @returns {T} - 랜덤으로 선택된 값
 * @example getRandom({ array: [1, 2, 3, 4, 5], length: 5 });
 */

export const getRandom = <T>({ array, length }: Props<T>) => {
    return array[Math.floor(Math.random() * length)];
};
