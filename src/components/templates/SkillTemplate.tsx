import { type Component, For } from 'solid-js';
import { Text, Stack } from '@/components/atoms';
import { ImageBox } from '@/components/molecules';
import { skills, backgrounds } from '@/constants';

export const SkillTemplate: Component = () => {
    return (
        <>
            <Stack direction="column" useFlexGap spacing={10} sx={backgrounds.grid}>
                <Text fontSize="30px">Skill</Text>
                <Stack direction="row" useFlexGap spacing={10} sx="flex-wrap: wrap;">
                    <For each={skills}>
                        {({ language }) => (
                            <For each={language}>
                                {({ image, name, description }) => (
                                    <ImageBox image={image} width={24} height={24} hoverText={description}>
                                        <Text>{name}</Text>
                                    </ImageBox>
                                )}
                            </For>
                        )}
                    </For>
                </Stack>
            </Stack>
        </>
    );
};
