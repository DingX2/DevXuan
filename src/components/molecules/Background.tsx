import type { ParentComponent } from 'solid-js';
import { Stack } from '@/components/atoms';

export const Background: ParentComponent = ({ children }) => {
    return (
        <Stack
            center
            sx={
                /* css */ `
                position: absolute;
                left: 0;
                width: 100%;
                z-index: -99;
                background: linear-gradient(55deg, #FED3F9 0%, #90A3EA 100%),linear-gradient(to bottom, transparent 18px, #efefef 8px) 0 0 / 100vw 19px repeat-y,
                linear-gradient(to right, transparent 18px, #efefef 8px) 0 0 / 19px 100vh repeat-x;
                background-blend-mode: color-dodge;
            `
            }
        >
            <Stack>{children}</Stack>
        </Stack>
    );
};
