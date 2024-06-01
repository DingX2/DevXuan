import type { Component } from 'solid-js';
import { Stack, Text, Box, Button } from '@/components/atoms';
import { Nav } from '@/components/molecules';
import { BlogCard } from '@/components/organisms';
import { backgrounds } from '@/constants';

export const BlogTemplate: Component = () => {
    return (
        <Stack sx={backgrounds.white}>
            <Nav useBox />

            <Stack direction="column" position="relative" useFlexGap spacing={10} center sx="padding: 3rem;">
                <Stack direction="row" alignItemCenter>
                    <Box width="fit-content" backgroundColor="#fff" padding="0.5rem 1rem">
                        <Text fontSize="16px">🔎 글목록</Text>
                    </Box>
                    <Button backgroundColor="#000" color="#fff" fontSize={12} width="100px" height="24px">
                        + 작성
                    </Button>
                </Stack>
                <Text fontSize="14px">💡 문제 해결 블로그를 지향해요</Text>
                <Box width="80%" height="1px" sx="border: dashed #f5f5f5;" />

                <Stack direction="row" useFlexGap spacing={10} sx="flex-wrap: wrap;">
                    <BlogCard title="title" subtitle="subtitle" writeDate="2024-06-01" image="/image/touch.svg" />{' '}
                    <BlogCard title="title" subtitle="subtitle" writeDate="2024-06-01" image="/image/dandelion.svg" />
                    <BlogCard title="title" subtitle="subtitle" writeDate="2024-06-01" image="/image/veranda.svg" />
                    <BlogCard title="title" subtitle="subtitle" writeDate="2024-06-01" image="/image/touch.svg" />
                </Stack>
            </Stack>
        </Stack>
    );
};
