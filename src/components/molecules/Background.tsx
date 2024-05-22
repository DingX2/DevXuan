import { type ParentComponent, Show } from 'solid-js';
import { Stack, Image } from '@/components/atoms';
import { type Style } from '@/types';

interface Props extends Style {
    height: string;
    image?: string;
    select?: boolean;
}

export const Background: ParentComponent<Props> = ({ children, height, image, select, sx = '' }) => {
    return (
        <Show
            when={select}
            fallback={
                <Image
                    src={image}
                    alt="background"
                    sx={
                        /* css */ `
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: ${height}vh;
                        z-index: -99;
                        object-fit: cover;
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
                    ${sx}
                `
                }
            >
                <Stack>{children}</Stack>
            </Stack>
        </Show>
    );
};
