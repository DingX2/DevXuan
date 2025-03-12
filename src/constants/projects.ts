import type { ProjectItem } from '@/types';

export const projects: { [key: string]: ProjectItem } = {
    Hanwha: {
        category: '🌟 이력',
        organizationTitle: `한화시스템`,
        organizationContent: '신기술 부서 Outsystems LCAP #LowCode 시스템 개발 및 운영',
        organizationDuration: '2024-07 ~ 현재',
        title: `한화시스템 ICT 2024 상반기 신입사원`,
        project: true,
        projectTitle: 'HpsCRM',
        subtitle: 'LCAP기반 첫 대규모 프로젝트 안정화(11월 오픈)',
        hashtag: '#LowCode #Outsystems #React #C# #AWS #Nginx',
        projectImage: '/',
        projectDuration: '2024-04-01 ~ 2024-11-31 / 안정화 진행중',
        projectTeam: 'ITO(SM) 3명 + 프로젝트팀 지원',
        projectDetail: [
            `🔎 10년간 사용한 레거시 시스템을 고도화한 CRM 서비스(2024.04~2024.11 (약 1X억))
            
            엑셀을 통한 수기 작업을 시스템화 및 사업부 확대에 의의가 있어요.
            안건관리와 수주보고 등 영업직무에서 사용하는 고객관계관리 서비스에요.\n\n`,
            '- 사내 신기술 LCAP 첫 대규모 프로젝트',
            '- 전체 38X건의 CSR/SR요청, 12 월 말 이후 SM부서 5X/7X건 수행 / 결함관리',
            '- SOAP ERP(삼성SDS) + 사내시스템 인터페이스(I/F) 관리',
            '- 레퍼런스가 없는 신기술에 대처 및 최전방에서 사용자의 Needs 긴급 대응 및 운영배포',
            '- 4월 고도화 예정 / 리포트 고도화 디자인시스템 예정',
            '- 7, 8월 신기술 LCAP학습 및 9월 정규직 전환 후 투입\n\n',

            '🤔 LCAP(Low Code)란?',
            '- 공통 컴포넌트로 반복되는 작업을 줄여, 더 중요한 프로세스에 집중할 수 있는 개발 방법이에요.',
            '- 아토믹 디자인패턴과 Figma UI와 비슷한 React 환경 + Aggregate로 시각적인 SQL을 제공해요',
            '- MSA 모듈 설계로 Agile 방법론과 적합해요.',
        ],
    },
    Buzzle: {
        category: '🌟 이력',
        organizationTitle: `Buzzle`,
        organizationContent: '노코드 사이드 프로젝트',
        organizationDuration: '2024-09 ~ 현재',
        title: `노코드 사이드 프로젝트 + 디자인시스템`,
        project: true,
        projectTitle: 'Buzzle',
        subtitle: '누구나 쉽게 홈페이지를 생성할 수 있는 노코드 프로젝트',
        hashtag: '#NoCode #Design System',
        projectImage: '/',
        projectDuration: '2024-09.01 ~ 현재',
        projectTeam: 'FE(3명)',
        projectDetail: [
            `🔎 노코드 사이드 프로젝트 + 디자인 시스템
            
            누구나 쉽게 웹페이지를 생성할 수 있는 노코드 사이드 프로젝트에요. 
            LCAP과 유사한 아토믹 디자인 패턴 개발방법 및 기술적 디테일을 위해 진행하고 있어요.\n\n`,
            '- css-module을 아토믹 디자인 패턴으로 리팩토링',
            '- headless UI 및 MUI기반 디자인 시스템 도입 진행중',
            '- D사 디자인시스템팀 과제로 아토믹에 적합한 Props 통일 인사이트 습득 및 SSR 환경에 적합한 디자인 시스템 도입중',
            '- pN룰 기반 코드리뷰 & Jira 이슈\n\n',

            '✨링크',
            '- [Github] https://github.com/teamBuzzle',
            '- [Github/DesignSystem] https://github.com/teamBuzzle/bds\n\n',
        ],
    },
    Portfolio: {
        category: '🌟 이력',
        organizationTitle: `portfolio`,
        organizationContent: 'Solid.js로 제작한 포트폴리오 사이트',
        organizationDuration: '2024-07 ~ 2024.08',
        title: `포트폴리오 사이트`,
        project: true,
        projectTitle: '프론트엔드 포트폴리오',
        subtitle: 'FE뉴스에서 양방향 상태관리 Signal의 가능성을 보고 Solid.js로 제작',
        hashtag: '#1인개발',
        projectImage: '/',
        projectDuration: '2024-07',
        projectTeam: '본인',
        projectDetail: [
            `🔎 포트폴리오 사이트 개발
            
            FE뉴스를 보고 Signal의 양방향 상태관리의 가능성을 보고 기술적 호기심 및 운영할 목적으로 개인 포트폴리오 사이트를 개발했어요.
            구현하고 싶은 기능이 많으면서도 1인 개발이라 끊임없이 개선한 경험이에요.\n\n`,
            '- MUI 기반의 아토믹 디자인 패턴 적용',
            '- Canvas 클릭 이벤트 및 Autoplay 기능 구현',
            '- 애니메이션 모션 적용',
            '- 블로그 관리자페이지(Next.js) 및 게시판 구현, LCAP을 통한 확장 확인',
            '- 반응형 디자인',
            '- Lighthouse 최적화 \n\n',

            '✨링크',
            '- [Github/FrontEnd] https://github.com/DingX2/DevXuan',
            '- [Github/BackEnd] https://github.com/DingX2/DevXuan-backend',
        ],
    },
    Kakao: {
        category: '🌟 대외활동',
        organizationTitle: `카카오`,
        organizationContent: 'Vanila JS와 TS를 병행하고 있어요',
        organizationDuration: '2024-04 ~ 06',
        title: `카카오테크캠퍼스 2기 FE`,
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
            `🔎 UN의 지속 가능발전 목표 중 하나인 수중 생활을 구상하며 다량의 해양 쓰레기 문제를 접했어요.\n
            사용자가 사진을 업로드하면 Gemini API를 활용해 쓰레기와 어류의 종류를 분류하고 점수화하여 해양 생태계를 더욱 깨끗하게 유지하기 위해 보탬이 됐으면 좋겠어요.\n\n`,
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
            `🔎 회의 진행을 위한 화상 채팅 서비스에요.\n
            유연한 대처를 위한 MSA구조며 웹소켓 WebRTC 기반의 화상채팅이 가능해요.\n
           오늘의집 회원가입을 참고하여 실제 서비스와 유사한 이메일 인증 회원가입을 구현했고 예외처리에 집중했어요.\n\n`,
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
        organizationDuration: '2023.02.~2024.02.',
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
            `🔎'내 트리를 꾸며줘'와 같이 연말에 추억을 돌아보는 이벤트성 편지 전달 서비스에요.\n
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
            `🔎 초고령화 사회는 치매가 심각한 문제이며 두뇌 자극을 위한 일기 작성과 퀴즈 풀이가 예방에 도움 되는 사실을 찾았어요.
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
        projectDuration: '2023.09.07.~2023.09.17.',
        projectTeam: 'FE: 2명, BE: 3명',
        projectDetail: [
            `🔎 아마추어 사진가와 이용자를 연결해 주는 플랫폼이에요.\n
            사진작가들은 데뷔 기회를 얻을 수 있으며, 이용자들은 저렴한 가격으로 서비스를 이용할 수 있어요.\n
            동네 단위의 지역사회를 활성화하길 바랬어요.\n\n`,
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
            `🔎 수도권과 지방 사이에서 발생하는 디지털 격차를 해결하는 방법에서 학생 개발자와 현업자들의 양방향 데이터를 모집해서 해결하고 싶었어요.
            \n MBTI처럼 간단한 질문만으로 자신이 어떤 개발자가 적성에 맞는지 알 수 있는 서비스에요. \n
            개발자끼리 공유하며 인사이트를 넓혀가면 좋겠어요.\n\n`,
            `- 질문지창 모션 제작`,
            `- AWS + Nginx 배포`,
            `- 실 사용자 경험 7일 165명 피드백 반영`,
            `- 일시적 트래픽으로 인한 긴급점검`,
            `- vaporwave 스타일의 화면, Aseprite를 이용한 도트 디자인 제작`,
        ],
    },
    Capstone: {
        category: '🌟 논문',
        organizationTitle: `종합설계프로젝트`,
        organizationContent: `컴퓨터학부 산합협력 졸업프로젝트에요.`,
        organizationDuration: '2023.04.~2023.07.',
        title: '스마트폰 (Android, iPhone)기반의 N:N 위치 관제 고도화',
        project: true,
        projectTitle: '스마트폰 (Android, iPhone)기반의 N:N 위치 관제 고도화',
        subtitle: `아키텍처로 서버 부하를 줄이는 위치 정보 수집 서버 개발`,
        hashtag: '#Kotiln #IOCP #산학협력',
        projectImage: '/image/projects/Capstone.png',
        projectDuration: '2023.04.~2023.07.',
        projectTeam: 'FE: 3명, BE: 2명',
        projectDetail: [
            `🔎 컴퓨터공학 산학 협력 졸업프로젝트에요\n
            전국에서 운행 중인 기사 위치를 실시간으로 수집하면서 서버의 트래픽이 증가하고 메인 서비스의 부하가 발생함에 따라, 별도의 위치 정보 수집 서버를 개발했어요.\n
            단말기별 위치 정보 수집 모듈 개발 및 위치 정보 조회 시스템의 개발하는 프로젝트에요.\n\n`,
            `- TCP/UDP 프로토콜 소켓 연결을 이용한 라이더 앱 개발 및 관제 앱 개발 담당`,
            `- Fused Location Provider Client API(카카오 API)`,
            `- 대학원, 기업과 협업하면서 주기적인 미팅으로 간접적인 실무 체험`,
        ],
    },
    BadNews: {
        category: '🌟 해커톤',
        organizationTitle: `학술동아리 해달`,
        organizationContent: `제안을 받고 합류하였고 FE 팀원들 모두 GDSC 합격했어요.`,
        organizationDuration: '2023.08.23.~2023.09.08.',
        title: 'BadNews',
        project: true,
        projectTitle: 'BadNews',
        subtitle: `NLP 기술을 적용한 관심 뉴스 요약 서비스`,
        hashtag: '#NLP #Nginx #Redux #반응형디자인',
        projectImage: '/image/projects/BadNews.jpg',
        projectDuration: '2023.08.23.~2023.09.08.',
        projectTeam: 'FE: 3명, BE: 2명',
        projectDetail: [
            `🔎 아이디어톤으로 구성된 팀에 개발 제안을 받아 합류한 프로젝트에요.\n
            자연어처리(NLP) 기술을 적용한 관심 뉴스 요약 서비스며 좋지 않은 뉴스를 선별하려고 했어요.\n
             AWS AI분야 프리티어 서버용량 문제로 뉴스 요약까지 구현되었어요. \n
            백엔드 3명, 프론트 3명이 모르는 부분을 맞대가며 구현했어요.\n\n`,
            `- 코드 리팩토링 및 API 연결`,
            `- AWS + Nginx 배포`,
            `- Redux 적용 및 로그인 기능 구현`,
            `- 반응형 디자인 적용`,
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
