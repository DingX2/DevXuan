import { type Component, Suspense } from 'solid-js';
import { BlogTemplate } from '@/components/templates';
import { useGetPost } from '@/hooks/apis';
import { Skeleton } from '@/components/molecules/Skeleton';

export const Blog: Component = () => {
    const datas = useGetPost();

    return (
        <>
            <Skeleton />
            <Suspense fallback={<Skeleton />}>
                <BlogTemplate data={datas.data || []} />
            </Suspense>
        </>
    );
};
