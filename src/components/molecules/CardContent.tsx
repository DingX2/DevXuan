import type { ParentComponent } from 'solid-js';
import { Text, Box, Image, Link } from '@/components/atoms';

interface Props {
    content: string;
    projectImage?: string;
    link?: string;
}

export const CardContent: ParentComponent<Props> = ({ content, projectImage, link, children }) => {
    return (
        <>
            <Text fontSize="14px;" color="#666">
                {content}
            </Text>
            {projectImage && (
                <Box>
                    <Image src={projectImage} height="166px" sx="margin: 0 -24px;" />
                </Box>
            )}
            {link && (
                <Link href={link} target="_blank">
                    {link}
                </Link>
            )}
            s{children}
        </>
    );
};
