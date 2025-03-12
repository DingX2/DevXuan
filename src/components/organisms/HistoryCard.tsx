import type { ParentComponent } from 'solid-js';
import type { DetailedProject, TextWithColor } from '@/types';
import { Box, Stack } from '@/components/atoms';
import { CardHeader, CardContent } from '@/components/molecules';
import { animation } from '@/utils';

interface Props extends Pick<DetailedProject, 'subtitle' | 'projectDuration' | 'hashtag' | 'projectImage' | 'link'> {
    title: string;
    skills: TextWithColor[];
    show: boolean;
    handleClick: () => void;
}

export const HistoryCard: ParentComponent<Props> = (props) => {
    return (
        <Stack direction="row" useFlexGap spacing={10} center>
            {props.show ? (
                <Box
                    type="whiteBox"
                    direction="column"
                    useFlexGap
                    spacing={5}
                    pointer
                    onClick={props.handleClick}
                    {...animation().pop}
                    sx="z-index: 20;"
                >
                    <CardHeader
                        category="프로젝트"
                        subtitle={props.subtitle}
                        title={props.title}
                        duration={props.projectDuration}
                        skills={props.skills}
                    />

                    <CardContent content={props.hashtag} projectImage={props.projectImage} link={props.link} />

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
                    sx="z-index: 20;"
                >
                    <CardHeader
                        category="자세히보기"
                        subtitle={props.subtitle}
                        title={props.title}
                        duration={props.projectDuration}
                        skills={props.skills}
                    />

                    <CardContent content={props.hashtag} projectImage={props.projectImage} link={props.link} />
                </Box>
            )}
        </Stack>
    );
};
