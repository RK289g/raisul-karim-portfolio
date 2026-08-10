"use client";

import React from "react";
import { Box, Container, Grid, Stack, Text, Title } from "@mantine/core";
import ProjectCard from "@/components/core-components/core-project-card/CoreProjectCard";
import { ProjectData } from "@/data-access/ProjectData";

export default function Projects() {
  return (
    <Box
      id="projects"
      style={{
        background: "var(--mantine-color-background-8)",
        paddingTop: 80,
        paddingBottom: 100,
      }}
    >
      <Container size="lg">
        {/* HEADER */}
        <Stack gap={8} mb={56}>
          <Text
            fz={14}
            fw={700}
            tt="uppercase"
            style={{
              letterSpacing: "0.12em",
              color: "var(--mantine-color-brand-5)",
            }}
          >
            Projects
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
            Projects & Publications
          </Title>
        </Stack>

        {/* PROJECT LIST */}
        <Grid gutter={32}>
          {ProjectData.map((p, i) => (
            <Grid.Col span={{ base: 12, sm: 6 }} key={i}>
              <ProjectCard {...p} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
