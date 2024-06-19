/**
 * length 만큼의 배열을 만들어 반환합니다.
 * @param {number} length - 배열의 길이
 * @returns {number[]} 0부터 length-1까지의 숫자로 이루어진 배열
 */

export const makeArray = (length: number) => Array.from({ length }, (_, i) => i);
