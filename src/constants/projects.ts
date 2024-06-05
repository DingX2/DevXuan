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
        hashtag: '#1인FE개발 #zustand+swagger API객체리터럴최적화 #짧은기간',
        projectImage: '/image/projects/blueMosaic.png',
        projectDuration: '2024-01-22 ~ 2024-02-26',
        projectTeam: 'FE: 1명, BE: 2명, AI: 1명',
        projectDetail: [
            '스웨거 최적의 객체리터럴 방식으로 3분 내 BE 코드 확인 가능',
            'zustand getState로 hook pattern 오류 방지 설계',
            '실시간 화면공유를 통해 API를 연결하여 프로젝트를 완수',
            'squash and merge에서 기본으로 변경 팀원간 커밋메시지 확인 용이',
            'Figma UI로 유저플로우 작성 및 시각적인 API 명세 요구',
            'FE 1인이지만 깃허브 프로젝트 이슈, 커밋 컨벤션 정리',
            '노션으로 공동의 목표선정, 기획서 및 일정 정리로 프로젝트 영문소개와 영상 제작에 시간절약 및 투명성 보장',
            'flex, grid로 반응형 컬렉션 화면 구현',
            'BE 데이터 가공하여 업적 토글 구현',
            '한정적인 UI를 최대한 활용한 친구기능',
            '물결 라이브러리 적용 react-water-wave',
        ],
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
        projectTeam: 'FE: 3명, BE: 3명',
        projectDetail: [
            'JWT 이메일 인증 실사용과 유사한 회원가입(8개예외처리)',
            'React-query + Skeleton UI와 로딩 컴포넌트 비동기 처리',
            'flex, grid로 반응형 홈 디자인 구현',
            'zustand useStore로 객체화, 재사용성 향상 및 devTools 선택적 적용으로 보안 강화',
            'Figma Design (반응형)',
            '재사용 가능 토스트알림구현',
        ],
    },
    HappyNewHere: {
        category: '🌟 동아리 프로젝트',
        organizationTitle: `IT 학술동아리 해달`,
        organizationContent: '2~6시 코어타임과 주간 정기회의로 진행했어요.',
        organizationDuration: '2024-01 ~ 2024-02',
        title: 'dev online camp',
        project: true,
        projectTitle: 'TadakTadak',
        subtitle: 'MSA구조 / 웹소켓 채팅 WebRTC / 화상채팅 서비스 / 이메일 인증 회원가입 / 홈화면 Grid',
        hashtag: '#JWT #zustand #MSA',
        projectImage: '/image/projects/tadakTadakHome.gif',
        projectDuration: '2024-01-08 ~ 2024-02-19',
        projectTeam: 'FE: 3명, BE: 3명',
        projectDetail: [
            'JWT 이메일 인증 실사용과 유사한 회원가입(8개예외처리)',
            'React-query + Skeleton UI와 로딩 컴포넌트 비동기 처리',
            'flex, grid로 반응형 홈 디자인 구현',
            'zustand useStore로 객체화, 재사용성 향상 및 devTools 선택적 적용으로 보안 강화',
            'Figma Design (반응형)',
            '재사용 가능 토스트알림구현',
        ],
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
