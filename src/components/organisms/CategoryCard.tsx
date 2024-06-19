import type { Component } from 'solid-js';
import { Box, Stack, Text } from '@/components/atoms';

interface Props {
    category: string;
    organization: string;
    title: string | null;
    duration: string;
    content: string;
    show: boolean;
    handleClick: () => void;
}

export const CategoryCard: Component<Props> = (props) => {
    return (
        <Box type="whiteBox" pointer height="fit-content" sx="z-index: 20;">
            <Stack direction="column" center useFlexGap spacing={10}>
                <Box type="grayBox" fitContent>
                    <Text>{props.category}</Text>
                </Box>
                {props.title && <Text bold>{props.title}</Text>}
                <Text bold>{props.organization}</Text>
                <Text fontSize="0.8rem">📅 {props.duration}</Text>
                <Text fontSize="0.8rem;" color="#666">
                    💡 {props.content}
                </Text>
            </Stack>
        </Box>
    );
};
