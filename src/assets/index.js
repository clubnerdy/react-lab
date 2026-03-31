import SKILL from "@/assets/content/skillsEnum";

// icon
import navIcon from "./icon/icon-nav.svg";
import companyIcon from "./icon/icon-company.svg";
import downLoadIcon from "./icon/icon-download.svg";
import linkIcon from "./icon/icon-link.svg";

export { navIcon, companyIcon, downLoadIcon, linkIcon };

// image
import examImage from "./images/example.png";
import brain from "./images/brain.png";

export { examImage, brain };

//skills
import html from "./images/skills/html.svg";
import css from "./images/skills/css.svg";
import javaScript from "./images/skills/js.svg";
import react from "./images/skills/react.svg";
import typeJs from "./images/skills/typejs.svg";
import nextJs from "./images/skills/next.svg";
import tailwind from "./images/skills/tailwind.svg";
import bootStrap from "./images/skills/bootstrap.svg";
import dart from "./images/skills/dart.svg";
import flutter from "./images/skills/flutter.svg";
import git from "./images/skills/git.svg";
import gitHub from "./images/skills/github.svg";
import slack from "./images/skills/slack.svg";
import figma from "./images/skills/figma.svg";
import notion from "./images/skills/notion.svg";
import photoshop from "./images/skills/photoshop.svg";
import illustrator from "./images/skills/illu.svg";

const skillsInfo = [
  { name: SKILL.HTML, src: html, type: "dev" },
  { name: SKILL.CSS, src: css, type: "dev" },
  { name: SKILL.JAVASCRIPT, src: javaScript, type: "dev" },
  { name: SKILL.REACT, src: react, type: "dev" },
  { name: SKILL.TYPESCRIPT, src: typeJs, type: "dev" },
  { name: SKILL.NEXTJS, src: nextJs, type: "dev" },
  { name: SKILL.TAILWIND, src: tailwind, type: "dev" },
  { name: SKILL.BOOTSTRAP, src: bootStrap, type: "dev" },
  { name: SKILL.DART, src: dart, type: "dev" },
  { name: SKILL.FLUTTER, src: flutter, type: "dev" },
  { name: SKILL.GIT, src: git, type: "collab" },
  { name: SKILL.GITHUB, src: gitHub, type: "collab" },
  { name: SKILL.SLACK, src: slack, type: "collab" },
  { name: SKILL.NOTION, src: notion, type: "collab" },
  { name: SKILL.FIGMA, src: figma, type: "design" },
  { name: SKILL.PHOTOSHOP, src: photoshop, type: "design" },
  { name: SKILL.ILLUSTRATOR, src: illustrator, type: "design" },
];

export { skillsInfo };
