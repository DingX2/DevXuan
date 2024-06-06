import { type Component, createEffect, createSignal } from 'solid-js';
import axios from 'axios';
import { Stack } from '@/components/atoms';
import { BlogList } from '@/components/organisms';
import type { Blog } from '@/types';

export const BlogListTemplate: Component = () => {
    const [data, setData] = createSignal<Blog | undefined>(undefined);

    const fetchData = async () => {
        try {
            const res = await axios.get<Blog>(`${import.meta.env.VITE_BASE_URL}/api/post`);
            setData(res.data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    createEffect(() => {
        fetchData().then(
            () => {},
            () => {},
        );
    });

    return (
        <Stack>
            {data() ? (
                <BlogList
                    id={data()!.id}
                    title={data()!.title}
                    subtitle={data()!.subtitle}
                    content={data()!.content}
                    writeDate={data()!.writeDate}
                    image={data()!.image}
                />
            ) : (
                <p>Loading...</p>
            )}
        </Stack>
    );
};
