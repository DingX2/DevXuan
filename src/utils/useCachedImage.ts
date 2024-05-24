import { type Accessor, type Setter } from 'solid-js';

/**
 * 캐시된 이미지 사용
 * @param {string} src 이미지 소스 URL
 * @param {Accessor} imageCache 이미지 캐시 상태
 * @param {Setter} setImageCache 이미지 캐시 상태 변경 함수
 * @returns 캐시된 이미지 또는 새로운 이미지 객체
 * @example const img = useCachedImage(src, imageCache, setImageCache);
 */

export const useCachedImage = (
    src: string,
    imageCache: Accessor<{ [key: string]: HTMLImageElement }> | undefined,
    setImageCache: Setter<{ [key: string]: HTMLImageElement }> | undefined,
): HTMLImageElement => {
    if (!imageCache || !setImageCache) {
        throw new Error('imageCache and setImageCache must be provided');
    }

    const cache = imageCache();
    if (cache[src]) {
        return cache[src];
    }
    const img = new Image();
    img.src = src;
    img.onload = () => {
        setImageCache((prev) => ({ ...prev, [src]: img }));
    };
    return img;
};
