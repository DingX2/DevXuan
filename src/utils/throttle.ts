interface Props<T extends (...args: unknown[]) => void> {
    func: T;
    delay: number;
}

/**
 * throttle 이벤트 발생시 delay 이후에 1번만 적용
 *
 * @param {Function} func - The function to throttle
 * @param {number} delay - the number of milliseconds to throttle
 * @return {Function} - Returns the new throttled function
 *
 * @example throttle({ func: () => console.log('throttle'), delay: 1000 });
 */

export const throttle = <T extends (...args: unknown[]) => void>({
    func,
    delay,
}: Props<T>): ((...args: Parameters<T>) => void) => {
    let lastCall = 0;
    let timeout: NodeJS.Timeout | null = null;

    return (...args: Parameters<T>) => {
        const now = Date.now();
        const remainingTime = delay - (now - lastCall);

        if (remainingTime <= 0 || remainingTime > delay) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            lastCall = now;
            func(...args);
        } else if (!timeout) {
            timeout = setTimeout(() => {
                lastCall = Date.now();
                timeout = null;
                func(...args);
            }, remainingTime);
        }
    };
};
