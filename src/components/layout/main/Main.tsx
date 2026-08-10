"use client";
import { Box } from "@mantine/core";
import dynamic from "next/dynamic";

const HeroSection = dynamic(
  () => import("@/components/feature-page/hero-section/HeroSection"),
  { ssr: false },
);

const Education = dynamic(
  () => import("@/components/feature-page/education/Education"),
  { ssr: false },
);

const Experience = dynamic(
  () => import("@/components/feature-page/experience/Experience"),
  { ssr: false },
);

const Projects = dynamic(
  () => import("@/components/feature-page/projects/Projects"),
  { ssr: false },
);

const Awards = dynamic(
  () => import("@/components/feature-page/awards/Awards"),
  { ssr: false },
);

const Leadership = dynamic(
  () => import("@/components/feature-page/leadership/Leadership"),
  {
    ssr: false,
  },
);

const Skills = dynamic(
  () => import("@/components/feature-page/skills/Skills"),
  { ssr: false },
);

const Contact = dynamic(
  () => import("@/components/feature-page/contact/Contact"),
  { ssr: false },
);

const Main = () => {
  return (
    <Box>
      <HeroSection />
      <Education />
      <Experience />
      <Projects />
      <Awards />
      <Leadership />
      <Skills />
      <Contact />
    </Box>
  );
};

export default Main;
