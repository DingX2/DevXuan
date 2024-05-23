import type { Component } from 'solid-js';
import { Text, Stack, Link } from '@/components/atoms';

export const Footer: Component = () => {
    return (
        <Stack direction="column">
            <Stack direction="row" center alignItemCenter spacing={10}>
                <Link href="http://localhost:5173/contact" target="_blank">
                    {'MIT License'}
                </Link>
                <Text textAlign="center">SooHyeon Lee © 2024</Text>
            </Stack>
            <Text textAlign="center">Design Source: freepik</Text>
        </Stack>
    );
};
