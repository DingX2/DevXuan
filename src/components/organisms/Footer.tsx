import type { Component } from 'solid-js';
import { Text, Stack, Link } from '@/components/atoms';

export const Footer: Component = () => {
    return (
        <Stack direction="column" sx="position: relative; z-index: 10;">
            <Stack direction="row" center alignItemCenter spacing={10}>
                <Link href="https://github.com/DingX2/DevXuan" target="_blank">
                    {'MIT License'}
                </Link>
                <Text textAlign="center">SooHyeon Lee © 2024</Text>
            </Stack>
            <Text textAlign="center">Design Source: freepik</Text>
        </Stack>
    );
};
