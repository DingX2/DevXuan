import type { Component } from 'solid-js';
import { Menu, Logo, Stack } from '@/components/atoms';

export const Sidebar: Component = () => {
    return (
        <Stack direction="row">
            <Logo />
            <Stack direction="row" spacing="40" useFlexGap>
                <Menu href="/about">About</Menu>
                <Menu href="/skill">Skill</Menu>
                <Menu href="/work">Work</Menu>
                <Menu href="/contact">Contact</Menu>
            </Stack>
        </Stack>
    );
};
