export interface TextWithColor {
    text: string;
    color: string;
}

export interface ProjectSkills {
    [key: string]: {
        skills: TextWithColor[];
        roles: TextWithColor[];
    };
}

export type ProjectItem = BaseProject | DetailedProject;

export interface ProjectListProps {
    projects: { [key: string]: ProjectItem };
}

export interface BaseProject {
    category: string;
    organizationTitle: string;
    organizationContent: string;
    organizationDuration: string;
    title: string | null;
    project: boolean;
}

export interface DetailedProject extends BaseProject {
    project: true;
    projectTitle: string;
    subtitle: string;
    hashtag: string;
    projectImage?: string;
    projectDuration: string;
    projectTeam: string;
    projectDetail: string[];
    link?: { label: string; url: string }[];
}
