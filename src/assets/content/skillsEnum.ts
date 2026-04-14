export const SKILL = {
  HTML: "HTML",
  CSS: "CSS",
  JAVASCRIPT: "JavaScript",
  REACT: "React",
  TYPESCRIPT: "TypeScript",
  NEXTJS: "NextJs",
  TAILWIND: "Tailwind",
  BOOTSTRAP: "Bootstrap",
  DART: "Dart",
  FLUTTER: "Flutter",
  GIT: "Git",
  GITHUB: "GitHub",
  SLACK: "Slack",
  NOTION: "Notion",
  FIGMA: "Figma",
  PHOTOSHOP: "Photoshop",
  ILLUSTRATOR: "Illustrator",
} as const;

export type SkillName = (typeof SKILL)[keyof typeof SKILL];

export default SKILL;
