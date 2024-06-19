import { type ParentComponent } from 'solid-js';
import { Stack } from '@/components/atoms';
import { BlogList } from '@/components/organisms';
import type { Blog } from '@/types';

interface Props {
    data: Blog[];
}

export const BlogListTemplate: ParentComponent<Props> = ({ data }) => {
    return (
        <Stack>
            {data.length > 0 ? (
                data.map((blog) => (
                    <BlogList
                        id={blog.id}
                        title={blog.title}
                        subtitle={blog.subtitle}
                        content={blog.content}
                        writeDate={blog.writeDate}
                        image={blog.image}
                    />
                ))
            ) : (
                <p>Loading...</p>
            )}
        </Stack>
    );
};
