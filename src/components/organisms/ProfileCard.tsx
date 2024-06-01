import { type ParentComponent, createSignal } from 'solid-js';
import { useNavigate, useLocation } from '@solidjs/router';
import { Motion } from 'solid-motionone';
import { styled } from 'solid-styled-components';
import { Stack } from '@/components/atoms';
import { Card, Nav } from '@/components/molecules';
import { animation } from '@/utils';

export const ProfileCard: ParentComponent = ({ children }) => {
    const [flipped, setFlipped] = createSignal(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleFlip = () => {
        setFlipped(!flipped);
        if (location.pathname === '/') {
            navigate('/about');
        }
    };

    const ProfileCardComponent = styled.div`
        display: flex;
        justify-content: center;
        padding-top: 50px;
    `;

    return (
        <Motion.div {...animation().flip}>
            <ProfileCardComponent onClick={handleFlip}>
                <Card width={80} height={550} middle borderColor="#fff" shadow>
                    <Stack direction="column" sx="padding: 1rem;">
                        <Nav useAbsolute />
                        {children}
                    </Stack>
                </Card>
            </ProfileCardComponent>
        </Motion.div>
    );
};
