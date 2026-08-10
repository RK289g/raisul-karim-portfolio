import type { ProjectItem } from "@/components/core-components/core-project-card/CoreProjectCard";
import projectImg from "@/../public/assets/images/image1.png";

export const ProjectData = [
  {
    title:
      "KYC-Driven Cryptocurrency Wallet: A Solution to Regulatory Compliance",
    subtitle: "Conference Paper — ICCIT 2024",
    description:
      "Co-authored with Mehadi Hasan, Ovi Talukder, and Md Lysuzzaman. Published in the 27th International Conference on Computer and Information Technology (ICCIT), IEEE Xplore.",
    tech: [
      { label: "Blockchain" },
      { label: "Cryptography" },
      { label: "KYC" },
    ] as const,
    repoUrl: "https://doi.org/10.1109/ICCIT64611.2024.11022389",
    repoLabel: "IEEE Xplore",
    image: projectImg,
  },
  {
    title: "EPCT",
    subtitle: "Client Project",
    description:
      "Designed and developed the website for a client, including architecture and API integrations.",
    tech: [
      { label: "Web Development" },
      { label: "API Integration" },
      { label: "Architecture" },
    ] as const,
    repoUrl: "https://epctbd.com",
    repoLabel: "Visit Site",
    image: projectImg,
  },
  {
    title: "Bayt Architects",
    subtitle: "Client Project",
    description:
      "Designed and developed a responsive website for a client architecture firm.",
    tech: [
      { label: "React" },
      { label: "Responsive Design" },
      { label: "Frontend" },
    ] as const,
    repoUrl: "https://baytarchitects.com",
    repoLabel: "Visit Site",
    image: projectImg,
  },
  {
    title:
      "KYC-Driven Cryptocurrency Wallet: A Solution to Regulatory Compliance",
    subtitle: "Thesis",
    description:
      "Undergraduate thesis focused on a hybrid cryptocurrency wallet model integrating KYC, AML protocols, and regulatory controls for compliance-driven digital finance.",
    tech: [
      { label: "Blockchain" },
      { label: "Regulatory Compliance" },
      { label: "Security" },
    ] as const,
    repoUrl: "https://doi.org/10.1109/ICCIT64611.2024.11022389",
    repoLabel: "Related Paper",
    image: projectImg,
  },
] satisfies readonly ProjectItem[];
