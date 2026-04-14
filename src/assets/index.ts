import SKILL from "@/assets/content/skillsEnum";
import type { SkillInfo } from "@/types";

// document
import resume from "./doc/doc-resume.pdf";

export { resume };

// icon
import navIcon from "./icon/icon-nav.svg";
import companyIcon from "./icon/icon-company.svg";
import downLoadIcon from "./icon/icon-download.svg";
import linkIcon from "./icon/icon-link.svg";

export { navIcon, companyIcon, downLoadIcon, linkIcon };

// image - public
import examImage from "./images/example.png";
import brain from "./images/brain.png";

export { examImage, brain };

// image - Ability
import ability01 from "./images/ability/ability01.png";
import ability02 from "./images/ability/ability02.png";
import ability03 from "./images/ability/ability03.png";

export { ability01, ability02, ability03 };

// image - Project
import logoSosu from "./images/project/logo-sosu.png";
import logoHaewoo from "./images/project/logo-haewoo.png";
import logoBall from "./images/project/logo-ball.png";
import logoJjava from "./images/project/logo-jjava.png";

export { logoSosu, logoHaewoo, logoBall, logoJjava };

// image - Book
import bookHaewoo from "./images/book/book-haewoo.png";
import bookSosu from "./images/book/book-sosu.png";
import bookHnl from "./images/book/book-hnl.png";
import bookBall from "./images/book/book-ball.png";
import bookJjava from "./images/book/book-jjava.png";
import bookMarry from "./images/book/book-marry.png";
import bookFlutter from "./images/book/book-flutter.png";
import bookContent from "./images/book/book-contents.png";
import bookDoc from "./images/book/book-doc.png";
import bookInstagram from "./images/book/book-instagram.png";

export {
  bookHaewoo,
  bookSosu,
  bookHnl,
  bookBall,
  bookJjava,
  bookMarry,
  bookFlutter,
  bookContent,
  bookDoc,
  bookInstagram,
};

// skills
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

const skillsInfo: SkillInfo[] = [
  { name: SKILL.HTML, src: html, type: "Dev" },
  { name: SKILL.CSS, src: css, type: "Dev" },
  { name: SKILL.JAVASCRIPT, src: javaScript, type: "Dev" },
  { name: SKILL.REACT, src: react, type: "Dev" },
  { name: SKILL.TYPESCRIPT, src: typeJs, type: "Dev" },
  { name: SKILL.NEXTJS, src: nextJs, type: "Dev" },
  { name: SKILL.TAILWIND, src: tailwind, type: "Dev" },
  { name: SKILL.BOOTSTRAP, src: bootStrap, type: "Dev" },
  { name: SKILL.DART, src: dart, type: "Dev" },
  { name: SKILL.FLUTTER, src: flutter, type: "Dev" },
  { name: SKILL.GIT, src: git, type: "Collab" },
  { name: SKILL.GITHUB, src: gitHub, type: "Collab" },
  { name: SKILL.SLACK, src: slack, type: "Collab" },
  { name: SKILL.NOTION, src: notion, type: "Collab" },
  { name: SKILL.FIGMA, src: figma, type: "Design" },
  { name: SKILL.PHOTOSHOP, src: photoshop, type: "Design" },
  { name: SKILL.ILLUSTRATOR, src: illustrator, type: "Design" },
];

export { skillsInfo };
