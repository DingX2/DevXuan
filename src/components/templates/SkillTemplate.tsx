import { type Component, For, createSignal } from 'solid-js';
import { Text, Stack } from '@/components/atoms';
import { SkillList } from '@/components/organisms';
import { skills, backgrounds } from '@/constants';

export const SkillTemplate: Component = () => {
    const initialState: boolean[][] = skills.map((skill) => [
        ...Array<boolean>(skill.language.length).fill(false),
        ...Array<boolean>(skill.library.length).fill(false),
        ...Array<boolean>(skill.css.length).fill(false),
        ...Array<boolean>(skill.tooling.length).fill(false),
        ...Array<boolean>(skill.Server.length).fill(false),
    ]);

    const [click, setClick] = createSignal<boolean[][]>(initialState);

    const handleClick = (skillIndex: number, subIndex: number) => {
        setClick((prev) => {
            const newClick = prev.map((row, i) =>
                i === skillIndex ? row.map((item, j) => (j === subIndex ? !item : item)) : row,
            );
            return newClick;
        });
    };

    return (
        <Stack direction="column" useFlexGap spacing={10} sx={backgrounds.grid}>
            <Text fontSize="30px">Skill</Text>
            <For each={skills} fallback={<div>Loading...</div>}>
                {(skill, skillIndex) => (
                    <SkillList
                        categories={skill.language}
                        skillIndex={skillIndex()}
                        clickState={click()[skillIndex()].slice(0, skill.language.length)}
                        handleClick={(_, subIdx) => handleClick(skillIndex(), subIdx)}
                    />
                )}
            </For>

            <Text fontSize="30px">Library</Text>
            <For each={skills} fallback={<div>Loading...</div>}>
                {(skill, skillIndex) => (
                    <SkillList
                        categories={skill.library}
                        skillIndex={skillIndex()}
                        clickState={click()[skillIndex()].slice(
                            skill.language.length,
                            skill.language.length + skill.library.length,
                        )}
                        handleClick={(_, subIdx) => handleClick(skillIndex(), skill.language.length + subIdx)}
                    />
                )}
            </For>

            <Text fontSize="30px">CSS</Text>
            <For each={skills} fallback={<div>Loading...</div>}>
                {(skill, skillIndex) => (
                    <SkillList
                        categories={skill.css}
                        skillIndex={skillIndex()}
                        clickState={click()[skillIndex()].slice(
                            skill.language.length + skill.library.length,
                            skill.language.length + skill.library.length + skill.css.length,
                        )}
                        handleClick={(_, subIdx) =>
                            handleClick(skillIndex(), skill.language.length + skill.library.length + subIdx)
                        }
                    />
                )}
            </For>

            <Text fontSize="30px">Tooling</Text>
            <For each={skills} fallback={<div>Loading...</div>}>
                {(skill, skillIndex) => (
                    <SkillList
                        categories={skill.tooling}
                        skillIndex={skillIndex()}
                        clickState={click()[skillIndex()].slice(
                            skill.language.length + skill.library.length + skill.css.length,
                            skill.language.length + skill.library.length + skill.css.length + skill.tooling.length,
                        )}
                        handleClick={(_, subIdx) =>
                            handleClick(
                                skillIndex(),
                                skill.language.length + skill.library.length + skill.css.length + subIdx,
                            )
                        }
                    />
                )}
            </For>

            <Text fontSize="30px">Server</Text>
            <For each={skills} fallback={<div>Loading...</div>}>
                {(skill, skillIndex) => (
                    <SkillList
                        categories={skill.Server}
                        skillIndex={skillIndex()}
                        clickState={click()[skillIndex()].slice(
                            skill.language.length + skill.library.length + skill.css.length + skill.tooling.length,
                            skill.language.length +
                                skill.library.length +
                                skill.css.length +
                                skill.tooling.length +
                                skill.Server.length,
                        )}
                        handleClick={(_, subIdx) =>
                            handleClick(
                                skillIndex(),
                                skill.language.length +
                                    skill.library.length +
                                    skill.css.length +
                                    skill.tooling.length +
                                    subIdx,
                            )
                        }
                    />
                )}
            </For>
        </Stack>
    );
};
