import { type Component, createMemo, For, Show } from 'solid-js';
import { useLocation } from '@solidjs/router';
import { Link, Stack, Box } from '@/components/atoms';
import { links, mobileHome } from '@/constants';

interface Props {
    useAbsolute?: boolean;
    useBox?: boolean;
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
            <Show when={!props.useBox}>
                <Stack
                    direction="row"
                    spacing="30"
                    useFlexGap
                    center
                    sx={`position: ${props.useAbsolute ? 'absolute' : 'relative'}; top: 0; z-index: 99; ${mobileHome.mobile}`}
                >
                    <NavLinks />
                </Stack>
            </Show>
            <Show when={props.useBox}>
                <Stack sx="align-items: center;">
                    <Box
                        width="70%"
                        height="40px"
                        padding="1rem"
                        useFlexGap
                        spacing={30}
                        backgroundColor="#fff"
                        sx={`position: relative; align-items: center; margin-top: 2rem; top: 0; z-index: 99; ${mobileHome.mobile} ${mobileHome.tablet}`}
                    >
                        <NavLinks />
                    </Box>
                </Stack>
            </Show>
        </>
    );
};
