"use client";

import React from "react";
import { Box, Container, Flex, Stack, Text, Title } from "@mantine/core";

import CoreExpCard from "@/components/core-components/core-exp-card/CoreEXPCard";
import { ExperienceData } from "@/data-access/ExperienceData";

type Side = "left" | "right";

function TimelineDot({ icon }: { icon?: React.ReactNode }) {
  return (
    <Box
      style={{
        width: 44,
        height: 44,
        borderRadius: 999,
        background: "var(--portfolio-dot-outer)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid var(--mantine-color-grid-9)",
        flex: "0 0 auto",
      }}
    >
      <Box
        style={{
          width: 34,
          height: 34,
          borderRadius: 999,
          background: "var(--mantine-color-background-7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid var(--mantine-color-grid-9)",
          color: "var(--portfolio-text-on-bg)",
          fontSize: 12,
          fontWeight: 800,
          letterSpacing: 0.6,
        }}
      >
        {icon}
      </Box>
    </Box>
  );
}

export default function Experience() {
  return (
    <Box
      id="experience"
      style={{
        position: "relative",
        paddingTop: 60,
        paddingBottom: 60,
        background: "var(--mantine-color-background-9)",
      }}
    >
      <Container size="lg">
        {/* Title */}
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
            Experience
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
            Professional Journey
          </Title>
        </Stack>

        <Box pos="relative">
          {/* ✅ Desktop center line */}
          <Box
            display={{ base: "none", md: "block" }}
            aria-hidden
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: "50%",
              transform: "translateX(-50%)",
              width: 2,
              background: "var(--portfolio-timeline-line)",
              opacity: 0.85,
            }}
          />

          <Box
            display={{ base: "block", md: "none" }}
            aria-hidden
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 18,
              width: 2,
              background: "var(--portfolio-timeline-line)",
              opacity: 0.55,
            }}
          />

          <Stack gap={48}>
            {ExperienceData.map((item, idx) => {
              const side = item.side as Side;

              return (
                <Box key={item.id} pos="relative">
                  {/* ✅ Desktop layout */}
                  <Box display={{ base: "none", md: "block" }}>
                    <Flex gap={24} align="center" justify="space-between">
                      <Box
                        style={{
                          width: "100%",
                          maxWidth: 520,
                          paddingRight: side === "left" ? 56 : 0,
                          paddingLeft: side === "right" ? 56 : 0,
                        }}
                        ml={side === "right" ? "auto" : undefined}
                        mr={side === "left" ? "auto" : undefined}
                      >
                        <CoreExpCard
                          title={item.title}
                          company={item.company}
                          bullets={item.bullets}
                          defaultOpen={idx === 0} 
                        />
                      </Box>

                      {/* Center dot */}
                      <Box
                        style={{
                          position: "absolute",
                          left: "50%",
                          transform: "translateX(-50%)",
                          top: 18,
                        }}
                      >
                        <TimelineDot icon={item.icon} />
                      </Box>

                      {/* Date (kept) */}
                      <Box
                        style={{
                          position: "absolute",
                          left: "50%",
                          top: 28,
                          transform:
                            side === "left"
                              ? "translateX(70px)"
                              : "translateX(-290px)",
                          width: 220,
                          textAlign: side === "left" ? "left" : "right",
                        }}
                      >
                        <Text fz={13} fw={700} style={{ color: "var(--portfolio-text-soft)" }}>
                          {item.date}
                        </Text>
                      </Box>
                    </Flex>
                  </Box>

                  {/* ✅ Mobile/Tablet layout */}
                  <Box display={{ base: "block", md: "none" }}>
                    <Flex align="flex-start" gap={16}>
                      {/* left dot */}
                      <Box mt={6}>
                        <TimelineDot icon={item.icon} />
                      </Box>

                      <Box style={{ flex: 1, minWidth: 0 }}>
                        {/* Date (kept) */}
                        <Text
                          fz={13}
                          fw={700}
                          style={{
                            marginBottom: 10,
                            color: "var(--portfolio-text-soft)",
                          }}
                        >
                          {item.date}
                        </Text>

                        <CoreExpCard
                          title={item.title}
                          company={item.company}
                          bullets={item.bullets}
                          defaultOpen={idx === 0}
                        />
                      </Box>
                    </Flex>
                  </Box>
                </Box>
              );
            })}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
