import type { ParentComponent } from 'solid-js';
import type { TextWithColor } from '@/types';
import { Box, Stack } from '@/components/atoms';
import { CardHeader, CardContent } from '@/components/molecules';

interface Props {
    title: string;
    subtitle: string;
    projectDuration: string;
    skills: TextWithColor[];
    content: string;
    projectImage?: string;
    link?: string;
    show: boolean;
    handleClick: () => void;
}

export const HistoryCard: ParentComponent<Props> = (props) => {
    return (
        <Stack direction="row" alignItemCenter useFlexGap spacing={10} center>
            {props.show ? (
                <Box
                    backgroundColor="#fff"
                    direction="column"
                    useFlexGap
                    spacing={5}
                    padding="1rem"
                    pointer
                    onClick={props.handleClick}
                    sx={`flex: 1;`}
                    initial={{ opacity: 0, y: 50, scale: 1 }}
                    animate={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
                    transition={{ duration: 0.25, easing: 'ease-out' }}
                    exit={{ opacity: 0, y: -50, scale: 1 }}
                >
                    <CardHeader
                        category="자세히보기"
                        subtitle={props.subtitle}
                        title={props.title}
                        duration={props.projectDuration}
                        skills={props.skills}
                    />

                    <CardContent content={props.content} projectImage={props.projectImage} link={props.link} />

                    {props.children}
                </Box>
            ) : (
                <Box
                    backgroundColor="#fff"
                    direction="column"
                    useFlexGap
                    spacing={5}
                    padding="1rem"
                    pointer
                    onClick={props.handleClick}
                >
                    <CardHeader
                        category="프로젝트"
                        subtitle={props.subtitle}
                        title={props.title}
                        duration={props.projectDuration}
                        skills={props.skills}
                    />

                    <CardContent content={props.content} projectImage={props.projectImage} link={props.link} />
                </Box>
            )}
        </Stack>
    );
};
