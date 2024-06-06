import type { ProjectItem } from '@/types';

export const projects: { [key: string]: ProjectItem } = {
    hanhwa: {
        category: '🌟 이력',
        organizationTitle: `한화시스템`,
        organizationContent: '입사예정이에요 꺅! 인턴 !!',
        organizationDuration: '2024-07 ~ ',
        title: `한화시스템 ICT 2024 상반기`,
        project: false,
    },
    kakao: {
        category: '🌟 대외활동',
        organizationTitle: `카카오`,
        organizationContent: 'Vanila JS와 TS를 병행하고 있어요',
        organizationDuration: '2024-04 ~ ',
        title: `카카오테크캠퍼스 2기`,
        project: false,
    },
    BlueMosaic: {
        category: '🌟 대외활동',
        organizationTitle: `Google Developer Social Clubs\n(GDSC) 3기`,
        organizationContent: '프로젝트와 세미나 위주로 진행했어요',
        organizationDuration: '2023-08 ~ 2024-09',
        title: null,
        project: true,
        projectTitle: 'BlueMosaic',
        subtitle: 'Gemini API / 이미지 인식 컬렉션 서비스',
        hashtag: '#1인FE개발 #zustand+swagger API객체리터럴최적화 #짧은기간',
        projectImage: '/image/projects/blueMosaic.gif',
        projectDuration: '2024-01-22 ~ 2024-02-26',
        projectTeam: 'FE: 1명, BE: 2명, AI: 1명',
        projectDetail: [
            ` UN의 지속 가능발전 목표 중 하나인 수중 생활을 구상하며 다량의 해양 쓰레기 문제를 접했어요.\n
            사용자가 사진을 업로드하면 Gemini API를 활용해 쓰레기와 어류의 종류를 분류하고 점수화하
            여 해양 생태계를 더욱 깨끗하게 유지하기 위해 보탬이 됐으면 좋겠어요.\n\n`,
            '- 스웨거 최적의 객체리터럴 방식으로 3분 내 BE 코드 확인 가능',
            '- zustand getState로 hook pattern 오류 방지 설계',
            '- 실시간 화면공유를 통해 API를 연결하여 프로젝트를 완수',
            '- squash and merge에서 기본으로 변경 팀원간 커밋메시지 확인 용이',
            '- Figma UI로 유저플로우 작성 및 시각적인 API 명세 요구',
            '- FE 1인이지만 깃허브 프로젝트 이슈, 커밋 컨벤션 정리',
            '- 노션으로 공동의 목표선정, 기획서 및 일정 정리로 프로젝트 영문소개와 영상 제작에 시간절약 및 투명성 보장',
            '- flex, grid로 반응형 컬렉션 화면 구현',
            '- BE 데이터 가공하여 업적 토글 구현',
            '- 한정적인 UI를 최대한 활용한 친구기능',
            '- 물결 라이브러리 적용 react-water-wave',
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
            `회의 진행을 위한 화상 채팅 서비스에요.\n
            유연한 대처를 위한 MSA구조며 웹소켓 WebRTC 기반의 화상채팅이 가능해요.\n
           오늘의집 회원가입을 참고하여 실제 서비스와 유사한 이메일 인증 회원가입을 구현했고 예외처
           리에 집중했어요.\n\n`,
            '- JWT 이메일 인증 실사용과 유사한 회원가입(8개예외처리)',
            '- React-query + Skeleton UI와 로딩 컴포넌트 비동기 처리',
            '- flex, grid로 반응형 홈 디자인 구현',
            '- zustand useStore로 객체화, 재사용성 향상 및 devTools 선택적 적용으로 보안 강화',
            '- Figma Design (반응형)',
            '- 재사용 가능 토스트알림구현',
        ],
    },
    HappyNewHere: {
        category: '🌟 학술동아리',
        organizationTitle: `IT 학술동아리 해달`,
        organizationContent: `GDSC x 해달 프로젝트로 친구들과 진행했어요\n
        교육운영진(C언어,리액트,알고리즘,프로젝트 부트캠프)를 맡았어요.`,
        organizationDuration: '2023.11.18.~2024.01.02. (2개월)',
        title: 'HappyNewHere',
        project: true,
        projectTitle: 'HappyNewHere',
        subtitle:
            '117명 사용자의 마음을 담은 우편함 / 1월 1일 Y2K와 유사한 버그 발생 타입스크립트 전향 / 예외처리 중요성 체감 / 유료홍보 자처 → 웹사이트당 방문비용 1294원 → 868원 절감 / 광고비 100%지출 → 48%지출 (인스타로직)',
        hashtag: '#실서비스 #유지보수',
        projectImage: '/image/projects/happyNewHereHome.gif',
        projectDuration: '2023.11.18.~2024.01.02. (2개월)',
        projectTeam: 'FE: 4명, PM: 1명, BE: 3명, 디자이너: 1명',
        projectDetail: [
            `'내 트리를 꾸며줘'와 같이 연말에 추억을 돌아보는 이벤트성 편지 전달 서비스에요.\n
            117명이 일주일간 편지를 작성했으며 1월 1일에 편지를 공개했어요. \n
           한 해를 돌아보며 전하지 못했던 따뜻한 마음이 전달되었길 바라요.\n\n`,
            '- 카카오톡 SNS 로그인 기능 (리다이렉트 페이지의 중요성)',
            '- 달력컴포넌트 제작, Y2K버그와 유사한 오류 발생 수정 타입스크립트 전향',
            '- 메세지 보기 기능 Redux 순차적인 연결',
            '- woff 로 폰트 최적화',
        ],
    },
    AhMorningDiary: {
        category: '🌟 해커톤',
        organizationTitle: `경북대학교 컴퓨터학부`,
        organizationContent: `디자이너와 함께 린하게 작업했어요`,
        organizationDuration: '2023.11.01.~2023.11.15.',
        title: '2023 대구를 빛내는 SW 해커톤 최우수상 수상',
        project: true,
        projectTitle: '앗!침에일기',
        subtitle: '치매 예방 음성 인식 일기 작성 및 퀴즈 풀이 SW',
        hashtag: '#STT #webSpeechAPI #시니어',
        projectImage: '/image/projects/AhMorningDiary.gif',
        projectDuration: '2023.11.01.~2023.11.15.',
        projectTeam: 'FE: 2명, BE: 2명',
        projectDetail: [
            `초고령화 사회는 치매가 심각한 문제이며 두뇌 자극을 위한 일기 작성과 퀴즈 풀이가 예방에 도움 되는 사실을 찾았어요.
            \n 가로모드와 같은 친화적인 UI를 제공하고 음성으로 일기를 작성이 가능하며 개인별 퀴즈 풀이 서비스를 통해 더욱 효과적인 치매 예방이 가능할 것으로 기대돼요.\n\n`,
            '- Vite를 활용한 모던 프론트엔드 개발 최적화',
            '- webSpeechAPI로 사용자가 음성으로 입력한 데이터를 실시간으로 텍스트로 변환하여 사용자 인터페이스의 접근성과 편의성 향상',
            '- OpenAPI를 사용하여 사용자가 작성한 일기 내용을 기반으로 사용자 맞춤 퀴즈 제공',
        ],
    },
    Udongsari: {
        category: '🌟 대외활동',
        organizationTitle: `멋쟁이사자처럼 11기`,
        organizationContent: `SW교육원 아이디어 해커톤 경진대회 ⭐ 대상 "우동사리"\n
        중앙해커톤 참가 "ShareIT"\n
        아이디어톤 위기 상황 대비 플랫폼 “문단속” 참가`,
        organizationDuration: '2023.01.~2024.01.',
        title: '우동사리',
        project: true,
        projectTitle: '우동사리(우리동네 사진가 리스트)',
        subtitle: `우리 동네 아마추어 사진가 매칭 플랫폼`,
        hashtag: '#STT #webSpeechAPI #시니어',
        projectImage: '/image/projects/Udongsari.png',
        projectDuration: '2023.11.01.~2023.11.15.',
        projectTeam: 'FE: 2명, BE: 3명',
        projectDetail: [
            `아마추어 사진가와 이용자를 연결해 주는 플랫폼이에요.\n
            사진작가들은 데뷔 기회를 얻을 수 있으며, 이용자들은 저렴한 가격으로 서비스를 이용할 수 있어요.\n
            동네 단위의 지역사회를 활성화하길 바랬어요.\n`,
            `- 웹소켓을 활용한 Chat, ChatHistory 연결 및 Web Socket Client를 활용한 채팅 구현`,
            `- Atomic Design 패턴을 적용하여 개발한 컴포넌트를 재사용의 편리함을 체감하고 두 프론트엔드의 코드 작성 스타일이 다름에도 통일된 디자인 패턴을 통해 시너지가 잘 맞을 수 있음을 확인`,
            `- 로그인 / 회원가입 페이지 구현`,
            `- Figma Component 명명 정리 및 CSS 추출 간편화`,
        ],
    },
    ShareIT: {
        category: '🌟 해커톤',
        organizationTitle: `멋쟁이사자처럼 11기`,
        organizationContent: `중앙해커톤이후 디벨롭하고 7일간 사용자 피드백을 받았어요.`,
        organizationDuration: '2023.07.01.~2023.11.11.',
        title: 'shareIT',
        project: true,
        projectTitle: 'ShareIT',
        subtitle: `디지털 격차 해소 플랫폼`,
        hashtag: '#Nginx #트래픽긴급대응 #서버의속도차이 #예외처리집중',
        projectImage: '/image/projects/shareIT.gif',
        projectDuration: '2023.07.01.~2023.11.11.',
        projectTeam: 'FE: 3명, BE: 2명',
        projectDetail: [
            `수도권과 지방 사이에서 발생하는 디지털 격차를 해결하는 방법에서 학생 개발자와 현업자들의 양방향 데이터를 모집해서 해결하고 싶었어요.
            \n MBTI처럼 간단한 질문만으로 자신이 어떤 개발자가 적성에 맞는지 알 수 있는 서비스에요. \n
            개발자끼리 공유하며 인사이트를 넓혀가면 좋겠어요.`,
            `- 질문지창 모션 제작`,
            `- AWS + Nginx 배포`,
            `- 실 사용자 경험 7일 165명 피드백 반영`,
            `- 일시적 트래픽으로 인한 긴급점검`,
            `- vaporwave 스타일의 화면, Aseprite를 이용한 도트 디자인 제작`,
        ],
    },
    RemoteInternship: {
        category: '🌟 대외활동',
        organizationTitle: `CJ올리브네트웍스`,
        organizationContent: `Bio IT에 관심있어 데이터 분석 및 시각화를 진행했어요.\n
        Remote Internship PBL 방식의 데이터 분석가 과정 수료 '도달, 공유, 좋아요, 페이지 뷰간 상관관계 인과관계 파악과 AI 적용을 했어요.\n
        "비즈니스 관점 강조, 텍스트 및 마케팅 경험으로 간주 가능"이라는 멘토님 피드백 결과를 받았어요`,
        organizationDuration: '2022.09.~2022.11.',
        title: 'Remote Internship 2기 Expert Track / DS',
        project: false,
    },
    other: {
        category: '🌟 대외활동',
        organizationTitle: `코드잇`,
        organizationContent: `- 코뮤니티 /파이썬 심화 : 크롤링편
        - 코뮤니티 / C언어 메이트 : 심화편
        - 코드잇 / 대학생 코딩 캠프 10기`,
        organizationDuration: '2021.09. ~ 2022.01.28.',
        title: 'Bio IT에 관심있어 참여했어요',
        project: false,
    },
};
