import { type Component, createSignal, For, onMount, onCleanup } from 'solid-js';
import { Stack, Box, Image } from '@/components/atoms';
import { Background, Nav } from '@/components/molecules';
import { CategoryCard, HistoryCard } from '@/components/organisms';
import { projectSkills, backgrounds, projects, animation } from '@/constants';

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
        console.log('update', backgroundRef?.scrollHeight, screenHeight(), animationSet());
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
            <Stack
                direction="column"
                useFlexGap
                sx={`position: relative; overflow: hidden; height: ${screenHeight()}px;`}
            >
                <Background height={screenHeight()?.toString() ?? '0'} select sx={`${backgrounds.sunset}`} />

                <Stack sx={`${backgrounds.sunset}`} ref={backgroundRef}>
                    <Stack sx="align-items: center;">
                        <Box
                            width="70%"
                            height="40px"
                            padding="1rem;"
                            backgroundColor="#fff"
                            sx="position: relative; align-items: center; margin-top: 2rem; top:0; z-index:99;"
                        >
                            <Nav />
                        </Box>
                    </Stack>

                    <Stack direction="row" sx="justify-content: space-between;">
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
                            height={`calc(100% + 80px)`}
                            backgroundColor="#000"
                            sx=" position: relative; border-radius: 0; z-index: 5; top: -80px;"
                        />
                    </Stack>
                    <For each={Object.values(projects)}>
                        {(props, index) => (
                            <Stack direction="row" sx="justify-content: space-between;">
                                <Stack direction="row" sx="width: fit-content; align-items: flex-start">
                                    <Box
                                        width="320px"
                                        direction="column"
                                        height="100%"
                                        backgroundColor="#000"
                                        sx="flex-grow: 1; position: relative; border-radius: 0; justify-content: start; z-index: 2;"
                                        padding="1rem 1.5rem 4rem"
                                    >
                                        <CategoryCard
                                            category={props.category}
                                            title={props.organizationTitle}
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
                                    sx="flex-grow: 1; position: relative; border-radius: 0; justify-content: start; z-index: 5;"
                                    padding="1rem 3rem 4rem"
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
                <Image
                    src="/image/dandelionOne.svg"
                    width={60}
                    zIndex={3}
                    useAbsolute
                    sx="top: 240px;"
                    {...animationSet().wind}
                />
                <Image
                    src="/image/dandelionTwo.svg"
                    useAbsolute
                    width={100}
                    zIndex={3}
                    sx="top: 200px;"
                    {...animationSet().wind2}
                />
                <Image
                    src="/image/dandelionTwo.svg"
                    useAbsolute
                    width={70}
                    zIndex={3}
                    sx="top: 800px;"
                    {...animationSet().wind4}
                />
                <Image
                    src="/image/dandelionTwo.svg"
                    useAbsolute
                    width={50}
                    zIndex={10}
                    sx="top: 600px;"
                    {...animationSet().wind3}
                />
            </Stack>
        </>
    );
};
