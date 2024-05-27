import type { ParentComponent } from 'solid-js';
import { Text } from '@/components/atoms';
import type { TextWithColor } from '@/types';
import { Speech } from './Speech';
import { ColorBoxList } from './ColorBoxList';

interface Props {
    category: string;
    subtitle: string;
    title: string;
    duration: string;
    skills: TextWithColor[];
}

export const CardHeader: ParentComponent<Props> = ({ category, subtitle, title, duration, skills, children }) => {
    return (
        <>
            <Speech>{category}</Speech>
            <Text fontSize="16px">{subtitle}</Text>
            <Text fontSize="18px" bold>
                {title}
            </Text>
            <Text fontSize="12px">📅 {duration}</Text>
            <ColorBoxList textwithcolors={skills} />
            {children}
        </>
    );
};
