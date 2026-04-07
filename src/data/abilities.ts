import { ability01, ability02, ability03 } from "@/assets";
import type { Ability } from "@/types";

const abilities: Ability[] = [
  {
    id: 1,
    imgUrl: ability01,
    title: "기획부터 구현까지",
    description:
      "아이디어를 구체화하는 기획부터 디자인, 퍼블리싱까지 혼자서도 제품의 흐름을 만들어낼 수 있습니다. 작은 디테일도 놓치지 않는 픽셀 단위 구현을 지향합니다.",
  },
  {
    id: 2,
    imgUrl: ability02,
    title: "함께 일하기 좋은 개발자",
    description:
      "크로스브라우징과 접근성을 꼼꼼히 챙기고, 유지보수하기 좋은 코드를 만들기 위해 고민합니다. 디자이너와 개발자 사이에서 양쪽의 언어를 이해하고 자연스럽게 조율할 수 있습니다.",
  },
  {
    id: 3,
    imgUrl: ability03,
    title: "협업과 커뮤니케이션",
    description:
      "Git과 Notion을 활용해 체계적으로 협업합니다. 디자인과 개발 사이의 연결을 매끄럽게 조율하며, 작업 과정과 결과물을 명확하게 공유할 수 있습니다.",
  },
];

export { abilities };
