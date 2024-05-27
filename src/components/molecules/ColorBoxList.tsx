import { type ParentComponent, For } from 'solid-js';
import { type TextWithColor, type Style } from '@/types';
import { Stack, Box, Text } from '@/components/atoms';

interface Props extends Style {
    textwithcolors: TextWithColor[];
}

export const ColorBoxList: ParentComponent<Props> = (props) => {
    return (
        <Stack direction="row" useFlexGap spacing={6} center sx={'flex-wrap: wrap;'}>
            <For each={props.textwithcolors}>
                {({ text, color }) => (
                    <Box width="fit-content" padding="0.25rem 0.5rem;" sx="border-radius: 5px;" backgroundColor={color}>
                        <Text>{text}</Text>
                    </Box>
                )}
            </For>
            {props.children}
        </Stack>
    );
};
