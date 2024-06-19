import type { ProjectItem, DetailedProject } from '@/types';

export const isDetailedProject = (project: ProjectItem): project is DetailedProject => {
    return project.project === true;
};
