import { type Component, createSignal, For, onMount, onCleanup } from 'solid-js';
import { Stack, Box, Image } from '@/components/atoms';
import { Nav } from '@/components/molecules';
import { ProjectList } from '@/components/organisms';
import { projectSkills, projects, dandelion, mobileHome } from '@/constants';
import { backgrounds } from '@/styles';
import { animation } from '@/utils';

export const WorkTemplate: Component = () => {
    let backgroundRef: HTMLDivElement | undefined;
    const [screenHeight, setScreenHeight] = createSignal<number>();
    const [animationSet, setAnimationSet] = createSignal(animation(0));

    const updateScreenHeight = () => {
        if (backgroundRef) {
            setScreenHeight(backgroundRef?.scrollHeight);
            setAnimationSet(animation(screenHeight()));
        }
    };

    onMount(() => {
        setTimeout(updateScreenHeight, 0);
        window.addEventListener('resize', updateScreenHeight);
        onCleanup(() => {
            window.removeEventListener('resize', updateScreenHeight);
        });
    });

    return (
        <>
            <Stack direction="column" position="relative" useFlexGap sx={`overflow: hidden;`}>
                <Stack sx={`${backgrounds.sunset}`} ref={backgroundRef}>
                    <Nav useBox sx={mobileHome.mobileHidden} />
                    <Stack direction="row" between sx={`${mobileHome.mobileStack}`}>
                        <Stack direction="row" sx="width: fit-content; height: 40px;">
                            <Box
                                width="320px"
                                direction="column"
                                height={`calc(100% + 80px)`}
                                backgroundColor="#000"
                                sx="position: relative; border-radius: 0; top: -80px;"
                            />

                            <Image
                                src="/image/veranda.svg"
                                alt="veranda"
                                width={100}
                                sx="position: relative; margin-right: 4rem; visibility: hidden;"
                            />
                        </Stack>

                        <Box
                            width="90%"
                            height="120px"
                            backgroundColor="#000"
                            sx={`position: relative; border-radius: 0; z-index: 5; top: -80px; margin-bottom: -80px;
                            ${mobileHome.mobileHidden}`}
                        />
                    </Stack>

                    <ProjectList projects={projects} projectSkills={projectSkills} />
                </Stack>

                <For each={dandelion}>
                    {({ src, width, top, animation, zIndex }) => (
                        <Image
                            src={src}
                            width={width}
                            zIndex={zIndex}
                            useAbsolute
                            sx={`top: ${top}px;`}
                            {...animationSet()[animation]}
                        />
                    )}
                </For>
            </Stack>
        </>
    );
};
