import type { Component } from 'solid-js';
import { Box, Stack, Text } from '@/components/atoms';

interface Props {
    category: string;
    title: string;
    duration: string;
    content: string;
    show: boolean;
    handleClick: () => void;
}

export const CategoryCard: Component<Props> = (props) => {
    return (
        <Box backgroundColor="#fff" padding="1rem" pointer height="fit-content">
            <Stack direction="column" center useFlexGap spacing={10}>
                <Box backgroundColor="#eee" width="fit-content" padding="0.5rem 1rem;">
                    <Text>{props.category}</Text>
                </Box>
                <Text bold>{props.title}</Text>
                <Text fontSize="12px">📅 {props.duration}</Text>
                <Text fontSize="14px;" color="#666">
                    💡 {props.content}
                </Text>
            </Stack>
        </Box>
    );
};
