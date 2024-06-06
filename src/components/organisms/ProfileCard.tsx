import { type ParentComponent, createSignal } from 'solid-js';
import { useNavigate, useLocation } from '@solidjs/router';
import { Motion } from 'solid-motionone';
import { styled } from 'solid-styled-components';
import { Stack } from '@/components/atoms';
import { Card, Nav } from '@/components/molecules';
import { animation } from '@/utils';
import { mobileHome } from '@/constants';

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
                <Card width={80} fitContent middle borderColor="#fff" shadow>
                    <Stack direction="column" sx="padding: 5rem 2rem 6rem;">
                        <Nav useAbsolute center sx={`${mobileHome.mobileHidden}`} />
                        {children}
                    </Stack>
                </Card>
            </ProfileCardComponent>
        </Motion.div>
    );
};
