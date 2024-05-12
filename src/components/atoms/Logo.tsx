import type { Component } from 'solid-js';
import home from '@/assets/home.svg';
import { name } from '@/package';
import { Image } from './Image';

interface Props {
    width?: string | number;
    height?: string | number;
}

export const Logo: Component<Props> = ({ width = 40, height = 30 }) => {
    return <Image src={home} width={width} height={height} alt={name} />;
};
