import { type ParentComponent, For } from 'solid-js';
import { Stack, Text } from '@/components/atoms';
import { ImageBox } from '@/components/molecules';

interface Category {
    name: string;
    image: string;
    description?: string;
}

interface Props {
    categories: Category[];
    skillIndex: number;
    clickState: boolean[];
    handleClick: (skillIndex: number, index: number) => void;
}

export const SkillList: ParentComponent<Props> = (props) => {
    return (
        <Stack direction="row" useFlexGap spacing={10} sx="flex-wrap: wrap;">
            <For each={props.categories}>
                {(category, index) => (
                    <ImageBox
                        image={category.image}
                        width="fit-content"
                        imgWidth={24}
                        height={24}
                        hoverText={category.description}
                        onClick={() => props.handleClick(props.skillIndex, index())}
                        click={props.clickState[index()]}
                    >
                        <Text>{category.name}</Text>
                    </ImageBox>
                )}
            </For>
        </Stack>
    );
};
