import { type Component, For } from 'solid-js';
import { Image, Stack, Text } from '@/components/atoms';
import { ProfileCard } from '@/components/organisms';
import { backgrounds, homeImages, mobileHome } from '@/constants';

export const HomeTemplate: Component = () => {
    return (
        <Stack position="relative" sx={`${backgrounds.gradient} padding-bottom: 5rem; overflow: hidden;`}>
            <For each={homeImages}>
                {({ src, width, sx, zIndex }) => <Image src={src} width={width} sx={sx} zIndex={zIndex} useAbsolute />}
            </For>
            <ProfileCard>
                <Stack direction="row" sx={mobileHome.mobileStack}>
                    <Stack direction="column" useFlexGap spacing={10}>
                        <Text fontStyle="Deco" component="h1" fontSize="3.2rem">
                            FrontEnd {'\n'} Developer
                        </Text>
                        <Text fontStyle="Deco" component="span">
                            @DevXuan
                        </Text>
                    </Stack>
                    <Stack direction="column" center useFlexGap spacing={10}>
                        <Text
                            fontStyle="MeongiW"
                            component="span"
                            textAlign="end"
                            position="right"
                            fontSize="2rem"
                            bold
                        >
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
                    width={'50%'}
                    useAbsolute
                    zIndex={100}
                    bottom={0}
                    center
                    sx="max-width: 200px;"
                />
            </ProfileCard>
        </Stack>
    );
};
