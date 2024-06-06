import { type Component, createEffect, createSignal, For } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import axios from 'axios';
import { Stack, Text, Box, Button } from '@/components/atoms';
import { Nav } from '@/components/molecules';
import { BlogCard } from '@/components/organisms';
import { type Blog } from '@/types';
import { backgrounds, mobileHome } from '@/constants';

export const BlogTemplate: Component = () => {
    const navigate = useNavigate();
    const [data, setData] = createSignal<Blog[]>();

    const handleClick = () => {
        navigate('/blog/create');
    };

    createEffect(() => {
        axios
            .get<Blog[]>('http://localhost:3000/api/posts')
            .then((response) => setData<Blog[]>(response.data))
            .catch((error) => console.error('Error fetching posts:', error));
    });

    return (
        <Stack sx={backgrounds.white}>
            <Nav useBox sx={mobileHome.mobileHidden} />

            <Stack direction="column" position="relative" useFlexGap spacing={10} center sx="padding: 3rem;">
                <Stack direction="row" alignItemCenter>
                    <Box width="fit-content" backgroundColor="#fff" padding="0.5rem 1rem" sx="margin-right: 1rem;">
                        <Text fontSize="16px">🔎 글목록</Text>
                    </Box>
                    <Button
                        backgroundColor="#000"
                        color="#fff"
                        fontSize={12}
                        width="100px"
                        height="24px"
                        onClick={handleClick}
                    >
                        + 작성
                    </Button>
                </Stack>
                <Text fontSize="14px">💡 문제 해결 블로그를 지향해요</Text>
                <Box width="80%" height="1px" sx="border: dashed #f5f5f5;" />

                <Stack direction="row" useFlexGap spacing={10} sx="flex-wrap: wrap;">
                    <For each={data()}>
                        {(item) => (
                            <BlogCard
                                id={item.id}
                                title={item.title}
                                subtitle={item.subtitle}
                                writeDate={item.writeDate}
                                image={item.image}
                            />
                        )}
                    </For>
                </Stack>
            </Stack>
        </Stack>
    );
};
