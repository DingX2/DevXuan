import type { ParentComponent } from 'solid-js';
import { Image, Box, Text, Stack, Link } from '@/components/atoms';
import { Card, Speech } from '@/components/molecules';

interface Props {
    title: string;
    subtitle: string;
    content: string;
    link?: string;
}

export const HistoryCard: ParentComponent<Props> = ({ children, title, subtitle, content, link }) => {
    return (
        <Stack direction="row" alignItemCenter useFlexGap spacing={10}>
            <Image src="/image/typescript_logo.svg" width={50} height={50} />
            <Box width="630px" backgroundColor="#eee" direction="column" useFlexGap spacing={5} padding="1rem">
                <Speech>프로젝트</Speech>
                <Text fontSize="18px">{subtitle}</Text>
                <Text fontSize="22px">{title}</Text>
                <Text color="#666">{content}</Text>
                <Link href="/noting" target="_blank">
                    {link}
                </Link>
                {children}
            </Box>
            <Card width={40} shadow middle padding="25px 24px 0">
                <Stack direction="column" useFlexGap spacing={10}>
                    <Text fontSize="18px">{subtitle}</Text>
                    <Text fontSize="22px">{title}</Text>
                    <Text color="#666">{content}</Text>
                    <Box>
                        <Image src="/image/typescript_logo.svg" height="166px" sx="margin: 0 -24px;" />
                    </Box>
                </Stack>
            </Card>
        </Stack>
    );
};
