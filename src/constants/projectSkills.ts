import { type ProjectSkills } from '@/types';
import { colors } from '@/constants/colors';

export const projectSkills: ProjectSkills = {
    blueMosaic: {
        skills: [
            { text: 'Vite', color: colors.pink },
            { text: 'Typescript', color: colors.pink },
            { text: 'Zustand', color: colors.pink },
            { text: 'Emotion', color: colors.pink },
            { text: 'React', color: colors.blue },
            { text: 'Figma', color: colors.yellow },
        ],
        roles: [{ text: 'FE', color: 'blue' }],
    },
    tadaktadak: {
        skills: [
            { text: 'Vite', color: 'pink' },
            { text: 'Typescript', color: 'pink' },
            { text: 'Zustand', color: 'pink' },
            { text: 'Emotion', color: 'pink' },
            { text: 'React', color: 'blue' },
            { text: 'Figma', color: 'yellow' },
        ],
        roles: [{ text: 'FE', color: 'blue' }],
    },
};
