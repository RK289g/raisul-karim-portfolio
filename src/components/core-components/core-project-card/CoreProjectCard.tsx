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
  return (
    <Box style={{ perspective: 1200 }}>
      <motion.div
        whileHover={{ rotateY: 180 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        style={{
          width: "100%",
          minHeight: 260,
          position: "relative",
          transformStyle: "preserve-3d",
        }}
      >
        {/* FRONT */}
        <Box
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 18,
            padding: 18,
            background:
              "linear-gradient(180deg, var(--mantine-color-background-7) 0%, var(--mantine-color-background-8) 100%)",
            border: "1px solid var(--mantine-color-grid-9)",
            boxShadow: "0 12px 36px var(--portfolio-shadow-sheet)",
            backfaceVisibility: "hidden",
            overflow: "hidden",
          }}
        >
          <Flex gap={16} align="center" h="100%">
            <Box
              style={{
                width: 92,
                height: 92,
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
                  width={92}
                  height={92}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              ) : (
                <IconFileText
                  size={42}
                  color="var(--portfolio-text-accent-soft)"
                  stroke={1.6}
                />
              )}
            </Box>

            <Stack gap={8}>
              {subtitle && (
                <Text
                  fw={700}
                  fz={13}
                  tt="uppercase"
                  style={{ color: "var(--portfolio-text-accent-soft)" }}
                >
                  {subtitle}
                </Text>
              )}

              <Title
                order={3}
                fw={800}
                lh={1.2}
                style={{ color: "var(--portfolio-text-on-bg)" }}
              >
                {title}
              </Title>
            </Stack>
          </Flex>
        </Box>

        {/* BACK */}
        <Box
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: 18,
            padding: 20,
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            border: "1px solid var(--mantine-color-grid-9)",
            background:
              "linear-gradient(180deg, var(--mantine-color-background-7), var(--mantine-color-background-8))",
            boxShadow: "0 12px 36px var(--portfolio-shadow-sheet)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Stack gap={10}>
            {subtitle && (
              <Text
                fw={700}
                fz={13}
                tt="uppercase"
                style={{ color: "var(--portfolio-text-accent-soft)" }}
              >
                {subtitle}
              </Text>
            )}

            <Title
              order={4}
              fw={800}
              lh={1.25}
              style={{ color: "var(--portfolio-text-on-bg)" }}
            >
              {title}
            </Title>

            <Text fz={14} lh={1.55} style={{ color: "var(--portfolio-text-soft)" }}>
              {description}
            </Text>
          </Stack>

          <Stack gap={14}>
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
              }}
            >
              {repoLabel}
              <IconArrowUpRight size={16} />
            </Anchor>
          </Stack>
        </Box>
      </motion.div>
    </Box>
  );
}
