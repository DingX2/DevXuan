import { type ParentComponent, createSignal } from 'solid-js';
import { Motion } from 'solid-motionone';
import { Image, Box, Text, Stack, Link } from '@/components/atoms';
import { Speech } from '@/components/molecules';

interface Props {
    title: string;
    subtitle: string;
    projectDuration: string;
    content: string;
    link?: string;
    extracurricular: boolean;
    extraTitle?: string;
    extraDuration?: string;
    extraContent?: string;
}

export const HistoryCard: ParentComponent<Props> = ({
    children,
    title,
    subtitle,
    projectDuration,
    content,
    link,
    extracurricular,
    extraTitle,
    extraDuration,
    extraContent,
}) => {
    const [showDetails, setShowDetails] = createSignal(false);

    const handleClick = () => {
        console.log('click', showDetails());
        setShowDetails(!showDetails());
    };

    return (
        <Stack direction="row" alignItemCenter useFlexGap spacing={10}>
            {extracurricular && showDetails() ? (
                <Box width="300px" backgroundColor="#fff" padding="1rem">
                    <Stack direction="column" center useFlexGap spacing={10}>
                        <Box backgroundColor="#eee" width="fit-content" padding="0.5rem 1rem;">
                            <Text>✨ 대외활동</Text>
                        </Box>
                        <Text bold>{extraTitle}</Text>
                        <Text>📅 {extraDuration}</Text>
                        <Text>💡 {extraContent}</Text>
                    </Stack>
                </Box>
            ) : (
                ''
            )}
            {/* <Card width={40} shadow middle padding="25px 24px 0">
                <Stack direction="column" useFlexGap spacing={10}>
                    <Text fontSize="18px">{subtitle}</Text>
                    <Text fontSize="22px">{title}</Text>
                    <Text color="#666">{content}</Text>
                    <Box>
                        <Image src="/image/typescript_logo.svg" height="166px" sx="margin: 0 -24px;" />
                    </Box>
                </Stack>
            </Card> */}
            <Image src="/image/dandelion.svg" width={100} height={100} />
            {showDetails() ? (
                <Motion
                    initial={{ opacity: 0, y: 50, scale: 1 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
                    transition={{ duration: 0.25, easing: 'ease-out' }}
                    exit={{ opacity: 0, y: -50, scale: 1 }}
                >
                    <Box
                        width="100%"
                        backgroundColor="#fff"
                        direction="column"
                        useFlexGap
                        spacing={5}
                        padding="1rem"
                        pointer
                        onClick={handleClick}
                    >
                        <Speech>프로젝트</Speech>
                        <Text fontSize="16px">{subtitle}</Text>
                        <Text fontSize="18px" bold>
                            {title}
                        </Text>
                        <Text fontSize="12px">📅 {projectDuration}</Text>
                        <Text color="#666">{content}</Text>
                        {link && (
                            <Link href={link} target="_blank">
                                {link}
                            </Link>
                        )}
                        {children}
                    </Box>
                </Motion>
            ) : (
                <Box
                    width="630px"
                    backgroundColor="#fff"
                    direction="column"
                    useFlexGap
                    spacing={5}
                    padding="1rem"
                    pointer
                    onClick={handleClick}
                >
                    <Speech>자세히보기</Speech>
                    <Text fontSize="16px">{subtitle}</Text>
                    <Text fontSize="18px" bold>
                        {title}
                    </Text>
                    <Text fontSize="12px">📅 {projectDuration}</Text>
                    <Text color="#666">{content}</Text>
                    {link && (
                        <Link href={link} target="_blank">
                            {link}
                        </Link>
                    )}
                    {children}
                </Box>
            )}
        </Stack>
    );
};
