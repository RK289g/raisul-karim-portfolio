"use client";

import React from "react";
import { Box, Container, Text, Title, Stack, Center } from "@mantine/core";
import CoreButton from "@/components/core-components/core-button/CoreButton";
import {
  IconArrowUpRight,
  IconBrandLinkedin,
  IconBrandGithub,
  IconBrandWhatsapp,
  IconMail,
} from "@tabler/icons-react";

import AnimatedGridBackground from "@/components/common/grid-pattern/GridPattern";

/* ================= SOCIAL ================= */

function SocialIcon({
  href,
  icon,
  boxSize = 48,
}: {
  href: string;
  icon: React.ReactNode;
  boxSize?: number;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Box
        style={{
          width: boxSize,
          height: boxSize,
          borderRadius: 14,
          display: "grid",
          placeItems: "center",
          background:
            "linear-gradient(180deg, var(--portfolio-primary-gradient-top), var(--portfolio-primary-gradient-bottom))",
          border: "1px solid var(--portfolio-primary-border)",
          color: "var(--mantine-color-brand-5)",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-3px)";
          e.currentTarget.style.boxShadow =
            "0 10px 30px var(--portfolio-primary-shadow)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        {icon}
      </Box>
    </a>
  );
}

/* ================= HERO ================= */

export default function HeroSection() {
  return (
    <Box
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "var(--mantine-color-background-9)",
      }}
    >
      <AnimatedGridBackground />

      <Box style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Box
          style={{
            position: "absolute",
            top: "-180px",
            right: "-200px",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "var(--portfolio-hero-bloom-a)",
            filter: "blur(120px)",
          }}
        />
        <Box
          style={{
            position: "absolute",
            bottom: "-200px",
            left: "-150px",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "var(--portfolio-hero-bloom-b)",
            filter: "blur(120px)",
          }}
        />
      </Box>

      {/* CONTENT */}
      <Container size="md" style={{ position: "relative", zIndex: 2 }}>
        <Center>
          <Stack gap={18} ta="center" maw={1000}>
            <Title
              order={1}
              style={{
                fontWeight: 800,
                lineHeight: 1.05,
                color: "var(--portfolio-text-on-bg)",
                fontSize: "clamp(32px, 5vw, 60px)",
              }}
            >
              RAISUL KARIM{" "}
              <span style={{ color: "var(--portfolio-text-accent-soft)" }}>
                SAJU
              </span>
            </Title>

            <Text
              style={{
                color: "var(--portfolio-text-body)",
                fontSize: "clamp(13.5px, 1.4vw, 19px)",
                lineHeight: 1.65,
              }}
            >
              Hi! I am Raisul, a Computer Science graduate with research
              experience in blockchain and cryptography and professional
              experience in web development. Interested in scalable systems and
              AI-driven platforms.
            </Text>

            <Box pt={40}>
              <CoreButton
                title="See my work"
                variant="outline"
                rightSection={<IconArrowUpRight size={19} />}
                onClick={() => {
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </Box>
          </Stack>
        </Center>
      </Container>

      {/* SOCIAL */}
      <Box
        style={{
          position: "absolute",
          bottom: "80px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 3,
        }}
      >
        <Stack gap={10} align="center">
          <Text style={{ color: "var(--portfolio-text-muted)", fontSize: 12 }}>
            Find me on
          </Text>

          <Box
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 12,
            }}
          >
            <SocialIcon
              href="https://www.linkedin.com/in/raisul-karim-saju"
              icon={<IconBrandLinkedin size={18} />}
              boxSize={40}
            />

            <SocialIcon
              href="https://github.com/RK289g"
              icon={<IconBrandGithub size={18} />}
              boxSize={40}
            />

            <SocialIcon
              href="mailto:raisul.saju.cse@sec.ac.bd"
              icon={<IconMail size={18} />}
              boxSize={40}
            />

            <SocialIcon
              href="https://wa.me/8801726092710"
              icon={<IconBrandWhatsapp size={18} />}
              boxSize={40}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
