import type { ParentComponent } from 'solid-js';
import { GlobalStyle } from '@/components/commons';
import { Nav } from '@/components/molecules';
import { Header, Footer } from '@/components/organisms';

export const Layout: ParentComponent = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <div style={{ display: 'flex', 'flex-direction': 'column', 'min-height': '100vh' }}>
                <Header />
                <main style={{ flex: '1' }}>{children}</main>
                <Footer />
            </div>
            <Nav mobile />
        </>
    );
};
