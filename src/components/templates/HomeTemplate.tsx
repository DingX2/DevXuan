import type { Component } from 'solid-js';
import { Image, Stack, Text } from '@/components/atoms';
import { Background } from '@/components/molecules';
import { ProfileCard } from '@/components/organisms';
import { backgrounds } from '@/constants';

export const HomeTemplate: Component = () => {
    return (
        <>
            <Image
                src="/image/computer.svg"
                width={280}
                useAbsolute
                sx="
                    transform: translate(-50%, -50%) rotate(-15deg);
                    top: 36%;
                    left: 38%;"
                zIndex={1}
            />
            <Image
                src="/image/coffee.svg"
                width={250}
                useAbsolute
                sx="
                    transform: translate(-50%, -50%) rotate(-15deg);
                    top: 80%;
                    left: 90%;"
            />
            <Image
                src="/image/camera.svg"
                width={150}
                useAbsolute
                sx="
                    transform: translate(-50%, -50%) rotate(55deg);
                    top: 33%;
                    left: 70%;"
            />
            <Background height="100" select sx={backgrounds.gradient} />
            <ProfileCard>
                <Stack direction="row">
                    <Stack direction="column" useFlexGap spacing={10}>
                        <Text component="h1" fontSize="50px">
                            FrontEnd {'\n'} Developer
                        </Text>
                        <Text component="span">@DevXuan</Text>
                    </Stack>
                    <Stack direction="column" center>
                        <Text component="span" textAlign="end" position="right" fontSize="30px">
                            이수현
                        </Text>
                        <Text component="p" textAlign="end" position="right">
                            더 나은 세상을 만들고 싶어요.
                        </Text>
                    </Stack>
                </Stack>
                <Image src="/image/profile.png" alt="profile" width={300} useAbsolute zIndex={100} bottom={0} center />
            </ProfileCard>
        </>
    );
};
