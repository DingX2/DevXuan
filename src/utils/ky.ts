import ky from 'ky';

export const kyInstance = ky.create({
    prefixUrl: `${import.meta.env.VITE_BASE_URL}/api`,
    credentials: 'include',
});
