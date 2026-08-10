import React from "react";
import { Box, Container, Grid, Stack, Text, Title } from "@mantine/core";
import { LeadershipData } from "@/data-access/LeadershipData";
import CoreLeadershipCard from "@/components/core-components/core-leadership-card/CoreLeadershipCard";

export default function Leadership() {
  const count = LeadershipData.length;
  const isOdd = count % 2 === 1;

  return (
    <Box
      id="leadership"
      style={{
        background: "var(--mantine-color-background-8)",
        paddingTop: 80,
        paddingBottom: 100,
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
            Leadership
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
            Leadership & Community
          </Title>
        </Stack>

        <Grid gutter={28}>
          {LeadershipData.map((l, idx) => {
            const isLast = idx === count - 1;
            const centerOdd = isOdd && isLast;

            return (
              <Grid.Col
                key={`${l.title}-${idx}`}
                span={{ base: 12, md: 6 }}
                style={centerOdd ? { marginInline: "auto" } : undefined}
              >
                <CoreLeadershipCard
                  title={l.title}
                  organization={l.organization}
                  period={l.period}
                />
              </Grid.Col>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
