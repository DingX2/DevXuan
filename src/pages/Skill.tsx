import type { Component } from 'solid-js';
import { Nav } from '@/components/molecules';
import { SkillTemplate } from '@/components/templates';

export const Skill: Component = () => {
    return (
        <>
            <Nav />
            <SkillTemplate />
        </>
    );
};
