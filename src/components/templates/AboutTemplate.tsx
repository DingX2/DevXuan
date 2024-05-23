import type { Component } from 'solid-js';
import { FontAwesomeIcon } from 'solid-fontawesome';
import { Stack, Text, Box } from '@/components/atoms';
import { Background, Speech } from '@/components/molecules';
import { ProfileCard } from '@/components/organisms';

export const AboutTemplate: Component = () => {
    return (
        <>
            <Background height="100" image="/image/oilpaint.svg" />
            <ProfileCard>
                <Stack direction="row">
                    <Stack direction="column" useFlexGap spacing={10}>
                        <Box direction="column">
                            <FontAwesomeIcon icon="fa-solid fa-comments" />
                            <Speech>피드백</Speech>
                            <Text component="p" textAlign="end" position="right">
                                피드백으로 개선하는 구현은 {'\n'} 여러 번 덧칠하며 완성하는 유화와 비슷합니다.
                            </Text>
                        </Box>
                    </Stack>
                    <Stack direction="column" center>
                        <Box direction="column">
                            <Speech>인사이트</Speech>
                            <Text component="p" textAlign="end" position="right">
                                사용자 경험과 개발자 경험을 모두 개선하여 {'\n'} 중요한 인사이트에 집중하고자 합니다.
                            </Text>
                        </Box>
                    </Stack>
                </Stack>
            </ProfileCard>
        </>
    );
};
