"use client";

import React from "react";
import { Box, Flex, Stack, Text, Title } from "@mantine/core";
import EduIconSvg from "../../../../public/assets/svg/EduIconSvg";

export interface EducationDetailItem {
  label: string;
  value: string;
}

export interface CoreEducationCardProps {
  title: string;
  institution: string;

  details?: readonly EducationDetailItem[];

  icon?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function CoreEducationCard({
  title,
  institution,
  details = [],
  className,
  style,
}: CoreEducationCardProps) {
  return (
    <Box
      className={className}
      pos="relative"
      style={{
        borderRadius: 22,
        padding: "28px 32px",
        background:
          "linear-gradient(180deg, var(--mantine-color-background-7) 0%, var(--mantine-color-background-8) 100%)",
        border: "1px solid var(--mantine-color-grid-9)",
        boxShadow: "0 10px 32px var(--portfolio-shadow-sheet)",
        overflow: "hidden",
        ...style,
      }}
    >
      <Flex gap={22} align="center" wrap="nowrap" pos="relative">
        <Box
          display={{ base: "none", md: "flex" }}
          style={{
            width: 128,
            height: 128,
            borderRadius: 18,
            alignItems: "center",
            justifyContent: "center",
            flex: "0 0 auto",
          }}
        >
          <EduIconSvg />
        </Box>

        <Stack gap={10} style={{ flex: 1, minWidth: 0 }}>
          <Title
            order={3}
            style={{
              color: "var(--portfolio-text-on-bg)",
              fontWeight: 800,
              fontSize: "clamp(18px, 2.2vw, 26px)",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {title}
          </Title>

          <Text
            fw={700}
            style={{
              color: "var(--portfolio-text-accent-soft)",
              fontSize: 16,
              lineHeight: 1.35,
            }}
          >
            {institution}
          </Text>

          <Stack gap={6}>
            {details.map((item, idx) => (
              <Flex key={`${item.label}-${idx}`} gap={8} wrap="wrap">
                <Text fw={700} fz={14} style={{ color: "var(--portfolio-text-body)" }}>
                  {item.label}:
                </Text>
                <Text fz={14} style={{ color: "var(--portfolio-text-soft)" }}>
                  {item.value}
                </Text>
              </Flex>
            ))}
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
}
