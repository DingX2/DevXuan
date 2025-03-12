import type { ParentComponent } from 'solid-js';
import { Text, Box, Image, Link } from '@/components/atoms';

interface Props {
    content: string;
    projectImage?: string;
    link?: string;
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
                <Link href={props.link} target="_blank">
                    {props.link}
                </Link>
            )}
            {props.children}
        </>
    );
};
