import { type ParentComponent, Show } from 'solid-js';
import { Stack } from '@/components/atoms';
import { type Style } from '@/types';

interface Props extends Style {
    height: string;
    image?: string;
    select?: boolean;
    ref?: HTMLDivElement | ((el: HTMLDivElement) => void);
}

export const Background: ParentComponent<Props> = (props) => {
    return (
        <Show
            when={props.select}
            fallback={
                <Stack
                    ref={props.ref}
                    sx={
                        /* css */ `
                        height: ${props.height};
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: -99;
                        background: url(${props.image}) no-repeat center center / cover;
                        ${props.sx}
                    `
                    }
                />
            }
        >
            <Stack
                ref={props.ref}
                center
                sx={
                    /* css */ `
                    height: ${props.height};
                    position: absolute;
                    left: 0;
                    top: 0;
                    z-index: -99;
                    ${props.sx}
                `
                }
            >
                {props.children}
            </Stack>
        </Show>
    );
};
