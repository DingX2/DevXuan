import type { Component } from 'solid-js';
import { Nav } from '@/components/molecules';
import { WorkTemplate } from '@/components/templates';

export const Work: Component = () => {
    return (
        <>
            <Nav />
            <WorkTemplate />
        </>
    );
};
