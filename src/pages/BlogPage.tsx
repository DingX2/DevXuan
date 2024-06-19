import { type Component, Suspense } from 'solid-js';
import { BlogListTemplate } from '@/components/templates/BlogListTemplate';
import { useGetPost } from '@/hooks/apis';

export const BlogPage: Component = () => {
    const blogList = useGetPost();

    return (
        <Suspense fallback="isLoading...">
            <BlogListTemplate data={blogList.data || []} />;
        </Suspense>
    );
};
