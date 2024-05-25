import type { Component } from 'solid-js';
import { Logo } from '@/components/atoms';

interface Link {
    href: string;
    Child: string | Component<{ fill?: string }>;
}

export const links: Link[] = [
    { href: '/', Child: Logo },
    { href: '/about', Child: '자기소개' },
    { href: '/skill', Child: '기술 스택' },
    { href: '/work', Child: '경력' },
    { href: '/blog', Child: '블로그' },
];
