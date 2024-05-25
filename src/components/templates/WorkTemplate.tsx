import type { Component } from 'solid-js';
import { Stack, Text } from '@/components/atoms';
import { Background } from '@/components/molecules';
import { History } from '@/components/organisms';
import { backgrounds } from '@/constants';

export const WorkTemplate: Component = () => {
    return (
        <>
            <Background height="100" select sx={backgrounds.grid} />
            <Stack direction="column" useFlexGap spacing={10} center sx="padding: 2rem;">
                <Text fontSize="20px">경력</Text>
                <History />
            </Stack>
        </>
    );
};
