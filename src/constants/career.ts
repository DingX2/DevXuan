export interface CareerItem {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    tags: string[];
    period: string;
    status: string;
    image?: string;
    links?: Array<{
        label: string;
        url: string;
    }>;
    highlights: string[];
    icon: string;
}

export const careerData: CareerItem[] = [
    {
        id: 'conference',
        title: '컨퍼런스 발표이력',
        subtitle: '개발 컨퍼런스 및 기술 발표 경험',
        description: '신기술 도입 경험과 실무 적용 사례 공유',
        tags: ['LCAP(Low-code)', 'React', 'Low-code', 'Conference'],
        period: '2025.01 ~ 현재',
        status: '진행중',
        icon: '🎤',
        links: [
            {
                label: 'Outsystems User Group 2025 링크',
                url: 'https://usergroups.outsystems.com/events/details/outsystems-inc-seoul-presents-osug-outsystems-user-group-seoul-vol3-july-2025/',
            },
        ],
        highlights: [
            'Outsystems User Group 2025 사외 컨퍼런스 "LCAP과 Cursor AI + MCP & Playwright를 활용한 테스트 자동화"',
            '사내 ITO사업부 Value-up 세미나 발표 3회',
            '이노베이션 Lab 기술 세미나 발표 : "AI Coding 실전 적용, Cursor AI 로 실현한 테스트 자동화"',
            '신기술 도입 경험과 실무 적용 사례 공유',
            '개발자 네트워킹 및 지식 공유 활동',
        ],
    },
    {
        id: 'crm-system',
        title: '현재 운영하고 있는 시스템 CRM',
        subtitle: 'HpsCRM - 한화파워시스템 고객관계관리 시스템',
        description: 'LCAP 기반의 대규모 CRM 프로젝트 개발 및 운영, 안정화',
        tags: ['LCAP', 'Outsystems', 'CRM', 'React', 'Oracle', 'AWS'],
        period: '2024.07 ~ 현재',
        status: '운영중',
        icon: '🏢',
        image: '/image/projects/Capstone.png',
        links: [
            {
                label: '프로젝트 상세 정보',
                url: 'https://www.hwlowcode.com/UseCasesSub?SubType=Power',
            },
        ],
        highlights: [
            '10년간 사용한 레거시 시스템을 고도화한 CRM 서비스 (약 1X억 프로젝트)',
            '전체 4XX건의 CSR/SR요청 처리 및 결함관리',
            'SOAP ERP(삼성SDS) + 사내시스템 인터페이스(I/F) 관리',
            '사내 신기술 LCAP 첫 대규모 프로젝트 투입',
        ],
    },
    {
        id: 'buzzle',
        title: '노코드 사이드 프로젝트 버즐',
        subtitle: '누구나 쉽게 홈페이지를 생성할 수 있는 노코드 플랫폼',
        description: '아토믹 디자인 패턴과 headless UI 기반 디자인 시스템 개발',
        tags: ['NoCode', 'Design System', 'Atomic Design', 'React', 'Next.js', 'Hono'],
        period: '2024.09 ~ 현재',
        status: '개발중',
        icon: '🔧',
        links: [
            {
                label: 'GitHub Repository',
                url: 'https://github.com/teamBuzzle',
            },
            {
                label: 'Design System',
                url: 'https://github.com/teamBuzzle/bds',
            },
        ],
        highlights: [
            'css-module을 아토믹 디자인 패턴으로 리팩토링',
            'headless UI 및 MUI기반 디자인 시스템 도입 및 마이그레이션',
            'pN룰 기반 코드리뷰 & Jira 이슈 관리',
            'Cursor AI + MCP 활용',
        ],
    },
];

export const careerStats = {
    totalProjects: '10+',
    totalExperience: '1년+',
    achievements: ['대규모 CRM 프로젝트 성공적 운영', '컨퍼런스 발표 및 기술 공유', '노코드 플랫폼 개발 진행중'],
};
