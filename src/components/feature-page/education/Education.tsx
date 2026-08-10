"use client";

import React from "react";
import { Box, Container, Stack, Title, Text } from "@mantine/core";
import CoreEducationCard from "@/components/core-components/core-education-card/CoreEducationCard";
import { EducationData } from "@/data-access/EducationData";

const Education = () => {
  return (
    <Box
      id="education"
      style={{
        position: "relative",
        paddingTop: 60,
        paddingBottom: 60,
        backgroundColor: "var(--mantine-color-background-8)",
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
            Education
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
            Academic Background
          </Title>
        </Stack>

        <Stack gap={40}>
          {EducationData.map((item) => (
            <CoreEducationCard
              key={`${item.title}-${item.institution}`}
              title={item.title}
              institution={item.institution}
              details={item.details}
            />
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

export default Education;
