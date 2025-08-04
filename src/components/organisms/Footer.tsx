import type { Component } from 'solid-js';
import { Text, Stack } from '@/components/atoms';

export const Footer: Component = () => {
    return (
        <footer
            style={{
                position: 'relative',
                'z-index': 10,
                'margin-top': '8rem',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))',
                'backdrop-filter': 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                'border-radius': '20px 20px 0 0',
                padding: '3rem 1rem 2rem',
                'box-shadow': '0 -4px 20px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* 상단 글로우 효과 */}
            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '200px',
                    height: '2px',
                    background: 'linear-gradient(90deg, transparent, rgba(102, 126, 234, 0.6), transparent)',
                    'border-radius': '2px',
                }}
            />

            <Stack direction="column" center useFlexGap spacing={16}>
                <Stack
                    direction="row"
                    center
                    alignItemCenter
                    spacing={20}
                    useFlexGap
                    sx="flex-wrap: wrap; justify-content: center;"
                >
                    <a
                        href="https://github.com/DingX2/DevXuan"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            color: '#667eea',
                            'text-decoration': 'none',
                            'font-weight': '600',
                            'font-size': '0.95rem',
                            padding: '0.5rem 1rem',
                            'border-radius': '20px',
                            background: 'rgba(102, 126, 234, 0.1)',
                            border: '1px solid rgba(102, 126, 234, 0.2)',
                            transition: 'all 0.3s ease',
                            'text-shadow': '0 1px 2px rgba(255,255,255,0.6)',
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(102, 126, 234, 0.2)';
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.3)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'rgba(102, 126, 234, 0.1)';
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        MIT License
                    </a>

                    <Text
                        textAlign="center"
                        sx="color: #4a5568; font-weight: 600; font-size: 0.95rem; text-shadow: 0 1px 2px rgba(255,255,255,0.6);"
                    >
                        SooHyeon Lee © 2024
                    </Text>
                </Stack>

                <div
                    style={{
                        width: '100%',
                        height: '1px',
                        background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
                    }}
                />

                <Text
                    textAlign="center"
                    sx="color: #718096; font-size: 0.85rem; text-shadow: 0 1px 1px rgba(255,255,255,0.5);"
                >
                    Design Source: freepik
                </Text>
            </Stack>

            <style>
                {`
                    @keyframes pulse {
                        0%, 100% { opacity: 0.3; transform: scale(1); }
                        50% { opacity: 1; transform: scale(1.2); }
                    }
                `}
            </style>
        </footer>
    );
};
