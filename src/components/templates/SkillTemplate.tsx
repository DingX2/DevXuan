import { type Component, For, createSignal, createMemo } from 'solid-js';
import { useLocation } from '@solidjs/router';
import { Text, Stack } from '@/components/atoms';
import { Nav } from '@/components/molecules';
import { SkillList } from '@/components/organisms';
import { skills, backgrounds, mobileHome } from '@/constants';
import { getCategoryIndex } from '@/utils';

export const SkillTemplate: Component = () => {
    const location = useLocation();
    const isSkillPage = location.pathname === '/skill';
    const initialState: boolean[][] = skills.map((skill) => [
        ...Array<boolean>(skill.language.length).fill(false),
        ...Array<boolean>(skill.library.length).fill(false),
        ...Array<boolean>(skill.css.length).fill(false),
        ...Array<boolean>(skill.tooling_DevOps.length).fill(false),
        ...Array<boolean>(skill.backend.length).fill(false),
        ...Array<boolean>(skill.server.length).fill(false),
        ...Array<boolean>(skill.OS.length).fill(false),
    ]);

    const [click, setClick] = createSignal<boolean[][]>(initialState);
    const offsets = createMemo(() => getCategoryIndex(skills));

    const handleClick = (skillIndex: number, subIndex: number) => {
        setClick((prev) => {
            const newClick = prev.map((row, i) =>
                i === skillIndex ? row.map((item, j) => (j === subIndex ? !item : item)) : row,
            );
            return newClick;
        });
    };

    return (
        <Stack direction="column" useFlexGap spacing={10} sx={`${backgrounds.grid}`}>
            <Nav useAbsolute useBox hidden={!isSkillPage} sx={mobileHome.mobileHidden} />
            <Stack sx="padding: 3rem;">
                <Text fontSize="30px" sx="margin-top: 1rem;">
                    Skill
                </Text>
                <For each={skills} fallback={<div>Loading...</div>}>
                    {(skill, skillIndex) => (
                        <SkillList
                            categories={skill.language}
                            skillIndex={skillIndex()}
                            clickState={click()[skillIndex()].slice(offsets()[0][0], offsets()[0][1] + 1)}
                            handleClick={(_, subIdx) => handleClick(skillIndex(), subIdx)}
                        />
                    )}
                </For>

                <Text fontSize="24px" sx="margin-top: 1rem;">
                    Library
                </Text>
                <For each={skills} fallback={<div>Loading...</div>}>
                    {(skill, skillIndex) => (
                        <SkillList
                            categories={skill.library}
                            skillIndex={skillIndex()}
                            clickState={click()[skillIndex()].slice(offsets()[1][0], offsets()[1][1] + 1)}
                            handleClick={(_, subIdx) => handleClick(skillIndex(), offsets()[1][0] + subIdx)}
                        />
                    )}
                </For>

                <Stack direction="row" sx={mobileHome.mobileStack}>
                    <Stack direction="column" useFlexGap spacing={10}>
                        <Text fontSize="24px" sx="margin-top: 1rem;">
                            CSS
                        </Text>
                        <For each={skills} fallback={<div>Loading...</div>}>
                            {(skill, skillIndex) => (
                                <SkillList
                                    categories={skill.css}
                                    skillIndex={skillIndex()}
                                    clickState={click()[skillIndex()].slice(offsets()[2][0], offsets()[2][1] + 1)}
                                    handleClick={(_, subIdx) => handleClick(skillIndex(), offsets()[2][0] + subIdx)}
                                />
                            )}
                        </For>
                    </Stack>
                    <Stack direction="column" useFlexGap spacing={10}>
                        <Text fontSize="24px" sx="margin-top: 1rem;">
                            Tooling / DevOps
                        </Text>
                        <For each={skills} fallback={<div>Loading...</div>}>
                            {(skill, skillIndex) => (
                                <SkillList
                                    categories={skill.tooling_DevOps}
                                    skillIndex={skillIndex()}
                                    clickState={click()[skillIndex()].slice(offsets()[3][0], offsets()[3][1] + 1)}
                                    handleClick={(_, subIdx) => handleClick(skillIndex(), offsets()[3][0] + subIdx)}
                                />
                            )}
                        </For>
                    </Stack>
                </Stack>

                <Stack direction="row" sx={mobileHome.mobileStack}>
                    <Stack direction="column" useFlexGap spacing={10}>
                        <Text fontSize="24px" sx="margin-top: 1rem;">
                            Backend
                        </Text>
                        <For each={skills} fallback={<div>Loading...</div>}>
                            {(skill, skillIndex) => (
                                <SkillList
                                    categories={skill.backend}
                                    skillIndex={skillIndex()}
                                    clickState={click()[skillIndex()].slice(offsets()[4][0], offsets()[4][1] + 1)}
                                    handleClick={(_, subIdx) => handleClick(skillIndex(), offsets()[4][0] + subIdx)}
                                />
                            )}
                        </For>
                    </Stack>

                    <Stack direction="column" useFlexGap spacing={10}>
                        <Text fontSize="24px" sx="margin-top: 1rem;">
                            Server
                        </Text>
                        <For each={skills} fallback={<div>Loading...</div>}>
                            {(skill, skillIndex) => (
                                <SkillList
                                    categories={skill.server}
                                    skillIndex={skillIndex()}
                                    clickState={click()[skillIndex()].slice(offsets()[5][0], offsets()[5][1] + 1)}
                                    handleClick={(_, subIdx) => handleClick(skillIndex(), offsets()[5][0] + subIdx)}
                                />
                            )}
                        </For>
                    </Stack>

                    <Stack direction="column" useFlexGap spacing={10}>
                        <Text fontSize="24px" sx="margin-top: 1rem;">
                            OS
                        </Text>
                        <For each={skills} fallback={<div>Loading...</div>}>
                            {(skill, skillIndex) => (
                                <SkillList
                                    categories={skill.OS}
                                    skillIndex={skillIndex()}
                                    clickState={click()[skillIndex()].slice(offsets()[6][0], offsets()[6][1] + 1)}
                                    handleClick={(_, subIdx) => handleClick(skillIndex(), offsets()[6][0] + subIdx)}
                                />
                            )}
                        </For>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    );
};
