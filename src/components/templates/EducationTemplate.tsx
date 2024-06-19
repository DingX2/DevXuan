import { type Component } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import { Stack, Box, Text, Image, Button } from '@/components/atoms';
import { mobileHome } from '@/constants';
import { backgrounds } from '@/styles';

interface Props {}

export const EducationTemplate: Component<Props> = () => {
    const navigate = useNavigate();
    return (
        <>
            <Stack
                direction="row"
                alignItemCenter
                useFlexGap
                spacing={30}
                sx={`${backgrounds.gradient} padding: 3rem; ${mobileHome.mobileStack} `}
            >
                <Stack direction="column">
                    <Image src="/image/projects/projectsThumbnail.png" sx="object-fit: contain;" />
                    <Image src="/image/projects/projectsThumbnail2.png" sx="object-fit: contain;" />
                </Stack>
                <Stack direction="column" useFlexGap spacing={10}>
                    <Box type="whiteBox" direction="column">
                        <Box type="grayBox" fitContent>
                            📚 학력
                        </Box>
                        <Stack direction="column">
                            <Text>⭐ 2020.03 ~ 2024.08 경북대학교 식품공학부 졸업예정</Text>
                            <Text>⭐ 2017.03 ~ 2020.02 부산 삼성여자고등학교 졸업</Text>
                        </Stack>

                        <Stack direction="column" spacing={10}>
                            <Text>⭐ (2023.07 ~) 1년간, 8개의 프로젝트를 완수하면서 책임감을 갖고 성장했습니다.</Text>
                            <Text>⭐ 사용자의 입장에서 유지보수 및 품질향상을 위한 피드백 반영에 열정을 느낍니다.</Text>
                        </Stack>
                    </Box>

                    <Box type="whiteBox" direction="column">
                        <Box type="grayBox" fitContent>
                            ✨ GPA (4.5/ 160학점)
                        </Box>
                        <Stack direction="column" spacing={10}>
                            <Text>⭐ 평균 : 4.04</Text>
                            <Text>주전공(식품공학) : 4.08 / 복수전공(컴퓨터공학): 3.82</Text>
                        </Stack>
                    </Box>

                    <Box type="whiteBox" direction="column">
                        <Box type="grayBox" fitContent>
                            🏆 수상경력 및 자격증
                        </Box>
                        <Stack direction="column" spacing={10}>
                            <Text>📝정보처리기사 23.11.15.</Text>
                            <Text>🥈[최우수상] 2023 대구를 빛내는 SW해커톤 - 앗!침에일기 23.11.22.</Text>
                            <Text>
                                🥇[대상] SW교육원 아이디어 해커톤 경진대회 (멋쟁이 사자처럼 11기) - 우동사리 23.10.31.
                            </Text>
                            <Text>🥉[장려상] 2023 경북대학교 K-디지털플랫폼 리빙랩 아이디어 공모전 - 23.12.8</Text>
                        </Stack>
                    </Box>
                    <Button variant="secondary" sx="margin-top: 2rem;" onClick={() => navigate('/work')}>
                        <Text>이력 자세히 보기</Text>
                    </Button>
                </Stack>
            </Stack>
        </>
    );
};
