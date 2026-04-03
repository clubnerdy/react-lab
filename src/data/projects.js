import { logoSosu, logoHaewoo, logoBall, logoJjava } from "@/assets";
import SKILL from "@/assets/content/skillsEnum";

const careerHnl = [
  {
    id: 1,
    title: "주식회사 해우지엘에스 하이브리드앱 제작",
    date: "2024.05 - 2024.9",
    description: [
      "GPS 기반 실시간 물류조회 서비스 앱 제작",
      "웹 페이지, 앱 화면 기획 및 디자인, 퍼블리싱",
      "화주, 임직원, 운송자 대상 통합 물류 플랫폼",
    ],
    skills: [SKILL.HTML, SKILL.CSS, SKILL.JAVASCRIPT],
    link: "/",
    type: "dev",
  },
  {
    id: 2,
    title: "에이치앤엘홀딩스 홈페이지 제작",
    date: "2024.08 - 2024.9",
    description: [
      "자사 홈페이지 기획 및 디자인",
      "인터렉티브 반응형 웹 페이지 퍼블리싱",
      "화주, 임직원, 운송자 대상 통합 물류 플랫폼",
    ],
    skills: [SKILL.HTML, SKILL.CSS, SKILL.JAVASCRIPT],
    link: "/",
    type: "dev",
  },
  {
    id: 3,
    title: "자사 서비스 머니트리 웹 퍼블리싱",
    date: "2024.06 - 2024.8",
    description: ["자사에서 서비스하는 통합 광고 관리 플랫폼 페이지 제작"],
    skills: [SKILL.HTML, SKILL.CSS, SKILL.JAVASCRIPT],
    link: "/",
    type: "dev",
  },
  {
    id: 4,
    title: "피부과 소수의원 홈페이지 리브랜딩",
    date: "2024.05 - 2024.6",
    description: [
      "서울 성수동 위치 피부과 소수의원 홈페이지 리브랜딩",
      "메인페이지 / 시술 상세페이지 리디자인",
      "네이버 지도 API 추가로 네이버 플레이스 연동",
    ],
    skills: [SKILL.REACT, SKILL.NEXTJS, SKILL.TYPESCRIPT],
    link: "/",
    type: "dev",
  },
  {
    id: 5,
    title: "나비에이전시 홈페이지 제작",
    date: "2024.01",
    description: [
      "자사 플랫폼 홈페이지 기획 및 디자인",
      "인터렉티브 반응형 웹 페이지 퍼블리싱",
    ],
    skills: [SKILL.HTML, SKILL.CSS, SKILL.JAVASCRIPT],
    link: "/",
    type: "dev",
  },
  {
    id: 6,
    title: "자사 주얼리 브랜드 노바 브랜딩",
    date: "2024.10 - 2024.12",
    description: [
      "주얼리 브랜드 노바 로고 제작 및 아이덴티티 구축",
      "주얼리 상품 셀렉트 및 관리",
      "자사몰 기획 및 카페24 결제 시스템 세팅",
      "상품 및 모델 촬영 및 보정",
      "패키지 기획 및 디자인, 제작 관리",
    ],
    skills: "",
    link: "",
    type: "branding",
  },
  {
    id: 7,
    title: "브랜딩 및 인쇄물 제작",
    date: "",
    description: [
      "기업 로고 리브랜딩",
      "자사 상품 브로슈어 제작",
      "임직원 명함 디자인 및 제작 관리",
      "패키지 디자인 및 인쇄 퀄리티 관리",
    ],
    skills: "",
    link: "",
    type: "branding",
  },
  {
    id: 8,
    title: "실무 문서 디자인",
    date: "",
    description: [
      "대외용 회사소개서 및 영업 제안서 다수 기획 및 디자인",
      "영업 실무 목적의 맞춤형 제안서 PPT 디자인 및 구성",
      "브랜드에 최적화된 비주얼/카피 톤으로 회사 소개서 및 제안서 제작",
    ],
    skills: "",
    link: "",
    type: "branding",
  },
  {
    id: 9,
    title: "상세페이지 디자인",
    date: "",
    description: ["브랜드 이미지에 맞춘 상세페이지 디자인 및 썸네일 제작"],
    skills: "",
    link: "",
    type: "branding",
  },
  {
    id: 10,
    title: "블로그 관리",
    date: "",
    description: [
      "자사 블로그 관리 및 컨텐츠 제작",
      "세종TSI 세무사무소 블로그 기획",
      "세종TSI 블로그 스킨 디자인",
      "세종TSI 블로그 컨텐츠 디자인 및 제작",
    ],
    skills: "",
    link: "",
    type: "contents",
  },
  {
    id: 11,
    title: "숏폼 제작",
    date: "",
    description: [
      "지역 소상공인 대상 숏폼 제작",
      "현장 조사 및 영상 기획",
      "현장 촬영 및 상품 연출",
      "Adobe 툴을 활용한 영상 편집 및 TTS 활용 더빙 작업",
      "SNS 숏폼 업로드 및 계정 관리",
    ],
    skills: "",
    link: "",
    type: "contents",
  },
];
const careerMpr = [
  {
    id: 1,
    title: "광고 컨텐츠 디자인",
    description: [
      "브랜드 블로그 기획 및 컨텐츠 이미지 디자인",
      "브랜드 인스타그램 컨텐츠 이미지 디자인",
      "병/의원 원내 브로슈어 디자인",
    ],
  },
  {
    id: 2,
    title: "광고 컨텐츠 제작 및 발행",
    description: [
      "광고 키워드 도출 및 키워드 관련 브랜딩",
      "블로그 컨텐츠 및 인스타그램 컨텐츠 발행",
      "포털 기사 컨텐츠 제작 및 발행",
    ],
  },
  {
    id: 3,
    title: "광고 성과 분석",
    description: [
      "플랫폼 별 유입 / 조회 / 전환 지표 수집 및 비교 분석",
      "키워드 별 유입률, 콘텐츠 반응률 등 광고 효과 정기 모니터링",
      "분석 결과 기반 콘텐츠 개선 방향 도출 및 적용",
    ],
  },
];

const detailProjects = [
  {
    id: 1,
    imgUrl: logoSosu,
    label: "Live",
    title: "소수의원 홈페이지 리브랜딩",
    description:
      "성수동 위치 피부과 소수의원의 홈페이지 리브랜딩. 메인페이지와 시술 상세페이지 리디자인, 네이버 지도 API 추가로 네이버 플레이스 연동",
    skills: [SKILL.REACT, SKILL.TYPESCRIPT, SKILL.NEXTJS],
    link: "/",
    isLive: true,
  },
  {
    id: 2,
    imgUrl: logoHaewoo,
    label: "Live",
    title: "GPS 기반 실시간 물류 조회 서비스 해우GLS 하이브리드 앱 프론트 개발",
    description:
      "GPS를 기반으로 화주와 포워드사가 물류 이동 상태와 경로, 예상 시간을 확인할 수 있는 서비스를 제공. JavaScript 및 HTML, CSS로 제작되어 웹앱 형태로 크로스 브라우징 구현.",
    skills: [SKILL.HTML, SKILL.CSS, SKILL.JAVASCRIPT],
    link: "/",
    isLive: true,
  },
  {
    id: 3,
    imgUrl: logoBall,
    label: "Demo",
    title: "야구 예측 커뮤니티 앱 UX/UI 설계 및 프론트 개발",
    description:
      "Flutter로 개발한 야구 커뮤니티 앱. 경기 예측, 직관 동행, 커뮤니티 등 다양한 기능을 통합하여 팬들이 함께 즐길 수 있는 서비스를 제공하는 모바일 플랫폼.",
    skills: [SKILL.DART, SKILL.FLUTTER],
    link: "/",
    isLive: false,
  },
  {
    id: 4,
    imgUrl: logoJjava,
    label: "Demo",
    title: "JAVA 언어 학습용 블록코딩 앱 프론트 개발",
    description:
      "Flutter로 개발한 블록 코딩 앱. Google에서 제공하는 블록코딩 오픈소스인 Blockly를 활용한 커스텀 블록코딩 서비스 제공.고난이도의 블록코딩을 통한 사용자의 코딩 능력 향상과 모바일/태블릿 기기를 통한 접근성 높은 서비스 제공.",
    skills: [SKILL.DART, SKILL.FLUTTER],
    link: "/",
    isLive: false,
  },
];

export { careerHnl, careerMpr, detailProjects };
