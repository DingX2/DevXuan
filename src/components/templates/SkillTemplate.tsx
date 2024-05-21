import { type Component, For } from 'solid-js';
import { Text, Stack } from '@/components/atoms';
import { ImageBox } from '@/components/molecules';
import { skills } from '@/constants';

export const SkillTemplate: Component = () => {
    return (
        <>
            <Stack direction="column" useFlexGap spacing={10}>
                <Text>Skill</Text>
                <Stack direction="row" useFlexGap spacing={10}>
                    <ImageBox image="/image/Typescript_logo.svg" width={24} height={24}>
                        <Text>HTML</Text>
                    </ImageBox>
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
