"use client";

import React from "react";
import { Box, Container, Grid, Stack, Text, Title } from "@mantine/core";
import CoreAwardCard from "@/components/core-components/core-award-card/CoreAwardCard";
import { AwardsData } from "@/data-access/AwardsData";

export default function Awards() {
  return (
    <Box
      id="awards"
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
              color: "var(--mantine-color-brand-5)",
            }}
          >
            Certifications
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
            Certifications & Language
          </Title>
        </Stack>

        {/* Cards */}
        <Grid gutter={24}>
          {AwardsData.map((a, idx) => (
            <Grid.Col key={`${a.title}-${idx}`} span={{ base: 12, sm: 6 }}>
              <CoreAwardCard title={a.title} subtitle={a.subtitle} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
