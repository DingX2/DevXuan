import type { Component } from 'solid-js';
import { Link, Logo, Stack } from '@/components/atoms';

export const Nav: Component = () => {
    return (
        <Stack direction="row" spacing="40" useFlexGap center>
            <Link href="/" target="_self">
                <Logo />
            </Link>
            <Link href="/about" target="_self">
                About
            </Link>
            <Link href="/skill" target="_self">
                Skill
            </Link>
            <Link href="/work" target="_self">
                Work
            </Link>
            <Link href="/contact" target="_self">
                Contact
            </Link>
        </Stack>
    );
};
