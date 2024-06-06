import { type Component, createMemo, For, Show } from 'solid-js';
import { useLocation } from '@solidjs/router';
import { Link, Stack, Box } from '@/components/atoms';
import { links, mobileHome } from '@/constants';
import { type Style } from '@/types';

interface Props extends Style {
    useAbsolute?: boolean;
    useBox?: boolean;
    mobile?: boolean;
    hidden?: boolean;
}

const NavLinks: Component = () => {
    const location = useLocation();
    const currentLocation = createMemo(() => location.pathname);

    return (
        <For each={links}>
            {({ href, Child }) => (
                <Link href={href} target="_self" classList={{ active: currentLocation() === href }}>
                    {typeof Child === 'string' ? (
                        Child
                    ) : (
                        <Child fill={currentLocation() === href ? '#748df2' : '#000'} />
                    )}
                </Link>
            )}
        </For>
    );
};

export const Nav: Component<Props> = (props) => {
    return (
        <>
            {!props.hidden && (
                <>
                    <Show when={!props.useBox && !props.mobile}>
                        <Stack
                            direction="row"
                            spacing="30"
                            useFlexGap
                            center
                            sx={`position: ${props.useAbsolute ? 'absolute' : 'relative'}; top: 0; z-index: 99; ${mobileHome.tablet} ${props.sx};`}
                        >
                            <NavLinks />
                        </Stack>
                    </Show>
                    <Show when={props.useBox && !props.mobile}>
                        <Stack sx="align-items: center;">
                            <Box
                                width="70%"
                                height="40px"
                                padding="1rem"
                                useFlexGap
                                spacing={30}
                                backgroundColor="#fff"
                                sx={`position: relative; align-items: center; margin-top: 2rem; top: 0; z-index: 99; ${mobileHome.mobile} ${mobileHome.tablet} ${props.sx}`}
                            >
                                <NavLinks />
                            </Box>
                        </Stack>
                    </Show>
                    <Show when={props.mobile}>
                        <Stack sx="align-items: center;">
                            <Box
                                width="100%"
                                height="40px"
                                padding="1rem"
                                backgroundColor="#fff"
                                sx={`display: flex; justify-content: space-around; position: fixed; bottom: 0; z-index: 99; ${mobileHome.mobileNav} ${props.sx}`}
                            >
                                <NavLinks />
                            </Box>
                        </Stack>
                    </Show>
                </>
            )}
        </>
    );
};
