"use client";

import React from "react";
import { Button, ButtonProps, Box } from "@mantine/core";
import { motion, useReducedMotion } from "framer-motion";

interface CoreButtonProps extends Pick<
  ButtonProps,
  "loading" | "disabled" | "rightSection" | "leftSection" | "fullWidth"
> {
  title: string;
  variant?: "outline" | "underline" | "primary";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export default function CoreButton({
  title,
  variant = "primary",
  type = "button",
  onClick,
  rightSection,
  leftSection,
  fullWidth,
  ...props
}: CoreButtonProps) {
  const reduceMotion = useReducedMotion();

  const isUnderline = variant === "underline";
  const isPrimary = variant === "primary";
  const isOutline = variant === "outline";

  const OUTLINE = "var(--mantine-color-brand-5)";
  const GLOW = "var(--mantine-color-brand-7)";
  const ACCENT = "var(--mantine-color-brand-4)";

  const labelColor = isPrimary
    ? "var(--mantine-primary-color-contrast)"
    : isUnderline
      ? "var(--portfolio-text-on-bg)"
      : "var(--mantine-color-brand-6)";

  const buttonEl = (
    <Button
      type={type}
      onClick={onClick}
      fullWidth={fullWidth}
      rightSection={rightSection}
      leftSection={leftSection}
      variant={isUnderline ? "subtle" : isPrimary ? "filled" : "outline"}
      radius="md"
      px={{ base: "md", sm: "lg" }}
      fz={{ base: 14, sm: 16 }}
      fw={600}
      h="auto"
      bg={isPrimary ? "brand.5" : "transparent"}
      styles={{
        root: {
          paddingBlock: "10px",
          borderColor: isOutline ? OUTLINE : "transparent",
          backgroundColor: isPrimary ? OUTLINE : "transparent",
          display: "flex",
          alignItems: "center",
          color: labelColor,

          ...(isUnderline && {
            textDecoration: "underline",
            textUnderlineOffset: "4px",
          }),

          "&:hover": {
            backgroundColor: isPrimary
              ? "var(--mantine-color-brand-6)"
              : "transparent",
          },
        },
        inner: { alignItems: "center" },

        label: {
          lineHeight: "1.25",
          paddingBottom: 2,
          color: labelColor,
        },
      }}
      {...props}
    >
      {title}
    </Button>
  );

  if (!isOutline) return buttonEl;

  return (
    <Box
      pos="relative"
      display={fullWidth ? "block" : "inline-block"}
      style={{
        borderRadius: 12,
        overflow: "hidden",
      }}
    >
      {/* outline aura */}
      <Box
        pos="absolute"
        inset={0}
        style={{
          borderRadius: 12,
          pointerEvents: "none",
          zIndex: 1,
          boxShadow: `0 0 0 1px ${OUTLINE} inset`,
        }}
      />

      {/* runners (unchanged) */}
      {!reduceMotion && (
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: 2,
            width: "55%",
            borderRadius: 999,
            background: `linear-gradient(135deg, transparent, ${GLOW}, ${ACCENT}, transparent)`,
            boxShadow: `0 0 14px ${GLOW}`,
            opacity: 0.9,
            pointerEvents: "none",
            zIndex: 3,
            transform: "rotate(12deg)",
            transformOrigin: "left center",
          }}
          animate={{ x: ["-140%", "240%"], y: ["-40%", "40%"] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        />
      )}

      {!reduceMotion && (
        <motion.div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: 2,
            width: "55%",
            borderRadius: 999,
            background: `linear-gradient(315deg, transparent, ${GLOW}, ${ACCENT}, transparent)`,
            boxShadow: `0 0 14px ${GLOW}`,
            opacity: 0.9,
            pointerEvents: "none",
            zIndex: 3,
            transform: "rotate(-12deg)",
            transformOrigin: "left center",
          }}
          animate={{ x: ["240%", "-140%"], y: ["40%", "-40%"] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        />
      )}

      {!reduceMotion && (
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: 2,
            height: "55%",
            borderRadius: 999,
            background: `linear-gradient(180deg, transparent, ${GLOW}, ${ACCENT}, transparent)`,
            boxShadow: `0 0 14px ${GLOW}`,
            opacity: 0.75,
            pointerEvents: "none",
            zIndex: 3,
          }}
          animate={{ y: ["240%", "-140%"] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        />
      )}

      {!reduceMotion && (
        <motion.div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 2,
            height: "55%",
            borderRadius: 999,
            background: `linear-gradient(0deg, transparent, ${GLOW}, ${ACCENT}, transparent)`,
            boxShadow: `0 0 14px ${GLOW}`,
            opacity: 0.75,
            pointerEvents: "none",
            zIndex: 3,
          }}
          animate={{ y: ["-140%", "240%"] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
        />
      )}

      <Box pos="relative" style={{ zIndex: 2 }}>
        {buttonEl}
      </Box>
    </Box>
  );
}
