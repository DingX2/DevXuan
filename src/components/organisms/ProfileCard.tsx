import { type ParentComponent, createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Stack } from '@/components/atoms';
import { Card, Nav } from '@/components/molecules';

interface Props {}

export const ProfileCard: ParentComponent<Props> = ({ children }) => {
    const [flipped, setFlipped] = createSignal(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const ProfileCardComponent = styled.div`
        display: flex;
        justify-content: center;
        padding-top: 50px;
    `;

    return (
        <ProfileCardComponent onClick={handleFlip}>
            <Card width={80} height={550} middle borderColor="#fff" shadow>
                <Stack direction="column" sx="padding: 1rem;">
                    <Nav />
                    {children}
                </Stack>
            </Card>
        </ProfileCardComponent>
    );
};
