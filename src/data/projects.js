import { examImage } from "@/assets";
import SKILL from "@/assets/content/skillsEnum";

// 임시 목업 데이터
// 추후 수정 필요

const careerProjects = [
  {
    id: 1,
    title: "주식회사 해우지엘에스 하이브리드앱 제작",
    date: "2024.05 - 2024.9",
    description:
      "GPS 기반 실시간 물류조회 서비스 앱 제작. 웹 페이지, 앱 화면 기획 및 디자인, 퍼블리싱. 화주, 임직원, 운송자 대상 통합 물류 플랫폼",
    skills: ["HTML", "CSS", "JavaScript"],
    link: "/",
  },
  {
    id: 2,
    title: "에이치앤엘홀딩스 홈페이지 제작",
    date: "2024.08 - 2024.9",
    description:
      "자사 홈페이지 기획 및 디자인. 인터렉티브 반응형 웹 페이지 퍼블리싱. 화주, 임직원, 운송자 대상 통합 물류 플랫폼",
    skills: ["HTML", "CSS", "JavaScript"],
    link: "/",
  },
  {
    id: 3,
    title: "자사 서비스 머니트리 웹 퍼블리싱",
    date: "2024.06 - 2024.8",
    description: "자사에서 서비스하는 통합 광고 관리 플랫폼 페이지 제작",
    skills: ["HTML", "CSS", "JavaScript"],
    link: "/",
  },
];

const detailProjects = [
  {
    id: 1,
    imgUrl: examImage,
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
    imgUrl: examImage,
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
    imgUrl: examImage,
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
    imgUrl: examImage,
    label: "Demo",
    title: "JAVA 언어 학습용 블록코딩 앱 프론트 개발",
    description:
      "Flutter로 개발한 블록 코딩 앱. Google에서 제공하는 블록코딩 오픈소스인 Blockly를 활용한 커스텀 블록코딩 서비스 제공.고난이도의 블록코딩을 통한 사용자의 코딩 능력 향상과 모바일/태블릿 기기를 통한 접근성 높은 서비스 제공.",
    skills: [SKILL.DART, SKILL.FLUTTER],
    link: "/",
    isLive: false,
  },
];

export { careerProjects, detailProjects };
