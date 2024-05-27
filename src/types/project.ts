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
