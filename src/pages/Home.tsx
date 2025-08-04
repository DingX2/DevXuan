import type { Component } from 'solid-js';
import { EducationTemplate, HomeTemplate, SkillTemplate, CareerTemplate } from '@/components/templates';

export const Home: Component = () => {
    return (
        <>
            <HomeTemplate />
            <CareerTemplate />
            <SkillTemplate />
            <EducationTemplate />
        </>
    );
};
