import { type Component, For } from 'solid-js';
import { Image, Stack, Text } from '@/components/atoms';
import { ProfileCard } from '@/components/organisms';
import { backgrounds, homeImages } from '@/constants';

export const HomeTemplate: Component = () => {
    return (
        <Stack position="relative" sx={`${backgrounds.gradient} padding-bottom: 5rem; overflow: hidden;`}>
            <For each={homeImages}>
                {({ src, width, sx, zIndex }) => <Image src={src} width={width} sx={sx} zIndex={zIndex} useAbsolute />}
            </For>
            <ProfileCard>
                <Stack direction="row">
                    <Stack direction="column" useFlexGap spacing={10}>
                        <Text component="h1" fontSize="50px">
                            FrontEnd {'\n'} Developer
                        </Text>
                        <Text component="span">@DevXuan</Text>
                    </Stack>
                    <Stack direction="column" center useFlexGap spacing={10}>
                        <Text component="span" textAlign="end" position="right" fontSize="40px" bold>
                            이수현
                        </Text>
                        <Text component="p" textAlign="end" position="right">
                            더 나은 세상을 만들고 싶어요.
                        </Text>
                    </Stack>
                </Stack>
                <Image src="/image/profile.png" alt="profile" width={300} useAbsolute zIndex={100} bottom={0} center />
            </ProfileCard>
        </Stack>
    );
};
