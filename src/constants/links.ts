import type { Component } from 'solid-js';
import { Logo } from '@/components/atoms';

interface Link {
    href: string;
    Child: string | Component<{ fill?: string }>;
}

export const links: Link[] = [
    { href: '/', Child: Logo },
    { href: '/about', Child: 'About' },
    { href: '/skill', Child: 'Skill' },
    { href: '/work', Child: 'Work' },
    { href: '/contact', Child: 'Contact' },
];
