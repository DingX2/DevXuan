import type { ParentComponent } from 'solid-js';
import { Header, Footer } from './components/organisms';

export const Layout: ParentComponent = ({ children }) => {
    return (
        <>
            <Header />
                <main>{children}</main>
            <Footer />
        </>
    );
};
