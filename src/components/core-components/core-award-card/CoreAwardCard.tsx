"use client";

import React from "react";
import { Box, Flex, Text } from "@mantine/core";
import Image, { type StaticImageData } from "next/image";
import TrophySvg from "../../../../public/assets/svg/trophy";

export type AwardImage = string | StaticImageData | React.ReactNode;

export interface AwardItem {
  title: string;
  image?: AwardImage;
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
  className,
  style,
}: CoreAwardCardProps) {
  return (
    <Box
      className={className}
      style={{
        borderRadius: 18,
        padding: 18,
        minHeight: 92,
        background:
          "linear-gradient(180deg, var(--mantine-color-background-7) 0%, var(--mantine-color-background-8) 100%)",
        border: "1px solid var(--mantine-color-grid-9)",
        boxShadow: "0 10px 28px var(--portfolio-shadow-sheet)",
        overflow: "hidden",
        ...style,
      }}
    >
      <Flex gap={16} align="center" wrap="nowrap">
        <Box
          style={{
            width: 96,
            height: 96,
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
              width={96}
              height={96}
              style={{ width: "100%", height: "100%", objectFit: "contain" }}
            />
          ) : (
            ((image as React.ReactNode) ?? <TrophySvg />)
          )}
        </Box>

        <Text fw={800} fz={22} lh={1.2} style={{ maxWidth: 360, color: "var(--portfolio-text-on-bg)" }}>
          {title}
        </Text>
      </Flex>
    </Box>
  );
}
