"use client";

import React from "react";
import { Box, Flex, Stack, Text } from "@mantine/core";
import Image, { type StaticImageData } from "next/image";
import TrophySvg from "../../../../public/assets/svg/trophy";
import { motion } from "motion/react";

export type AwardImage = string | StaticImageData | React.ReactNode;

export interface AwardItem {
  title: string;
  image?: AwardImage;
  subtitle?: string;
}

export interface CoreAwardCardProps extends AwardItem {
  className?: string;
  style?: React.CSSProperties;
}

function isImageSrc(v: AwardImage): v is string | StaticImageData {
  return (
    typeof v === "string" || (typeof v === "object" && v !== null && "src" in v)
  );
}

export default function CoreAwardCard({
  title,
  image,
  subtitle,
  className,
  style,
}: CoreAwardCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      style={{ width: "100%", height: "100%" }}
    >
      <Box
        className={className}
        style={{
          height: "100%",
          borderRadius: 18,
          padding: 20,
          minHeight: 120,
          background:
            "linear-gradient(180deg, var(--mantine-color-background-7) 0%, var(--mantine-color-background-8) 100%)",
          border: "1px solid var(--mantine-color-grid-9)",
          boxShadow: "0 10px 28px var(--portfolio-shadow-sheet)",
          overflow: "hidden",
          position: "relative",
          ...style,
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

        <Flex
          gap={16}
          align="center"
          wrap="nowrap"
          style={{ position: "relative" }}
        >
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
            {image && isImageSrc(image) ? (
              <Image
                src={image}
                alt={title}
                width={72}
                height={72}
                style={{ width: "100%", height: "100%", objectFit: "contain" }}
              />
            ) : (
              ((image as React.ReactNode) ?? <TrophySvg />)
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

            <Text
              fw={800}
              fz={18}
              lh={1.3}
              style={{ color: "var(--portfolio-text-on-bg)" }}
            >
              {title}
            </Text>
          </Stack>
        </Flex>
      </Box>
    </motion.div>
  );
}
