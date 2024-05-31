import { type Component, createSignal, For, onMount, onCleanup } from 'solid-js';
import { Stack, Box, Image } from '@/components/atoms';
import { Nav } from '@/components/molecules';
import { CategoryCard, HistoryCard } from '@/components/organisms';
import { projectSkills, backgrounds, projects, dandelion, mobileHome } from '@/constants';
import { animation } from '@/utils';

export const WorkTemplate: Component = () => {
    const initialShowDetails: boolean[] = Array.from({ length: Object.keys(projects).length }, () => false);
    const [showDetails, setShowDetails] = createSignal<boolean[]>(initialShowDetails);
    const [screenHeight, setScreenHeight] = createSignal<number>();
    const [animationSet, setAnimationSet] = createSignal(animation(0));
    let backgroundRef: HTMLDivElement | undefined;

    const handleClick = (index: number) => {
        setShowDetails((prev) => {
            const newShowDetails = [...prev];
            newShowDetails[index] = !newShowDetails[index];
            return newShowDetails;
        });
    };

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
            <Stack direction="column" useFlexGap sx={`position: relative; overflow: hidden;`}>
                <Stack sx={`${backgrounds.sunset}`} ref={backgroundRef}>
                    <Stack sx="align-items: center;">
                        <Box
                            width="70%"
                            height="40px"
                            padding="1rem;"
                            backgroundColor="#fff"
                            sx={
                                /* css */ `
                                position: relative; 
                                align-items: center;
                                margin-top: 2rem; 
                                top: 0; 
                                z-index:99;
                                ${mobileHome.tablet}
                                `
                            }
                        >
                            <Nav />
                        </Box>
                    </Stack>

                    <Stack direction="row" sx={`justify-content: space-between; ${mobileHome.mobileStack}`}>
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

                    <For each={Object.values(projects)}>
                        {(props, index) => (
                            <Stack direction="row" sx={`justify-content: space-between; ${mobileHome.mobileStack}`}>
                                <Stack direction="row" sx="width: fit-content; align-items: flex-start">
                                    <Box
                                        direction="column"
                                        height="100%"
                                        backgroundColor="#000"
                                        sx={
                                            /* css */ `
                                                min-width: 320px;
                                                flex-grow: 1; 
                                                position: relative; border-radius: 0; justify-content: start; z-index: 2;
                                                padding: 1rem 1.5rem 4rem;
                                                ${mobileHome.mobileBox}
                                                `
                                        }
                                    >
                                        <CategoryCard
                                            category={props.category}
                                            organization={props.organizationTitle}
                                            title={props.title}
                                            content={props.organizationContent}
                                            duration={props.organizationDuration}
                                            show={showDetails()[index()]}
                                            handleClick={() => handleClick(index())}
                                        />
                                    </Box>

                                    <Image
                                        src="/image/veranda.svg"
                                        alt="veranda"
                                        width={100}
                                        sx="position: relative; align-items: start; object-fit: contain; left: -6px; top: 150px; margin-right: 4rem;"
                                    />
                                </Stack>

                                <Box
                                    width="90%"
                                    height="auto"
                                    backgroundColor="#000"
                                    sx={
                                        /* css */ `
                                            flex-grow: 1;
                                            position: relative; 
                                            border-radius: 0; 
                                            justify-content: start; 
                                            z-index: 5;
                                            padding: 1rem 1.5rem 4rem;
                                            ${mobileHome.mobileBox}
                                            `
                                    }
                                >
                                    <HistoryCard
                                        title={props.projectTitle}
                                        subtitle={props.subtitle}
                                        skills={projectSkills.blueMosaic.skills}
                                        hashtag={props.hashtag}
                                        projectImage={props.projectImage}
                                        projectDuration={props.projectDuration}
                                        show={showDetails()[index()]}
                                        handleClick={() => handleClick(index())}
                                    >
                                        detail ... detail ... detail ... detail ... detail ... detail ... detail ...
                                    </HistoryCard>
                                </Box>
                            </Stack>
                        )}
                    </For>
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
