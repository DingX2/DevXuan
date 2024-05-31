import { type Component, For, createSignal } from 'solid-js';
import { Text, Stack } from '@/components/atoms';
import { ImageBox } from '@/components/molecules';
import { skills, backgrounds } from '@/constants';

export const SkillTemplate: Component = () => {
    const initialState: boolean[] = Array<boolean>(skills.length).fill(false);
    const [click, setClick] = createSignal<boolean[]>(initialState);

    const handleClick = (index: number) => {
        console.log('click:', click());
        setClick((prev) => {
            const newClick = [...prev];
            newClick[index] = !newClick[index];
            return newClick;
        });
    };

    return (
        <Stack direction="column" useFlexGap spacing={10} sx={backgrounds.grid}>
            <Text fontSize="30px">Skill</Text>
            <Stack direction="row" useFlexGap spacing={10} sx="flex-wrap: wrap; ">
                <For each={skills} fallback={<div>Loading...</div>}>
                    {(skills) => (
                        <For each={skills.language}>
                            {(category, index) => (
                                <ImageBox
                                    image={category.image}
                                    width="100"
                                    imgWidth={24}
                                    height={24}
                                    hoverText={category.description}
                                    onClick={() => handleClick(index())}
                                    click={click()[index()]}
                                >
                                    <Text>{category.name}</Text>
                                </ImageBox>
                            )}
                        </For>
                    )}
                </For>
            </Stack>
        </Stack>
    );
};
