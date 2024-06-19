import { type Component, createSignal, Suspense, Switch, Match } from 'solid-js';
import { BlogTemplate } from '@/components/templates';
import { useHello, useGetPost } from '@/hooks/apis';

export const BlogTest: Component = () => {
    const [string] = createSignal<string>('');

    const query = useHello();
    const datas = useGetPost();

    return (
        <>
            <Switch>
                <Match when={query.isPending}>
                    <p>Loading...</p>
                </Match>
                <Match when={query.isError}>
                    <p>Error: {query.error?.message || 'error'}</p>
                </Match>
                <Match when={query.isSuccess}>
                    <div>{query.data?.message || 'default'}</div>
                </Match>
            </Switch>
            <p>
                Hello : {string()} {query.data?.message || 'hi'}
            </p>
            <Suspense fallback={'Loading...'}>
                <div>{query.data?.message}</div>
            </Suspense>
            <Suspense fallback={'Loading posts...'}>
                <BlogTemplate data={datas.data || []} />
            </Suspense>
        </>
    );
};
