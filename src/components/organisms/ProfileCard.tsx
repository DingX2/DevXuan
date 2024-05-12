import type { ParentComponent } from 'solid-js';
import { styled } from 'solid-styled-components';
import { Stack, Text } from '@/components/atoms';
import { Card } from '@/components/molecules';

interface Props {}

export const ProfileCard: ParentComponent<Props> = ({ children }) => {
    const ProfileCardComponent = styled.div`
        display: flex;
        margin-top: 2rem;
        justify-content: center;
    `;

    return (
        <ProfileCardComponent>
            <Card width={1080} height={600} middle>
                <Stack direction="row">
                    <Stack direction="column">
                        <Text component="h1" fontSize="50px">
                            FrontEnd {'\n'} Developer
                        </Text>
                        <Text component="span">DevXuan</Text>
                    </Stack>
                    <Stack direction="column">
                        <Text component="span" textAlign="end" position="right">
                            이수현
                        </Text>
                        <Text component="p" textAlign="end" position="right">
                            세상을 이롭게 만들고 싶어요
                        </Text>
                    </Stack>
                </Stack>
            </Card>
            {children}
        </ProfileCardComponent>
    );
};
