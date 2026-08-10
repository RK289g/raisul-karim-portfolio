import React from "react";
import { Box, Flex, Stack, Text, Title } from "@mantine/core";
import { IconUsers } from "@tabler/icons-react";

export interface CoreLeadershipCardProps {
  title: string;
  organization: string;
  period: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function CoreLeadershipCard({
  title,
  organization,
  period,
  className,
  style,
}: CoreLeadershipCardProps) {
  return (
    <Box
      className={className}
      style={{
        borderRadius: 22,
        padding: 26,
        border: "1px solid var(--mantine-color-grid-9)",
        background:
          "linear-gradient(180deg, var(--mantine-color-background-7) 0%, var(--mantine-color-background-8) 100%)",
        boxShadow: "0 10px 32px var(--portfolio-shadow-sheet)",
        overflow: "hidden",
        ...style,
      }}
    >
      <Flex gap={22} align="center" wrap="nowrap">
        <Box
          style={{
            width: 64,
            height: 64,
            borderRadius: 14,
            border: "1px solid var(--mantine-color-grid-9)",
            background:
              "radial-gradient(circle at 30% 30%, var(--portfolio-primary-radial-medium), transparent 55%), var(--mantine-color-background-7)",
            display: "grid",
            placeItems: "center",
            flex: "0 0 auto",
          }}
        >
          <IconUsers size={30} color="var(--mantine-color-brand-5)" />
        </Box>

        <Stack gap={8} style={{ flex: 1, minWidth: 0 }}>
          <Text fw={700} fz={13} c="var(--mantine-color-brand-5)">
            {period}
          </Text>

          <Title
            order={3}
            style={{
              color: "var(--portfolio-text-on-bg)",
              fontWeight: 800,
              fontSize: "clamp(18px, 2.2vw, 24px)",
              lineHeight: 1.15,
              margin: 0,
            }}
          >
            {title}
          </Title>

          <Text fz={15} lh={1.5} style={{ color: "var(--portfolio-text-soft)" }}>
            {organization}
          </Text>
        </Stack>
      </Flex>
    </Box>
  );
}
