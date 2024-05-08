import type { ParentComponent } from 'solid-js';
import { Sidebar } from '@/components/organisms';

export const Layout: ParentComponent = ({ children }) => {
    return (
        <>
            <Sidebar />
            {children}
        </>
    );
};
