import type { ParentComponent } from 'solid-js';
import { GlobalStyle } from '@/components/commons';
import { Nav } from '@/components/molecules';
import { Header, Footer } from '@/components/organisms';

export const Layout: ParentComponent = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
            <Footer />
            <Nav mobile />
        </>
    );
};
