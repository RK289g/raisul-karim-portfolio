"use client";

import type { CSSProperties } from "react";
import { inter, plusJakarta } from "@/app/font";
import CoreButton from "@/components/core-components/core-button/CoreButton";
import {
  ActionIcon,
  Anchor,
  Box,
  Burger,
  Flex,
  Group,
  Stack,
  Text,
  Tooltip,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import { useEffect, useMemo, useState } from "react";

// ✅ icons for mobile grid
import {
  IconSchool,
  IconBriefcase,
  IconFolder,
  IconBolt,
  IconAward,
  IconUsers,
  IconMoon,
  IconSun,
} from "@tabler/icons-react";

function NavbarThemeToggle({ compact }: { compact?: boolean }) {
  const computedScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const { setColorScheme } = useMantineColorScheme();

  const isDark = computedScheme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";
  const hint = isDark ? "Light mode" : "Dark mode";

  const control = (
    <ActionIcon
      variant="default"
      size={compact ? 38 : 40}
      radius="md"
      aria-label={label}
      title={label}
      onClick={() => setColorScheme(isDark ? "light" : "dark")}
      style={{
        border: "1px solid var(--mantine-color-grid-9)",
        background:
          "linear-gradient(180deg, var(--mantine-color-background-7) 0%, var(--mantine-color-background-9) 100%)",
        color: "var(--portfolio-text-on-bg)",
        flexShrink: 0,
      }}
    >
      {isDark ? <IconSun size={compact ? 18 : 19} /> : <IconMoon size={compact ? 18 : 19} />}
    </ActionIcon>
  );

  if (compact) {
    return (
      <Tooltip label={`${hint} · click to switch`} position="top" withArrow>
        {control}
      </Tooltip>
    );
  }

  return (
    <Group gap={10} wrap="nowrap" align="center">
      <Text
        fz={11}
        fw={700}
        tt="uppercase"
        style={{
          letterSpacing: "0.08em",
          color: "var(--portfolio-text-muted)",
          whiteSpace: "nowrap",
        }}
      >
        Theme
      </Text>
      <Tooltip label={`${hint} · click to switch`} position="bottom" withArrow>
        {control}
      </Tooltip>
    </Group>
  );
}

const NAV = [
  { id: "education", label: "Education", icon: <IconSchool size={18} /> },
  { id: "experience", label: "Experience", icon: <IconBriefcase size={18} /> },
  { id: "projects", label: "Projects", icon: <IconFolder size={18} /> },
  { id: "skills", label: "Skills", icon: <IconBolt size={18} /> },
  { id: "awards", label: "Certifications", icon: <IconAward size={18} /> },
  { id: "socials", label: "Socials", icon: <IconUsers size={18} /> },
];

export default function Navbar() {
  const ids = useMemo(() => NAV.map((n) => n.id), []);
  const [active, setActive] = useState<string>(""); // ✅ no default
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [opened, handlers] = useDisclosure(false);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          )[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      {
        root: null,
        // ✅ desktop has sticky top nav (72px), mobile has bottom bar (~72px)
        rootMargin: isMobile ? "-10% 0px -25% 0px" : "-90px 0px -55% 0px",
        threshold: [0.15, 0.25, 0.35, 0.5, 0.65],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, isMobile]);

  const onNavClick = (id: string) => {
    setActive(id);
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
    handlers.close();
  };

  const goHome = () => {
    setActive("");
    handlers.close();
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  };

  const goContact = () => {
    handlers.close();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const shellStyle: CSSProperties = {
    background: "var(--mantine-color-background-9)",
    borderColor: "var(--mantine-color-grid-9)",
    zIndex: 100,
  };

  return (
    <>
      {/* =======================
          DESKTOP: sticky top nav
          ======================= */}
      {!isMobile && (
        <Flex
          align="center"
          justify="space-between"
          h={72}
          px={{ base: 16, md: 80 }}
          bg="background.9"
          style={{
            position: "sticky",
            top: 0,
            ...shellStyle,
            borderBottom: "0.5px solid var(--mantine-color-grid-9)",
          }}
        >
          {/* logo */}
          <Anchor
            href="/#home"
            fw={700}
            fz={18}
            className={plusJakarta.className}
            style={{
              textDecoration: "none",
              color: "var(--portfolio-text-on-bg)",
            }}
            onClick={(e) => {
              e.preventDefault();
              goHome();
            }}
          >
            Raisul Karim Saju
          </Anchor>

          {/* centered links */}
          <Group
            gap={28}
            style={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {NAV.map((item) => (
              <Anchor
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  onNavClick(item.id);
                }}
                c={active === item.id ? "brand.5" : undefined}
                fw={500}
                fz={14}
                opacity={active === item.id ? 1 : 0.85}
                className={inter.className}
                style={{
                  textDecoration: "none",
                  ...(active !== item.id && {
                    color: "var(--portfolio-text-on-bg)",
                  }),
                }}
              >
                {item.label}
              </Anchor>
            ))}
          </Group>

          {/* Theme + CTA */}
          <Group gap={14} wrap="nowrap">
            <NavbarThemeToggle />
            <Anchor
              href="#contact"
              style={{ textDecoration: "none" }}
              onClick={(e) => {
                e.preventDefault();
                goContact();
              }}
            >
              <CoreButton variant="outline" title="Let’s Talk" />
            </Anchor>
          </Group>
        </Flex>
      )}

      {/* ============================================
          MOBILE: bottom bar + bottom sheet (drawer)
          ============================================ */}
      {isMobile && (
        <>
          {/* Bottom fixed bar */}
          <Flex
            align="center"
            justify="space-between"
            h={72}
            px={16}
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              bottom: 0,
              ...shellStyle,
              borderTop: "0.5px solid var(--mantine-color-grid-9)",
            }}
          >
            {/* Brand (left) */}
            <Anchor
              href="/#home"
              fw={700}
              fz={16}
              className={plusJakarta.className}
              style={{
                textDecoration: "none",
                color: "var(--portfolio-text-on-bg)",
              }}
              onClick={(e) => {
                e.preventDefault();
                goHome();
              }}
            >
              Raisul Karim Saju
            </Anchor>

            <Group gap={10} wrap="nowrap">
              <NavbarThemeToggle compact />
              <Burger
                opened={opened}
                onClick={handlers.toggle}
                aria-label="Toggle navigation"
                color="var(--portfolio-text-on-bg)"
                bd="1px solid var(--mantine-color-brand-5)"
              />
            </Group>
          </Flex>

          {/* Bottom sheet drawer */}
          <Box
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              bottom: opened ? 0 : "-110%",
              transition: "bottom 220ms ease",
              padding: "18px 16px 22px",
              borderRadius: "22px 22px 0 0",
              borderTop: "1px solid var(--mantine-color-grid-9)",
              background: "var(--mantine-color-background-9)",
              boxShadow: "0 -14px 40px var(--portfolio-shadow-sheet)",
              zIndex: 200,
            }}
          >
            {/* Header row (title + close) */}
            <Flex align="center" justify="space-between" mb={14}>
              <Text fw={900} fz={16} style={{ color: "var(--portfolio-text-on-bg)" }}>
                Navigation
              </Text>

              <Box
                role="button"
                aria-label="Close navigation"
                onClick={handlers.close}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 12,
                  display: "grid",
                  placeItems: "center",
                  border: "1px solid var(--mantine-color-grid-9)",
                  background:
                    "linear-gradient(180deg, var(--mantine-color-background-7) 0%, var(--mantine-color-background-9) 100%)",
                  color: "var(--portfolio-text-on-bg)",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                ✕
              </Box>
            </Flex>

            {/* Grid menu */}
            <Box
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
                gap: 12,
              }}
            >
              {NAV.map((item) => {
                const isActive = active === item.id;

                return (
                  <Box
                    key={item.id}
                    role="button"
                    onClick={() => onNavClick(item.id)}
                    style={{
                      borderRadius: 14,
                      padding: "12px 8px",
                      border: isActive
                        ? "1px solid var(--mantine-color-brand-5)"
                        : "1px solid var(--mantine-color-grid-9)",
                      background: isActive
                        ? "linear-gradient(180deg, var(--portfolio-primary-mobile-active-top), var(--portfolio-primary-mobile-active-bottom))"
                        : "linear-gradient(180deg, var(--mantine-color-background-7) 0%, var(--mantine-color-background-9) 100%)",
                      cursor: "pointer",
                      textAlign: "center",
                    }}
                  >
                    <Stack gap={6} align="center">
                      {/* Icon */}
                      <Box
                        style={{
                          color: isActive
                            ? "var(--mantine-color-brand-5)"
                            : "var(--portfolio-text-soft)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        {item.icon}
                      </Box>

                      {/* Label */}
                      <Text
                        fw={800}
                        fz={11}
                        lh={1}
                        className={inter.className}
                        style={{
                          color: isActive
                            ? "var(--mantine-color-brand-5)"
                            : "var(--portfolio-text-on-bg)",
                          opacity: isActive ? 1 : 0.85,
                        }}
                      >
                        {item.label}
                      </Text>
                    </Stack>
                  </Box>
                );
              })}
            </Box>

            {/* CTA */}
            <Flex mt={16} align="center" justify="center">
              <Anchor
                href="#contact"
                style={{ textDecoration: "none" }}
                onClick={(e) => {
                  e.preventDefault();
                  goContact();
                }}
              >
                <CoreButton variant="outline" title="Let’s Talk" />
              </Anchor>
            </Flex>
          </Box>

          {/* Backdrop */}
          {opened && (
            <Box
              onClick={handlers.close}
              style={{
                position: "fixed",
                inset: 0,
                background: "var(--portfolio-backdrop)",
                zIndex: 150,
              }}
            />
          )}
        </>
      )}
    </>
  );
}
