import { type Component, createSignal, createEffect, For, onMount, onCleanup } from 'solid-js';
import { Stack, Box, Image } from '@/components/atoms';
import { Background, Nav } from '@/components/molecules';
import { CategoryCard, HistoryCard } from '@/components/organisms';
import { projectSkills, backgrounds, projects, animation } from '@/constants';

export const WorkTemplate: Component = () => {
    const initialShowDetails: boolean[] = Array.from({ length: Object.keys(projects).length }, () => false);
    const [showDetails, setShowDetails] = createSignal<boolean[]>(initialShowDetails);
    const [animationSet, setAnimationSet] = createSignal(animation(window.innerWidth));

    const handleClick = (index: number) => {
        setShowDetails((prev) => {
            const newShowDetails = [...prev];
            newShowDetails[index] = !newShowDetails[index];
            return newShowDetails;
        });
    };

    const updateScreenWidth = () => {
        setAnimationSet(animation(window.innerWidth));
    };

    onMount(() => {
        updateScreenWidth();
        window.addEventListener('resize', updateScreenWidth);
        onCleanup(() => {
            window.removeEventListener('resize', updateScreenWidth);
        });
    });

    createEffect(() => {
        setAnimationSet(animation(window.innerWidth));
        console.log(window.innerWidth, animationSet());
    });

    return (
        <>
            <Image
                src="/image/dandelionOne.svg"
                width={50}
                useAbsolute
                zIndex={3}
                sx={'top: 0;'}
                {...animationSet().wind}
            />

            <Image src="/image/dandelionTwo.svg" width={50} useAbsolute zIndex={3} {...animationSet().wind2} />

            <Stack direction="column" useFlexGap sx="align-items: center;">
                <Background height="fit-content" select sx={`${backgrounds.sunset} align-items: center;`}>
                    <Stack sx="align-items: center;">
                        <Box
                            width="70%"
                            height="40px"
                            padding="1rem;"
                            backgroundColor="#fff"
                            sx="position: relative; align-items: center; margin-top: 1rem; top:0; z-index:99;"
                        >
                            <Nav />
                        </Box>
                    </Stack>
                    x``
                    <For each={Object.values(projects)}>
                        {(props, index) => (
                            <Stack direction="row" sx="justify-content: space-between">
                                <Stack direction="row" sx="width: fit-content;">
                                    <Box
                                        width="320px"
                                        direction="column"
                                        height="auto"
                                        backgroundColor="#000"
                                        sx="position: relative; border-radius: 0; justify-content: start; top: -80px; padding-top: 90px; margin-bottom: -80px;"
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
                                        sx="position: relative; object-fit: contain; left: -6px; margin-right: 4rem;"
                                    />
                                </Stack>

                                <Box
                                    width="80%"
                                    backgroundColor="#000"
                                    sx="position: relative; border-radius: 0px; top: -80px; padding-top: 90px; margin-bottom: -80px;"
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
                                        detail ...
                                    </HistoryCard>
                                </Box>
                            </Stack>
                        )}
                    </For>
                </Background>
            </Stack>
        </>
    );
};
