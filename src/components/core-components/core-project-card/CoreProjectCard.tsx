"use client";

import type { StaticImageData } from "next/image";
import Image from "next/image";
import { Box, Stack, Text, Title, Anchor, Flex } from "@mantine/core";
import { IconArrowUpRight, IconFileText } from "@tabler/icons-react";
import { motion } from "framer-motion";

export type ProjectImage = string | StaticImageData;

export interface ProjectItem {
  title: string;
  subtitle?: string;
  description: string;
  tech: readonly { label: string }[];
  repoUrl: string;
  image?: ProjectImage;
  repoLabel?: string;
}

export default function ProjectCard({
  title,
  subtitle,
  description,
  tech,
  repoUrl,
  repoLabel = "View Details",
  image,
}: ProjectItem) {
  const hasLink = Boolean(repoUrl?.trim());

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Box
        style={{
          height: "100%",
          minHeight: 260,
          borderRadius: 18,
          padding: 22,
          border: "1px solid var(--mantine-color-grid-9)",
          background:
            "linear-gradient(180deg, var(--mantine-color-background-7) 0%, var(--mantine-color-background-8) 100%)",
          boxShadow: "0 12px 36px var(--portfolio-shadow-sheet)",
          display: "flex",
          flexDirection: "column",
          gap: 18,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <Box
          aria-hidden
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at top left, var(--portfolio-primary-radial-soft), transparent 55%)",
            pointerEvents: "none",
          }}
        />

        <Flex gap={16} align="flex-start" wrap="nowrap" style={{ position: "relative" }}>
          <Box
            style={{
              width: 72,
              height: 72,
              borderRadius: 14,
              border: "1px solid var(--mantine-color-grid-9)",
              background: "var(--mantine-color-background-7)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flex: "0 0 auto",
              overflow: "hidden",
            }}
          >
            {image ? (
              <Image
                src={image}
                alt={title}
                width={72}
                height={72}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              <IconFileText
                size={34}
                color="var(--portfolio-text-accent-soft)"
                stroke={1.6}
              />
            )}
          </Box>

          <Stack gap={6} style={{ flex: 1, minWidth: 0 }}>
            {subtitle && (
              <Text
                fw={700}
                fz={12}
                tt="uppercase"
                style={{
                  letterSpacing: "0.08em",
                  color: "var(--portfolio-text-accent-soft)",
                }}
              >
                {subtitle}
              </Text>
            )}

            <Title
              order={3}
              fw={800}
              lh={1.25}
              style={{
                color: "var(--portfolio-text-on-bg)",
                fontSize: "clamp(16px, 1.6vw, 20px)",
                margin: 0,
              }}
            >
              {title}
            </Title>
          </Stack>
        </Flex>

        <Text
          fz={14}
          lh={1.55}
          style={{
            color: "var(--portfolio-text-soft)",
            position: "relative",
            flex: 1,
          }}
        >
          {description}
        </Text>

        <Stack gap={14} style={{ position: "relative", marginTop: "auto" }}>
          <Flex gap={8} wrap="wrap">
            {tech.map((t, i) => (
              <Box
                key={i}
                style={{
                  padding: "5px 10px",
                  borderRadius: 999,
                  border: "1px solid var(--mantine-color-grid-9)",
                  fontSize: 11,
                  color: "var(--portfolio-text-on-bg)",
                  background: "var(--portfolio-chip-bg)",
                }}
              >
                {t.label}
              </Box>
            ))}
          </Flex>

          {hasLink && (
            <Anchor
              href={repoUrl}
              target="_blank"
              c="brand.5"
              fw={700}
              style={{
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                width: "fit-content",
              }}
            >
              {repoLabel}
              <IconArrowUpRight size={16} />
            </Anchor>
          )}
        </Stack>
      </Box>
    </motion.div>
  );
}
