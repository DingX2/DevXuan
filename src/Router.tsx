import type { VoidComponent } from 'solid-js';
import { Router as SolidRouter, Route } from '@solidjs/router';
import { Home, NotFound, About, Skill, Work, Blog, Test, BlogCreate, BlogPage, Career } from '@/pages';
import { Layout } from './Layout';

export const Router: VoidComponent = () => {
    return (
        <SolidRouter root={Layout}>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/skill" component={Skill} />
            <Route path="/work" component={Work} />
            <Route path="/career" component={Career} />
            <Route path="/blog" component={Blog} />
            <Route path={`/blog/:id`} component={BlogPage} />
            <Route path="/blog/create" component={BlogCreate} />
            <Route path="/test" component={Test} />
            <Route path="/*" component={NotFound} />
        </SolidRouter>
    );
};
