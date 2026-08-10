"use client";

import React from "react";
import {
  Anchor,
  Box,
  Container,
  Flex,
  Group,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import {
  IconBrandLinkedin,
  IconBrandGithub,
} from "@tabler/icons-react";
import { plusJakarta, inter } from "@/app/font";

const accent = "var(--mantine-color-brand-5)";
const onBg = "var(--portfolio-text-on-bg)";

function SocialIcon({
  href,
  icon,
  label,
  boxSize = 44,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  boxSize?: number;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      style={{ textDecoration: "none" }}
    >
      <Box
        style={{
          width: boxSize,
          height: boxSize,
          borderRadius: 12,
          display: "grid",
          placeItems: "center",
          background: "var(--mantine-color-background-7)",
          border: "1px solid var(--mantine-color-grid-9)",
          color: onBg,
          transition: "transform 0.15s ease, border-color 0.15s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.borderColor = "var(--portfolio-border-hover-brand)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.borderColor = "var(--mantine-color-grid-9)";
        }}
      >
        {icon}
      </Box>
    </a>
  );
}

export default function Footer() {
  return (
    <Box
      component="footer"
      style={{
        background: "var(--mantine-color-background-8)",
        borderTop: "0.5px solid var(--mantine-color-grid-9)",
        paddingTop: 70,
        paddingBottom: 22,
      }}
    >
      <Container size="lg">
        <Stack align="center" gap={22}>
          {/* Name */}
          <Title
            order={2}
            className={plusJakarta.className}
            style={{
              color: onBg,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              fontSize: "clamp(26px, 3vw, 38px)",
              lineHeight: 1.1,
              margin: 0,
            }}
          >
            Raisul Karim Saju
          </Title>

          {/* Nav links */}
          <Group gap={28}>
            {[
              { label: "Home", href: "/#home" },
              { label: "About", href: "/#education" },
              { label: "Projects", href: "/#projects" },
            ].map((item) => (
              <Anchor
                key={item.href}
                href={item.href}
                className={inter.className}
                style={{
                  textDecoration: "none",
                  color: onBg,
                  opacity: 0.85,
                  fontWeight: 600,
                  fontSize: 14,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "1";
                  e.currentTarget.style.color = accent;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "0.85";
                  e.currentTarget.style.color = onBg;
                }}
              >
                {item.label}
              </Anchor>
            ))}
          </Group>

          {/* Social icons */}
          <Flex gap={14} align="center" justify="center">
            <SocialIcon
              href="https://www.linkedin.com/in/raisul-karim-saju"
              label="LinkedIn"
              icon={<IconBrandLinkedin size={18} />}
            />
            <SocialIcon
              href="https://github.com/RK289g"
              label="GitHub"
              icon={<IconBrandGithub size={18} />}
            />
          </Flex>

          {/* Copyright */}
          <Text
            className={inter.className}
            fz={12}
            style={{
              color: "var(--portfolio-text-muted)",
              marginTop: 8,
              textAlign: "center",
            }}
          >
            © {new Date().getFullYear()} Raisul Karim Saju. All rights reserved
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
