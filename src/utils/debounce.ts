interface Props<T extends (...args: unknown[]) => void> {
    func: T;
    delay: number;
}

/**
 * batch update를 위한 디바운스 함수
 *
 * @param {T} func - The function to debounce.
 * @param {number} delay - The number of milliseconds to delay.
 * @returns {(...args: Parameters<T>) => void} - Returns the new debounced function.
 */

export const debounce = <T extends (...args: unknown[]) => void>({ func, delay }: Props<T>) => {
    let debounceTimer: NodeJS.Timeout;

    return (...args: Parameters<T>): void => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => {
            func(...args);
        }, delay);
    };
};
