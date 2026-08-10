import type { MantineTheme } from "@mantine/core";

/** #5B5BD6 */
const R_PRIMARY_LT = "91, 91, 214";
/** #8B7CF6 */
const R_PRIMARY_DK = "139, 124, 246";
/** #8B7CF6 soft light */
const R_SOFT_LT = "139, 124, 246";
/** #A78BFA soft dark */
const R_SOFT_DK = "167, 139, 250";

/**
 * Nexus-inspired layered palette · academic portfolio.
 * Light: ivory #F6F3EF, cards #FFFFFF, text #111827 / #5B6472, accent #5B5BD6 / #8B7CF6, border #E7DFD8.
 * Dark: slate #0F1117, cards #171923, text #F3F4F6 / #A1A1AA, accent #8B7CF6 / #A78BFA.
 */
export function portfolioCssVariablesResolver(
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- Mantine API surface
  _theme: MantineTheme,
) {
  return {
    variables: {},
    light: {
      "--portfolio-text-on-bg": "#111827",
      "--portfolio-text-body": "#5B6472",
      "--portfolio-text-soft": "rgba(91, 100, 114, 0.9)",
      "--portfolio-text-muted": "rgba(91, 100, 114, 0.72)",
      "--portfolio-text-faint": "rgba(91, 100, 114, 0.55)",
      "--portfolio-text-accent": "var(--mantine-color-brand-5)",
      "--portfolio-text-accent-soft": "var(--mantine-color-brand-4)",
      "--portfolio-primary-gradient-top": `rgba(${R_PRIMARY_LT}, 0.09)`,
      "--portfolio-primary-gradient-bottom": `rgba(${R_PRIMARY_LT}, 0.03)`,
      "--portfolio-primary-border": `rgba(${R_PRIMARY_LT}, 0.22)`,
      "--portfolio-primary-shadow": `rgba(${R_PRIMARY_LT}, 0.14)`,
      "--portfolio-primary-radial-soft": `rgba(${R_SOFT_LT}, 0.05)`,
      "--portfolio-primary-radial-medium": `rgba(${R_SOFT_LT}, 0.07)`,
      "--portfolio-primary-radial-strong": `rgba(${R_SOFT_LT}, 0.09)`,
      "--portfolio-primary-mobile-active-top": `rgba(${R_PRIMARY_LT}, 0.07)`,
      "--portfolio-primary-mobile-active-bottom": `rgba(${R_PRIMARY_LT}, 0.025)`,
      "--portfolio-hero-bloom-a": `rgba(${R_SOFT_LT}, 0.09)`,
      "--portfolio-hero-bloom-b": `rgba(${R_PRIMARY_LT}, 0.06)`,
      "--portfolio-grid-stroke": "rgba(17, 24, 39, 0.135)",
      "--portfolio-grid-layer-base-opacity": "0.52",
      "--portfolio-grid-layer-active-opacity": "0.64",
      "--portfolio-grid-spotlight": "rgba(255, 248, 238, 0.22)",
      "--portfolio-grid-vignette-mid": "rgba(246, 243, 239, 0.55)",
      "--portfolio-grid-vignette-edge": "rgba(235, 228, 218, 0.82)",
      "--portfolio-shadow-sheet": "rgba(15, 23, 42, 0.06)",
      "--portfolio-shadow-deep": "rgba(15, 23, 42, 0.07)",
      "--portfolio-backdrop": "rgba(17, 24, 39, 0.26)",
      "--portfolio-timeline-line": "rgba(17, 24, 39, 0.11)",
      "--portfolio-dot-outer": "#FFFFFF",
      "--portfolio-surface-inverse": "#111827",
      "--portfolio-chip-bg": "rgba(17, 24, 39, 0.035)",
      "--portfolio-chip-bg-strong": "rgba(17, 24, 39, 0.05)",
      "--portfolio-alert-neutral-border": "#E7DFD8",
      "--portfolio-alert-neutral-top": "rgba(17, 24, 39, 0.025)",
      "--portfolio-alert-success-top": `rgba(${R_PRIMARY_LT}, 0.065)`,
      "--portfolio-bg-deep": "#E8E2DA",
      "--portfolio-border-hover-brand": `rgba(${R_PRIMARY_LT}, 0.32)`,
      "--portfolio-form-error": "#B91C1C",
      "--portfolio-form-error-soft": "#FECACA",
    },
    dark: {
      "--portfolio-text-on-bg": "#F3F4F6",
      "--portfolio-text-body": "#A1A1AA",
      "--portfolio-text-soft": "rgba(161, 161, 170, 0.94)",
      "--portfolio-text-muted": "rgba(161, 161, 170, 0.72)",
      "--portfolio-text-faint": "rgba(161, 161, 170, 0.52)",
      "--portfolio-text-accent": "var(--mantine-color-brand-5)",
      "--portfolio-text-accent-soft": "var(--mantine-color-brand-4)",
      "--portfolio-primary-gradient-top": `rgba(${R_PRIMARY_DK}, 0.09)`,
      "--portfolio-primary-gradient-bottom": `rgba(${R_PRIMARY_DK}, 0.03)`,
      "--portfolio-primary-border": `rgba(${R_PRIMARY_DK}, 0.22)`,
      "--portfolio-primary-shadow": `rgba(${R_PRIMARY_DK}, 0.16)`,
      "--portfolio-primary-radial-soft": `rgba(${R_SOFT_DK}, 0.045)`,
      "--portfolio-primary-radial-medium": `rgba(${R_SOFT_DK}, 0.065)`,
      "--portfolio-primary-radial-strong": `rgba(${R_SOFT_DK}, 0.085)`,
      "--portfolio-primary-mobile-active-top": `rgba(${R_PRIMARY_DK}, 0.075)`,
      "--portfolio-primary-mobile-active-bottom": `rgba(${R_PRIMARY_DK}, 0.028)`,
      "--portfolio-hero-bloom-a": `rgba(${R_SOFT_DK}, 0.1)`,
      "--portfolio-hero-bloom-b": `rgba(${R_PRIMARY_DK}, 0.07)`,
      "--portfolio-grid-stroke": "rgba(243, 244, 246, 0.07)",
      "--portfolio-grid-layer-base-opacity": "0.3",
      "--portfolio-grid-layer-active-opacity": "0.4",
      "--portfolio-grid-spotlight": "rgba(139, 124, 246, 0.04)",
      "--portfolio-grid-vignette-mid": "rgba(0, 0, 0, 0.38)",
      "--portfolio-grid-vignette-edge": "rgba(0, 0, 0, 0.58)",
      "--portfolio-shadow-sheet": "rgba(0, 0, 0, 0.35)",
      "--portfolio-shadow-deep": "rgba(0, 0, 0, 0.38)",
      "--portfolio-backdrop": "rgba(0, 0, 0, 0.46)",
      "--portfolio-timeline-line": "rgba(255, 255, 255, 0.1)",
      "--portfolio-dot-outer": "#F3F4F6",
      "--portfolio-surface-inverse": "#F3F4F6",
      "--portfolio-chip-bg": "rgba(255, 255, 255, 0.035)",
      "--portfolio-chip-bg-strong": "rgba(255, 255, 255, 0.05)",
      "--portfolio-alert-neutral-border": "rgba(255, 255, 255, 0.08)",
      "--portfolio-alert-neutral-top": "rgba(255, 255, 255, 0.035)",
      "--portfolio-alert-success-top": `rgba(${R_PRIMARY_DK}, 0.075)`,
      "--portfolio-bg-deep": "#0A0C11",
      "--portfolio-border-hover-brand": `rgba(${R_SOFT_DK}, 0.35)`,
      "--portfolio-form-error": "#FCA5A5",
      "--portfolio-form-error-soft": "#FECACA",
    },
  };
}
