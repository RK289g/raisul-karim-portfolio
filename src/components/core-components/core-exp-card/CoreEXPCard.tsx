"use client";

import React from "react";
import { Accordion, Box, Flex, Stack, Text, Title } from "@mantine/core";
import { IconChevronDown } from "@tabler/icons-react";

export interface ExpItem {
  title: string;
  company: string;
  bullets: readonly string[];
}

export interface CoreExpCardProps extends ExpItem {
  className?: string;
  style?: React.CSSProperties;
  defaultOpen?: boolean; // pass true for first card
}

export default function CoreExpCard({
  title,
  company,
  bullets,
  className,
  style,
  defaultOpen = false,
}: CoreExpCardProps) {
  const hasBullets = bullets?.length > 0;

  const defaultValue: string | null =
    defaultOpen && hasBullets ? "details" : null;

  return (
    <Box
      className={className}
      style={{
        borderRadius: 16,
        padding: 22,
        background:
          "linear-gradient(180deg, var(--mantine-color-background-7) 0%, var(--mantine-color-background-8) 100%)",
        border: "1px solid var(--mantine-color-grid-9)",
        boxShadow: "0 10px 28px var(--portfolio-shadow-sheet)",
        overflow: "hidden",
        ...style,
      }}
    >
      {!hasBullets ? (
        <Box>
          <Title
            order={3}
            style={{
              color: "var(--portfolio-text-on-bg)",
              fontWeight: 800,
              lineHeight: 1.15,
              fontSize: "clamp(18px, 2vw, 22px)",
              margin: 0,
            }}
          >
            {title}
          </Title>

          <Text
            fw={700}
            style={{
              marginTop: 6,
              color: "var(--portfolio-text-accent-soft)",
              fontSize: 14,
              lineHeight: 1.35,
            }}
          >
            {company}
          </Text>
        </Box>
      ) : (
        <Accordion
          multiple={false}
          variant="unstyled"
          defaultValue={defaultValue}
          styles={{
            item: { border: "none" },
            control: { padding: 0, background: "transparent" },
            content: { paddingTop: 14 },
            chevron: { color: "var(--mantine-color-brand-5)" },
            label: { padding: 0 },
          }}
          chevron={<IconChevronDown size={18} />}
        >
          <Accordion.Item value="details">
            <Accordion.Control>
              <Flex align="flex-start" justify="space-between" gap={14}>
                <Box style={{ minWidth: 0 }}>
                  <Title
                    order={3}
                    style={{
                      color: "var(--portfolio-text-on-bg)",
                      fontWeight: 800,
                      lineHeight: 1.15,
                      fontSize: "clamp(18px, 2vw, 22px)",
                      margin: 0,
                    }}
                  >
                    {title}
                  </Title>

                  <Text
                    fw={700}
                    style={{
                      marginTop: 6,
                      color: "var(--portfolio-text-accent-soft)",
                      fontSize: 14,
                      lineHeight: 1.35,
                    }}
                  >
                    {company}
                  </Text>
                </Box>
              </Flex>
            </Accordion.Control>

            <Accordion.Panel>
              <Stack gap={10}>
                {bullets.map((b, i) => (
                  <Box key={i} style={{ display: "flex", gap: 10 }}>
                    <Box
                      style={{
                        width: 5,
                        height: 5,
                        borderRadius: 99,
                        marginTop: 8,
                        background: "var(--mantine-color-brand-4)",
                        flex: "0 0 auto",
                      }}
                    />
                    <Text fz={14} lh={1.6} style={{ margin: 0, color: "var(--portfolio-text-soft)" }}>
                      {b}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      )}
    </Box>
  );
}
