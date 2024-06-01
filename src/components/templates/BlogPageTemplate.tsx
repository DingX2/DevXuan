import { type Component, createEffect, createSignal } from 'solid-js';
import axios from 'axios';
import { Stack } from '@/components/atoms';
import { BlogPage } from '@/components/organisms';
import type { Blog } from '@/types';

export const BlogPageTemplate: Component = () => {
    const [data, setData] = createSignal<Blog | undefined>(undefined);

    const fetchData = async () => {
        try {
            const res = await axios.get<Blog>('/api/posts');
            setData(res.data);
        } catch (error) {
            console.error('Error fetching blog data:', error);
        }
    };

    createEffect(() => {
        fetchData()
            .then(() => {
                // Promise resolved
            })
            .catch((error) => {
                console.error('Error in createEffect:', error);
            });
    });

    return (
        <Stack>
            {data() ? (
                <BlogPage
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
