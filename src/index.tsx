import { render } from 'solid-js/web';
import { QueryClientProvider, QueryClient } from '@tanstack/solid-query';
import { Router } from './Router';
import './normalize.css';

const queryClient = new QueryClient();

render(
    () => (
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
    ),
    document.getElementById('root')!,
);
