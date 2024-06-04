import type { ProjectItem } from '@/types';

export const projects: { [key: string]: ProjectItem } = {
    kakao: {
        category: '🌟 대외활동',
        organizationTitle: `카카오`,
        organizationContent: 'Vanila JS와 TS를 병행하고 있어요',
        organizationDuration: '2024-04 ~ ',
        title: `카카오테크캠퍼스 2기`,
        project: false,
    },
    blueMosaic: {
        category: '🌟 대외활동',
        organizationTitle: `Google Developer Social Clubs\n(GDSC) 3기`,
        organizationContent: '프로젝트와 세미나 위주로 진행했어요',
        organizationDuration: '2023-08 ~ 2024-09',
        title: null,
        project: true,
        projectTitle: 'BlueMosaic',
        subtitle: 'Gemini API / 이미지 인식 컬렉션 서비스',
        hashtag: '#1인FE개발 #zustand+swagger API객체리터럴최적화 #GDSC Solution Challenge 출품작',
        projectImage: '/image/projects/blueMosaic.png',
        projectDuration: '2024-01-22 ~ 2024-02-26',
    },

    TadakTadak: {
        category: '🌟 대외활동',
        organizationTitle: `스마일게이트`,
        organizationContent: '2~6시 코어타임과 주간 정기회의로 진행했어요.',
        organizationDuration: '2024-01 ~ 2024-02',
        title: 'dev online camp',
        project: true,
        projectTitle: 'TadakTadak',
        subtitle: 'MSA구조 / 웹소켓 채팅 WebRTC / 화상채팅 서비스 / 이메일 인증 회원가입 / 홈화면 Grid',
        hashtag: '#JWT #zustand #MSA',
        projectImage: '/image/projects/tadakTadakHome.gif',
        projectDuration: '2024-01-08 ~ 2024-02-19',
    },

    MergeToon: {
        category: '🌟 개인 프로젝트',
        organizationTitle: `스마일게이트`,
        organizationContent: '2~6시 코어타임과 주간 정기회의로 진행했어요.',
        organizationDuration: '2024-01 ~ 2024-02',
        title: 'dev online camp',
        project: true,
        projectTitle: 'TadakTadak',
        subtitle: 'MSA구조 / 웹소켓 채팅 WebRTC / 화상채팅 서비스 / 이메일 인증 회원가입 / 홈화면 Grid',
        hashtag: '#JWT #zustand #MSA',
        projectImage: '/image/projects/tadakTadakHome.gif',
        projectDuration: '2024-01-08 ~ 2024-02-19',
    },
};
