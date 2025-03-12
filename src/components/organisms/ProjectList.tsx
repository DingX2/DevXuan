import { type ParentComponent, For, createSignal } from 'solid-js';
import { Stack, Box, Image, Text } from '@/components/atoms';
import type { TextWithColor, ProjectItem } from '@/types';
import { isDetailedProject } from '@/utils';
import { mobileHome } from '@/constants';
import { CategoryCard } from './CategoryCard';
import { HistoryCard } from './HistoryCard';

interface ProjectListProps {
    projects: { [key: string]: ProjectItem };
    projectSkills: { [key: string]: { skills: TextWithColor[] } };
}

export const ProjectList: ParentComponent<ProjectListProps> = ({ projects, projectSkills }) => {
    const [showDetails, setShowDetails] = createSignal<boolean[]>(
        new Array(Object.keys(projects).length).fill(false) as boolean[],
    );

    const handleClick = (index: number) => {
        const newShowDetails = [...showDetails()];
        newShowDetails[index] = !newShowDetails[index];
        setShowDetails(newShowDetails);
    };

    return (
        <>
            <For each={Object.entries(projects)}>
                {([key, project], index) => (
                    <Stack direction="row" between sx={`${mobileHome.mobileStack}`}>
                        <Stack direction="row" sx="width: fit-content; align-items: flex-start">
                            <Box
                                direction="column"
                                height="100%"
                                backgroundColor="#000"
                                sx={`
                                    min-width: 320px;
                                    flex-grow: 1; 
                                    position: relative; border-radius: 0; justify-content: start; z-index: 2;
                                    padding: 1rem 1.5rem 4rem;
                                    ${mobileHome.mobileBox}
                                `}
                            >
                                <CategoryCard
                                    category={project.category}
                                    organization={project.organizationTitle}
                                    title={project.title || ''}
                                    content={project.organizationContent}
                                    duration={project.organizationDuration}
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
                            sx={`
                                flex-grow: 1;
                                position: relative; 
                                border-radius: 0; 
                                justify-content: start; 
                                z-index: 5;
                                padding: 1rem 1.5rem 4rem;
                                ${mobileHome.mobileBox}
                            `}
                        >
                            {isDetailedProject(project) && (
                                <HistoryCard
                                    title={project.projectTitle}
                                    subtitle={project.subtitle}
                                    skills={projectSkills[key]?.skills || []}
                                    hashtag={project.hashtag}
                                    projectImage={project.projectImage}
                                    projectDuration={project.projectDuration}
                                    show={showDetails()[index()]}
                                    handleClick={() => handleClick(index())}
                                    link={project.link}
                                >
                                    <Stack left>
                                        <For each={project.projectDetail}>
                                            {(detail) => <Text fontSize={'0.875rem'}>{detail}</Text>}
                                        </For>
                                    </Stack>
                                </HistoryCard>
                            )}
                        </Box>
                    </Stack>
                )}
            </For>
        </>
    );
};

export default ProjectList;
