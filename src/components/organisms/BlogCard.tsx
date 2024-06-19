import { type ParentComponent } from 'solid-js';
import { Box, Text, Stack, Image } from '@/components/atoms';

interface Props {
    id: number;
    title: string;
    subtitle: string;
    writeDate: string;
    image?: string;
}

export const BlogCard: ParentComponent<Props> = (props) => {
    return (
        <Box width="300px" type="whiteBox" pointer padding="0.5rem 1rem" sx="border: dashed #f5f5f5;">
            <Stack direction="column" useFlexGap spacing={8}>
                <Text>{props.title}</Text>
                <Text fontSize="0.875rem">{props.subtitle}</Text>
                <Text fontSize="0.75rem">📅 {props.writeDate}</Text>
                <Image src={props.image} />
            </Stack>
        </Box>
    );
};
