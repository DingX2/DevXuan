import type { ParentComponent } from 'solid-js';
import { GlobalStyle } from '@/components/common';
import { Header, Footer } from '@/components/organisms';

export const Layout: ParentComponent = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};
