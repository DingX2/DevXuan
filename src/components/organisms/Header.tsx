import type { Component } from 'solid-js';
import { Sidebar } from './Sidebar';

export const Header: Component = () => {
    return (
        <header>
            <Sidebar />
        </header>
    );
};
