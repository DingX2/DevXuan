import type { ParentComponent } from 'solid-js';
import { List, Stack } from '@/components/atoms';
// import { projectSkills } from '@/constants';
// import { HistoryCard } from './HistoryCard';

export const History: ParentComponent = () => {
    return (
        <List>
            <Stack direction="column" useFlexGap spacing={10}>
                {/* <HistoryCard
                    title="BlueMosaic"
                    subtitle="Gemini API / 이미지 인식 컬렉션 서비스"
                    skills={projectSkills.blueMosaic.skills}
                    content="#1인FE개발 #zustand+swagger API객체리터럴최적화 #GDSC Solution Challenge 출품작"
                    projectImage="/image/projects/bluemosaic.png"
                    projectDuration="2024-01-22 ~ 2024-02-26"
                    extracurricular={true}
                    extraTitle={`Google Developer Social Clubs\n(GDSC) 3기`}
                    extraContent="프로젝트와 세미나 위주로 진행했어요"
                    extraDuration="2023-08 ~ 2024-09"
                >
                    detail ...
                </HistoryCard> */}
            </Stack>
        </List>
    );
};
