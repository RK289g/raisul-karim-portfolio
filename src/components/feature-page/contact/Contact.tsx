"use client";

import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Text,
  Title,
  TextInput,
  Textarea,
  Group,
  Alert,
  SimpleGrid,
} from "@mantine/core";
import emailjs from "@emailjs/browser";
import {
  IconMail,
  IconBrandWhatsapp,
  IconSend,
  IconAlertCircle,
  IconCircleCheck,
  IconArrowUpRight,
} from "@tabler/icons-react";

import CoreButton from "@/components/core-components/core-button/CoreButton";

type Status = "idle" | "sending" | "success" | "error";

type SubmitErrorReason = "config" | "send";

const accent = "var(--mantine-color-brand-5)";
const BG_9 = "var(--mantine-color-background-9)";
const BG_7 = "var(--mantine-color-background-7)";
const GRID_9 = "var(--mantine-color-grid-9)";
const ON_BG = "var(--portfolio-text-on-bg)";

/** Receiver inbox for EmailJS `{{to_email}}` and contact card display */
const ADMIN_EMAIL = "raisul.saju.cse@sec.ac.bd";

function ContactCard({
  title,
  value,
  icon,
  href,
  cta = "Write me",
}: {
  title: string;
  value: string;
  icon: React.ReactNode;
  href: string;
  cta?: string;
}) {
  const isMailLink = href.startsWith("mailto:");

  return (
    <Box
      component="a"
      href={href}
      target={isMailLink ? undefined : "_blank"}
      rel={isMailLink ? undefined : "noreferrer"}
      style={{
        display: "block",
        textDecoration: "none",
        color: "inherit",
        cursor: "pointer",
        borderRadius: 18,
        padding: 18,
        minHeight: 116,
        border: `1px solid ${GRID_9}`,
        background: `linear-gradient(180deg, ${BG_7} 0%, ${BG_9} 100%)`,
        boxShadow: "none",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle brand glow */}
      <Box
        aria-hidden
        style={{
          position: "absolute",
          inset: -1,
          background:
            "radial-gradient(circle at 18% 12%, var(--portfolio-primary-radial-soft), transparent 60%)",
          pointerEvents: "none",
        }}
      />

      <Stack
        gap={10}
        align="center"
        ta="center"
        style={{ position: "relative" }}
      >
        <Box
          style={{
            width: 54,
            height: 54,
            borderRadius: 14,
            display: "grid",
            placeItems: "center",
            background:
              "linear-gradient(180deg, var(--portfolio-primary-gradient-top), var(--portfolio-primary-gradient-bottom))",
            border: "1px solid var(--portfolio-primary-border)",
            color: accent,
          }}
        >
          {icon}
        </Box>

        <Box>
          <Text fw={900} fz={14} style={{ color: ON_BG }}>
            {title}
          </Text>

          <Text fz={13} mt={4} style={{ color: "var(--portfolio-text-soft)" }}>
            {value}
          </Text>
        </Box>

        <Group gap={6} mt={6} justify="center">
          <Text fw={900} fz={13} style={{ color: ON_BG }}>
            {cta}
          </Text>
          <IconArrowUpRight size={16} color="var(--portfolio-text-on-bg)" />
        </Group>
      </Stack>
    </Box>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [submitErrorReason, setSubmitErrorReason] =
    useState<SubmitErrorReason | null>(null);
  const [errors, setErrors] = useState<{ [k: string]: string }>({});
  const [form, setForm] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });

  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const emailJsReady = useMemo(
    () => Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY),
    [SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY],
  );

  const setField = (key: keyof typeof form) => (value: string) => {
    if (status === "success" || status === "error") {
      setStatus("idle");
      setSubmitErrorReason(null);
    }

    setForm((prev) => ({ ...prev, [key]: value }));

    setErrors((prev) => {
      if (!prev[key]) return prev;

      const copy = { ...prev };
      delete copy[key];
      return copy;
    });
  };

  const validate = () => {
    const next: { [k: string]: string } = {};
    const name = form.name.trim();
    const email = form.email.trim();
    const message = form.message.trim();

    if (name.length < 2) {
      next.name =
        name.length === 0
          ? "Name is required"
          : "Name must be at least 2 characters";
    }

    if (email.length === 0) {
      next.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      next.email = "Enter a valid email";
    }

    if (message.length < 10) {
      next.message =
        message.length === 0
          ? "Message is required"
          : "Message must be at least 10 characters";
    }

    setErrors(next);

    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    if (!emailJsReady) {
      setSubmitErrorReason("config");
      setStatus("error");
      return;
    }

    setSubmitErrorReason(null);
    setStatus("sending");

    try {
      const fromName = form.name.trim();
      const visitorEmail = form.email.trim();
      const project = form.project.trim() || "Portfolio Contact Message";
      const message = form.message.trim();

      await emailjs.send(
        SERVICE_ID as string,
        TEMPLATE_ID as string,
        {
          from_name: fromName,
          from_email: visitorEmail,
          reply_to: visitorEmail,
          project,
          message,
          to_email: ADMIN_EMAIL,
        },
        {
          publicKey: PUBLIC_KEY as string,
        },
      );

      setStatus("success");
      setSubmitErrorReason(null);
      setForm({
        name: "",
        email: "",
        project: "",
        message: "",
      });
      setErrors({});
    } catch {
      setSubmitErrorReason("send");
      setStatus("error");
    }
  };

  const inputStyles = {
    label: {
      color: "var(--portfolio-text-soft)",
      fontWeight: 800,
      marginBottom: 8,
    },
    input: {
      background: BG_9,
      borderColor: GRID_9,
      color: ON_BG,
      borderRadius: 14,
      height: 48,
      transition: "border-color 180ms ease, box-shadow 180ms ease",
    },
    error: {
      color: "var(--portfolio-form-error)",
    },
  } as const;

  const textareaStyles = {
    label: {
      color: "var(--portfolio-text-soft)",
      fontWeight: 800,
      marginBottom: 8,
    },
    input: {
      background: BG_9,
      borderColor: GRID_9,
      color: ON_BG,
      borderRadius: 14,
      transition: "border-color 180ms ease, box-shadow 180ms ease",
    },
    error: {
      color: "var(--portfolio-form-error)",
    },
  } as const;

  return (
    <Box
      id="contact"
      style={{
        background: `linear-gradient(180deg, ${BG_9} 0%, var(--portfolio-bg-deep) 100%)`,
        paddingTop: 80,
        paddingBottom: 80,
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
              color: accent,
            }}
          >
            Contact
          </Text>

          <Title
            order={2}
            fw={800}
            lh={1.1}
            style={{
              fontSize: "clamp(28px, 3.5vw, 42px)",
              color: ON_BG,
            }}
          >
            Let’s build something{" "}
            <span style={{ color: "var(--portfolio-text-accent-soft)" }}>
              together
            </span>
          </Title>
        </Stack>

        <Grid gutter={28} align="flex-start">
          {/* Left column */}
          <Grid.Col span={{ base: 12, sm: 5 }}>
            <Stack gap={16}>
              <Text fw={900} fz={16} style={{ color: ON_BG }}>
                Talk to me
              </Text>

              <Grid gutter={16}>
                <Grid.Col span={{ base: 12, xs: 6, sm: 12 }}>
                  <ContactCard
                    title="Email"
                    value={ADMIN_EMAIL}
                    icon={<IconMail size={22} />}
                    href="mailto:raisul.saju.cse@sec.ac.bd?subject=Project%20Inquiry"
                  />
                </Grid.Col>

                <Grid.Col span={{ base: 12, xs: 6, sm: 12 }}>
                  <ContactCard
                    title="WhatsApp"
                    value="+880 1726-092710"
                    icon={<IconBrandWhatsapp size={22} />}
                    href="https://wa.me/8801726092710"
                  />
                </Grid.Col>
              </Grid>
            </Stack>
          </Grid.Col>

          {/* Right column */}
          <Grid.Col span={{ base: 12, sm: 7 }}>
            <Stack gap={14}>
              {/* Status alerts */}
              {status === "success" && (
                <Alert
                  icon={<IconCircleCheck size={16} />}
                  title="Message sent successfully"
                  styles={{
                    root: {
                      borderRadius: 14,
                      border: "1px solid var(--portfolio-primary-border)",
                      background:
                        "linear-gradient(180deg, var(--portfolio-alert-success-top), transparent)",
                    },
                    title: {
                      color: ON_BG,
                      fontWeight: 900,
                    },
                    message: {
                      color: "var(--portfolio-text-soft)",
                    },
                  }}
                >
                  I’ll get back to you soon.
                </Alert>
              )}

              {status === "error" && (
                <Alert
                  icon={<IconAlertCircle size={16} />}
                  title={
                    submitErrorReason === "config"
                      ? "Not available"
                      : "Couldn’t send"
                  }
                  styles={{
                    root: {
                      borderRadius: 14,
                      border: "1px solid var(--portfolio-alert-neutral-border)",
                      background:
                        "linear-gradient(180deg, var(--portfolio-alert-neutral-top), transparent)",
                    },
                    title: {
                      color: ON_BG,
                      fontWeight: 900,
                    },
                    message: {
                      color: "var(--portfolio-text-soft)",
                    },
                  }}
                >
                  {submitErrorReason === "config"
                    ? "Contact form is not configured."
                    : "Couldn’t send message. Please try again."}
                </Alert>
              )}

              <Text fw={900} fz={16} style={{ color: ON_BG }}>
                Write me your project
              </Text>

              <Box
                style={{
                  borderRadius: 18,
                  padding: 18,
                  border: `1px solid ${GRID_9}`,
                  background: `linear-gradient(180deg, ${BG_7} 0%, ${BG_9} 100%)`,
                  boxShadow: "none",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* subtle brand glow */}
                <Box
                  aria-hidden
                  style={{
                    position: "absolute",
                    inset: -1,
                    background:
                      "radial-gradient(circle at 70% 0%, var(--portfolio-primary-radial-medium), transparent 60%)",
                    pointerEvents: "none",
                  }}
                />

                <Box style={{ position: "relative" }}>
                  <form onSubmit={onSubmit}>
                    <Stack gap={14}>
                      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={14}>
                        <TextInput
                          label="Name"
                          placeholder="Insert your name"
                          value={form.name}
                          onChange={(e) =>
                            setField("name")(e.currentTarget.value)
                          }
                          error={errors.name}
                          styles={inputStyles}
                        />

                        <TextInput
                          label="Mail"
                          placeholder="Insert your email"
                          value={form.email}
                          onChange={(e) =>
                            setField("email")(e.currentTarget.value)
                          }
                          error={errors.email}
                          styles={inputStyles}
                        />
                      </SimpleGrid>

                      <TextInput
                        label="Project"
                        placeholder="What are you building?"
                        value={form.project}
                        onChange={(e) =>
                          setField("project")(e.currentTarget.value)
                        }
                        styles={inputStyles}
                      />

                      <Textarea
                        label="Message"
                        placeholder="Share goals, timeline, and what you need help with..."
                        minRows={6}
                        autosize
                        value={form.message}
                        onChange={(e) =>
                          setField("message")(e.currentTarget.value)
                        }
                        error={errors.message}
                        styles={textareaStyles}
                      />

                      <Group justify="flex-end" mt={6}>
                        <CoreButton
                          variant="outline"
                          title={
                            status === "sending" ? "Sending..." : "Send Message"
                          }
                          rightSection={<IconSend size={18} />}
                          type="submit"
                          disabled={status === "sending"}
                        />
                      </Group>
                    </Stack>
                  </form>
                </Box>
              </Box>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
}
