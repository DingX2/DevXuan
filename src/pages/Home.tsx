import type { Component } from 'solid-js';
import { EducationTemplate, HomeTemplate, SkillTemplate } from '@/components/templates';

export const Home: Component = () => {
    return (
        <>
            <HomeTemplate />
            <SkillTemplate />
            <EducationTemplate />
        </>
    );
};
