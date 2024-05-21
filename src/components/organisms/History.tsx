import type { ParentComponent } from 'solid-js';
import { List } from '@/components/atoms';
import { HistoryCard } from './HistoryCard';

export const History: ParentComponent = () => {
    return (
        <List>
            <HistoryCard
                title="BlueMosaic"
                subtitle="Gemini API / 이미지 인식 컬렉션 서비스"
                content="#1인FE개발 #zustand+swagger API객체리터럴최적화 #GDSC Solution Challenge 출품작"
            />
            <HistoryCard title="" subtitle="" content="" />
        </List>
    );
};
