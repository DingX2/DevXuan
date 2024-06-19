import { type Component, For } from 'solid-js';
import { Box, Stack } from '@/components/atoms';
import { makeArray } from '@/utils';

export const Skeleton: Component = () => {
    return (
        <Stack direction="row" useFlexGap spacing={10} sx="flex-wrap: wrap;">
            <For each={makeArray(10)}>{() => <Box type="grayBox" width="300px" height="97px" />}</For>
        </Stack>
    );
};
