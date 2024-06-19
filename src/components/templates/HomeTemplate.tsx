import { type Component, For, createSignal } from 'solid-js';
import { Image, Stack, Text, Box, Link } from '@/components/atoms';
import { ProfileCard } from '@/components/organisms';
import { homeImages, mobileHome } from '@/constants';
import { backgrounds } from '@/styles';
import { animation } from '@/utils';

export const HomeTemplate: Component = () => {
    const [animationSet] = createSignal(animation(0));
    const [boxZIndex, setBoxZIndex] = createSignal(1);

    const handleClick = (event?: MouseEvent) => {
        if (event) {
            event.stopPropagation();
        }
        setBoxZIndex(100);
        setTimeout(() => {
            setBoxZIndex(1);
        }, 2000);
    };

    return (
        <Stack position="relative" sx={`${backgrounds.gradient} padding-bottom: 5rem; overflow: hidden;`}>
            <For each={homeImages}>
                {({ src, width, sx, zIndex, animation }) => (
                    <Image src={src} width={width} sx={sx} zIndex={zIndex} useAbsolute {...animationSet()[animation]} />
                )}
            </For>
            <ProfileCard>
                <Stack direction="row" sx={mobileHome.mobileStack}>
                    <Stack direction="column" useFlexGap spacing={10} alignItemStart>
                        <Text fontStyle="Deco" component="h1" fontSize="3.2rem">
                            FrontEnd {'\n'} Developer
                        </Text>
                        <Link href="https://github.com/DingX2" target="_blank">
                            @DevXuan
                        </Link>
                    </Stack>
                    <Stack direction="column" center useFlexGap spacing={10} sx="align-items: flex-end;">
                        <Text
                            fontStyle="MeongiW"
                            component="span"
                            textAlign="end"
                            position="right"
                            fontSize="2rem"
                            bold
                            sx="z-index: 100;"
                        >
                            이수현
                        </Text>
                        <Box
                            fitContent
                            type="whiteBox"
                            sx={`z-index: ${boxZIndex()};`}
                            onMouseEnter={() => setBoxZIndex(100)}
                            onMouseLeave={() => setBoxZIndex(1)}
                            onClick={handleClick}
                        >
                            더 나은 세상을 만들고 싶어요.
                        </Box>
                    </Stack>
                </Stack>
                <Stack>
                    <Image
                        src="/image/profile.png"
                        alt="profile"
                        width={'50%'}
                        useAbsolute
                        zIndex={20}
                        bottom={0}
                        center
                        sx="max-width: 200px;"
                    />
                </Stack>
            </ProfileCard>
        </Stack>
    );
};
