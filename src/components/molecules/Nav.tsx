import { type Component, createMemo, For } from 'solid-js';
import { useLocation } from '@solidjs/router';
import { Link, Stack } from '@/components/atoms';
import { links } from '@/constants/links';

export const Nav: Component = () => {
    const location = useLocation();
    const currentLocation = createMemo(() => location.pathname);

    return (
        <Stack direction="row" spacing="40" useFlexGap center>
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
        </Stack>
    );
};
