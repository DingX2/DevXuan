export interface CareerHighlights {
    problem: string[];
    solution: string[];
    result: string[];
}

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
    highlights: CareerHighlights;
    icon: string;
}

export const careerSummary = [
    '업무와 개발 사이의 간극을 메우고, 반복적인 작업을 자동화와 공통화로 구조화하는 개발자입니다.',
    '피드백을 통해 구조를 개선하고, 더 몰입할 수 있는 개발 환경을 만들어갑니다.',
];

export const careerOneLine = '업무를 코드로 바꾸는 개발자';

export const careerData: CareerItem[] = [
    {
        id: 'ai-test-automation',
        title: 'AI 기반 테스트 자동화 플랫폼',
        subtitle: '개발 리딩 및 아키텍처 설계',
        description: '엑셀·자연어 기반 테스트 시나리오를 코드로 변환하는 AI 파이프라인 설계 및 구현',
        tags: ['React', 'FastAPI', 'Playwright', 'RAG', 'Vector DB', 'OutSystems', 'MCP'],
        period: '2025.04 ~ 현재',
        status: '개발중',
        icon: '🚀',
        highlights: {
            problem: ['반복적인 테스트 및 수작업 검증으로 인한 비효율', '테스트 기준의 비일관성'],
            solution: [
                '엑셀 및 자연어 기반 테스트 시나리오를 코드로 변환하는 파이프라인 설계 (React + FastAPI)',
                'Jira / Confluence / Figma와 MCP 연동, Local MCP 서버 설계 및 구현',
                'Pro-code + Low-code(OutSystems) 환경에 적용 가능한 테스트 자동화 구조 설계',
                'RAG + Vector DB 기반 컨텍스트 참조 구조 도입 및 Playwright 기반 자동화 테스트 구축',
                'Low-code DOM 제약을 고려한 안정적인 선택자/시나리오 전략 수립',
                '테스트 시나리오를 재사용 가능한 단위로 구조화하여 확장성 확보',
            ],
            result: [
                '테스트 재현성 및 정확도 향상, QA 프로세스 표준화',
                '테스트 커버리지 확대 및 반복 테스트 자동화 기반 구축',
                '반복 테스트 작성 비용 감소 및 개발 생산성 향상',
                '신입사원 1주년 프로젝트 최우수상(1위)',
                '사내외 컨퍼런스 발표(OutSystems User Group Seoul) 및 기술 세미나 진행',
            ],
        },
    },
    {
        id: 'legal-management-system',
        title: '법무관리시스템 개발 PL',
        subtitle: '프로젝트 리딩 및 프론트엔드 개발',
        description: 'OCR 기반 문서 인식 및 AI 요약/비교 기능 PoC 구현, DRM 연계 보안 요구 대응',
        tags: ['React', 'OCR', 'AI API', 'DRM', 'Cubeone', 'OutSystems'],
        period: '2025.11 ~ 2026.02',
        status: '완료',
        icon: '📄',
        highlights: {
            problem: [
                '법무 업무 특성상 높은 정확도와 보안 요구',
                'DRM 및 내부 시스템 연계 및 권한으로 인한 개발 복잡도 증가',
            ],
            solution: [
                'OCR 기반 문서 인식 및 AI 요약/비교 기능 PoC 프론트엔드 구현',
                '문서 비교 및 검토 과정을 자동화 가능한 구조로 설계',
                'DRM 및 OutSystems Extension 연계를 통해 요구사항 대응',
            ],
            result: [
                '문서 검토 및 비교 업무 자동화 기반 구축',
                '반복 검증 업무 감소 및 처리 시간 단축',
                '복잡한 인프라 환경에서도 안정적인 기능 구현 경험 확보',
            ],
        },
    },
    {
        id: 'common-module-erp',
        title: '공통모듈 고도화 & ERP 포털 PL',
        subtitle: '프로젝트 리더(PL)',
        description: '기능 중복 제거 및 코드 기준 표준화를 통한 개발 품질 체계 구축',
        tags: ['OutSystems', 'React', 'TypeScript', 'REST/SOAP', 'Playwright'],
        period: '2026.03 ~ 현재',
        status: '진행중',
        icon: '🧩',
        highlights: {
            problem: [
                '기능 중복 개발 및 코드 기준 부재로 인한 품질 편차',
                '시스템 간 UI/구조 불일치로 인한 유지보수 비용 증가',
            ],
            solution: [
                '회계포털 한정 공통 기능 구조 설계 및 개발 리딩',
                '공통 모듈 설계 및 기능 구조화로 중복 개발 제거',
                '코드 규격 및 개발 샘플 정의로 개발 기준 표준화',
                '코드리뷰 Agent 및 테스트 자동화 도입으로 품질 관리 체계 구축',
                '분리된 디자인 시스템과 OutSystems UI Kit 간 정합성 문제 해결 주도',
            ],
            result: [
                '개발 기준 표준화 및 품질 편차 감소',
                '유지보수성 향상 및 개발 속도 개선',
                '팀 전체 개발 생산성 향상',
            ],
        },
    },
];

export const careerStats = {
    totalProjects: '3+',
    totalExperience: '1년+',
};
