import { type ParentComponent, createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Stack, Text, Image } from '@/components/atoms';
import { Card, Background, Nav } from '@/components/molecules';

interface Props {}

export const ProfileCard: ParentComponent<Props> = ({ children }) => {
    const [flipped, setFlipped] = createSignal(false);

    const handleFlip = () => {
        setFlipped(!flipped);
    };

    const ProfileCardComponent = styled.div`
        display: flex;
        justify-content: center;
    `;

    return (
        <ProfileCardComponent onClick={handleFlip}>
            <Background height="80" grid />
            <Card width={80} height={400} middle>
                <Stack direction="column">
                    <Nav />
                    <Stack direction="row" center>
                        <Stack direction="column">
                            <Text component="h1" fontSize="50px">
                                FrontEnd {'\n'} Developer
                            </Text>
                            <Text component="span">DevXuan</Text>
                        </Stack>
                        <Stack direction="column" center>
                            <Text component="span" textAlign="end" position="right">
                                이수현
                            </Text>
                            <Text component="p" textAlign="end" position="right">
                                더 나은 세상을 만들고 싶어요.
                            </Text>
                        </Stack>
                    </Stack>
                    <Image
                        src="/image/profile.png"
                        alt="profile"
                        width={300}
                        useAbsolute
                        zIndex={100}
                        bottom={0}
                        center
                    />
                </Stack>
            </Card>
            {children}
        </ProfileCardComponent>
    );
};
