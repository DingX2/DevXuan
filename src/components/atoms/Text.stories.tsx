import type { Meta, StoryObj } from 'storybook-solidjs-vite';
import { For } from 'solid-js';
import { Text } from './Text';

const colorExamples = [
    { role: 'primary', label: '기본 본문' },
    { role: 'secondary', label: '보조 텍스트' },
    { role: 'tertiary', label: '더 약한 설명' },
    { role: 'brand', label: '브랜드 강조 텍스트' },
    { role: 'danger', label: '에러/위험 텍스트' },
    { role: 'success', label: '성공 텍스트' },
    { role: 'warning', label: '주의 텍스트' },
] as const;

const tokenPreviewStyle = {
    '--color-text-primary': '#111827',
    '--color-text-secondary': '#4b5563',
    '--color-text-tertiary': '#6b7280',
    '--color-text-inverse': '#f9fafb',
    '--color-text-brand': '#1d4ed8',
    '--color-text-danger': '#dc2626',
    '--color-text-success': '#16a34a',
    '--color-text-warning': '#d97706',
    width: '100%',
};

const meta = {
    title: 'Design System/Atoms/Text',
    component: Text,
    tags: ['autodocs'],
    args: {
        children: '텍스트',
        color: 'primary',
        fontSize: '1rem',
    },
    argTypes: {
        color: {
            control: 'select',
            options: ['primary', 'secondary', 'tertiary', 'inverse', 'brand', 'danger', 'success', 'warning'],
        },
    },
    parameters: {
        docs: {
            description: {
                component: 'Text 컬러 토큰 스토리. 디자인시스템 텍스트 역할별 색상을 확인할 수 있습니다.',
            },
        },
    },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
    render: (args) => (
        <div style={tokenPreviewStyle}>
            <Text {...args}>{args.children}</Text>
        </div>
    ),
};

export const ColorRoles: Story = {
    render: () => (
        <div style={{ ...tokenPreviewStyle, display: 'grid', gap: '0.75rem' }}>
            <For each={colorExamples}>{(item) => <Text color={item.role}>{item.label}</Text>}</For>

            <div style={{ background: '#111827', padding: '0.75rem 0.9rem', 'border-radius': '8px' }}>
                <Text color="inverse">어두운 배경 위 텍스트</Text>
            </div>
        </div>
    ),
};
