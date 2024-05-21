import { type ParentComponent, Show } from 'solid-js';
import { Stack, Image } from '@/components/atoms';

interface Props {
    height: string;
    image?: string;
    grid?: boolean;
}

export const Background: ParentComponent<Props> = ({ children, height, image, grid }) => {
    return (
        <Show
            when={grid}
            fallback={
                <Image
                    src={image}
                    alt="background"
                    sx={
                        /* css */ `
                        position: absolute,
                        left: 0,
                        top: 0,
                        width: 100%,
                        height: ${height}vh,
                        z-index: -99,
                    `
                    }
                />
            }
        >
            <Stack
                center
                sx={
                    /* css */ `
                    position: absolute;
                    left: 0;
                    width: 100%;
                    height: ${height}vh;
                    z-index: -99;
                    background: linear-gradient(55deg, #FED3F9 0%, #90A3EA 100%),
                    linear-gradient(to bottom, transparent 18px, #efefef 8px) 0 0 / 100vw 19px repeat-y,
                    linear-gradient(to right, transparent 18px, #efefef 8px) 0 0 / 19px 100vh repeat-x;
                    background-blend-mode: color-dodge;
    `
                }
            >
                <Stack>{children}</Stack>
            </Stack>
        </Show>
    );
};
