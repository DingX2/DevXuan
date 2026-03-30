import { render } from 'solid-js/web';
import { QueryClientProvider, QueryClient } from '@tanstack/solid-query';
import { Router } from './Router';
import '@/styles/tokens/token.css';
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
