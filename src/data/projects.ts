import type { StaticImageData } from "next/image";
import portfolioPreview from "../../public/projects/web-portofolio-preview.webp";

export type Project = {
  title: string;
  problem: string;
  role: string;
  stack: readonly string[];
  link: string;
  image: StaticImageData;
  year: string;
};

export const projects: readonly Project[] = [
  {
    title: "Web Portofolio",
    problem: "This personal portfolio website.",
    role: "Solo developer",
    stack: ["Next.js", "Tailwind", "motion"],
    link: "https://github.com/michaelyulianto/Web_Portofolio",
    image: portfolioPreview,
    year: "2025/2026",
  },
];
