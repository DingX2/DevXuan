import { type Skill } from '@/types';

export const getCategoryIndex = (skills: { [key: string]: Skill[] }[]) => {
    const array: [number, number][] = [];
    let startIndex = 0;

    skills.forEach((skillCategory) => {
        Object.entries(skillCategory).forEach(([, items]) => {
            const { length } = items;
            const endIndex = startIndex + length - 1;
            array.push([startIndex, endIndex]);
            startIndex += length;
        });
    });

    return array;
};
