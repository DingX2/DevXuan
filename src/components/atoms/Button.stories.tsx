import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { Button } from './Button';

const meta = {
    title: 'Design System/Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    args: {
        children: 'Button',
        variant: 'primary',
        width: '220px',
    },
    argTypes: {
        variant: {
            control: 'inline-radio',
            options: ['primary', 'secondary'],
        },
        icon: {
            control: 'text',
            description: 'public 기준 경로 (예: /image/skills/github_logo.svg)',
        },
        sx: {
            control: 'text',
            description: '추가 CSS 문자열',
        },
    },
    parameters: {
        docs: {
            description: {
                component:
                    '디자인시스템 버튼 컴포넌트. variant로 기본 토큰 스타일을 선택하고, width/height/color/sx로 화면 컨텍스트에 맞춰 확장합니다.',
            },
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
        width: '240px',
    },
};

export const Secondary: Story = {
    render: (args) => <Button {...args}>{args.children}</Button>,
    args: {
        variant: 'secondary',
        children: <span>Secondary Button</span>,
        width: '240px',
        height: '46px',
    },
};

export const IconOnly: Story = {
    args: {
        icon: '/image/skills/github_logo.svg',
        variant: undefined,
        width: '24px',
        height: '24px',
        children: undefined,
    },
};

export const CustomToken: Story = {
    args: {
        variant: undefined,
        children: 'Custom Token',
        width: '240px',
        height: '44px',
        color: '#ffffff',
        backgroundColor: '#0f766e',
        sx: `
            border: none;
            border-radius: 10px;
            font-weight: 700;
            letter-spacing: 0.02em;
            box-shadow: 0 10px 22px rgba(15, 118, 110, 0.25);
        `,
    },
};
