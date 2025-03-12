import { type ParentComponent, For } from 'solid-js';
import { Text, Box, Image, Link, Stack } from '@/components/atoms';

interface Props {
    content: string;
    projectImage?: string;
    link?: { label: string; url: string }[];
}

export const CardContent: ParentComponent<Props> = (props) => {
    return (
        <>
            <Text fontSize="0.875rem;" color="#666">
                {props.content}
            </Text>
            {props.projectImage && (
                <Box>
                    <Image
                        src={props.projectImage}
                        height="auto"
                        sx="margin: 0 -24px; max-width: 100%; max-height: 500px; object-fit:contain;"
                    />
                </Box>
            )}

            {props.link && (
                <Stack direction="column" center>
                    <For each={props.link}>
                        {(link) => (
                            <Stack direction="row" alignItemCenter spacing={-10}>
                                <Text fontSize="0.875rem;" color="#666">
                                    {link.label}
                                </Text>
                                <Link href={link.url} target="_blank">
                                    {link.url}
                                </Link>
                            </Stack>
                        )}
                    </For>
                </Stack>
            )}
            {props.children}
        </>
    );
};
