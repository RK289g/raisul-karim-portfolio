"use client";

import React from "react";
import { Box, Container, Grid, Stack, Text, Title } from "@mantine/core";
import {
  IconBrandPython,
  IconBrandJavascript,
  IconBrandTypescript,
  IconCode,
  IconBrandCpp,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrain,
  IconChartBar,
  IconDatabase,
  IconBrandGit,
  IconTerminal2,
  IconApi,
  IconUsers,
  IconMessageCircle,
  IconClipboardList,
  IconUserCheck,
} from "@tabler/icons-react";
import { motion, type Variants } from "framer-motion";

const accent = "var(--mantine-color-brand-5)";
const iconSize = 30;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
  hover: {
    y: -8,
    scale: 1.03,
    boxShadow: "0 20px 40px var(--portfolio-shadow-deep)",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

function SkillCard({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <motion.div variants={cardVariants} whileHover="hover">
      <Box
        style={{
          borderRadius: 20,
          padding: 18,
          border: "1px solid var(--mantine-color-grid-9)",
          background:
            "linear-gradient(180deg, var(--mantine-color-background-7), var(--mantine-color-background-8))",
          textAlign: "center",
          cursor: "pointer",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 10px 28px var(--portfolio-shadow-sheet)",
        }}
      >
        <Box
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, var(--portfolio-primary-radial-soft), transparent 60%)",
            pointerEvents: "none",
          }}
        />

        <Stack gap={10} align="center">
          <Box
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              display: "grid",
              placeItems: "center",
              background:
                "linear-gradient(180deg, var(--portfolio-primary-gradient-top), var(--portfolio-primary-gradient-bottom))",
              border: "1px solid var(--portfolio-primary-border)",
              color: accent,
            }}
          >
            {icon}
          </Box>

          <Text fw={700} fz={13} style={{ color: "var(--portfolio-text-body)" }}>
            {label}
          </Text>
        </Stack>
      </Box>
    </motion.div>
  );
}

function SkillGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={itemVariants}>
      <Box>
        <Text fw={800} fz={16} mb={14} style={{ color: "var(--portfolio-text-body)" }}>
          {title}
        </Text>

        <motion.div variants={containerVariants}>
          <Grid gutter={18}>
            {React.Children.map(children, (child, i) => (
              <Grid.Col key={i} span={{ base: 4, sm: 2 }}>
                {child}
              </Grid.Col>
            ))}
          </Grid>
        </motion.div>
      </Box>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <Box
      id="skills"
      style={{
        background: "var(--mantine-color-background-9)",
        paddingTop: 80,
        paddingBottom: 80,
      }}
    >
      <Container size="lg">
        <Stack gap={8} mb={56}>
          <Text
            fz={14}
            fw={700}
            tt="uppercase"
            style={{
              letterSpacing: "0.12em",
              color: accent,
            }}
          >
            skills
          </Text>

          <Title
            order={2}
            fw={800}
            lh={1.1}
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              color: "var(--portfolio-text-on-bg)",
            }}
          >
            Expertise & Competencies
          </Title>
        </Stack>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <Stack gap={48}>
            <SkillGroup title="Programming">
              <SkillCard
                label="Python"
                icon={<IconBrandPython size={iconSize} color={accent} />}
              />
              <SkillCard
                label="JavaScript"
                icon={<IconBrandJavascript size={iconSize} color={accent} />}
              />
              <SkillCard
                label="TypeScript"
                icon={<IconBrandTypescript size={iconSize} color={accent} />}
              />
              <SkillCard
                label="C"
                icon={<IconCode size={iconSize} color={accent} />}
              />
              <SkillCard
                label="C++"
                icon={<IconBrandCpp size={iconSize} color={accent} />}
              />
            </SkillGroup>

            <SkillGroup title="Web Development">
              <SkillCard
                label="React"
                icon={<IconBrandReact size={iconSize} color={accent} />}
              />
              <SkillCard
                label="Next.js"
                icon={<IconBrandNextjs size={iconSize} color={accent} />}
              />
              <SkillCard
                label="Node.js"
                icon={<IconBrandNodejs size={iconSize} color={accent} />}
              />
            </SkillGroup>

            <SkillGroup title="Machine Learning">
              <SkillCard
                label="Scikit-Learn"
                icon={<IconBrain size={iconSize} color={accent} />}
              />
              <SkillCard
                label="NumPy"
                icon={<IconDatabase size={iconSize} color={accent} />}
              />
              <SkillCard
                label="Pandas"
                icon={<IconChartBar size={iconSize} color={accent} />}
              />
              <SkillCard
                label="Data Analysis"
                icon={<IconChartBar size={iconSize} color={accent} />}
              />
            </SkillGroup>

            <SkillGroup title="Tools">
              <SkillCard
                label="Git"
                icon={<IconBrandGit size={iconSize} color={accent} />}
              />
              <SkillCard
                label="Linux"
                icon={<IconTerminal2 size={iconSize} color={accent} />}
              />
              <SkillCard
                label="REST APIs"
                icon={<IconApi size={iconSize} color={accent} />}
              />
            </SkillGroup>

            <SkillGroup title="Personal Skills">
              <SkillCard
                label="Leadership"
                icon={<IconUserCheck size={iconSize} color={accent} />}
              />
              <SkillCard
                label="Teamwork"
                icon={<IconUsers size={iconSize} color={accent} />}
              />
              <SkillCard
                label="Communication"
                icon={<IconMessageCircle size={iconSize} color={accent} />}
              />
              <SkillCard
                label="Project Management"
                icon={<IconClipboardList size={iconSize} color={accent} />}
              />
              <SkillCard
                label="Critical Thinking"
                icon={<IconBrain size={iconSize} color={accent} />}
              />
            </SkillGroup>
          </Stack>
        </motion.div>
      </Container>
    </Box>
  );
}
