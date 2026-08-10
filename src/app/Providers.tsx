"use client";

import "@mantine/core/styles.css";
import {
  MantineProvider,
  localStorageColorSchemeManager,
} from "@mantine/core";
import {
  MantineProviderConfig,
  PORTFOLIO_COLOR_SCHEME_STORAGE_KEY,
} from "@/config/MantineProvider";
import { portfolioCssVariablesResolver } from "@/config/portfolio-css-variables-resolver";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MantineProvider
      theme={MantineProviderConfig}
      defaultColorScheme="auto"
      colorSchemeManager={localStorageColorSchemeManager({
        key: PORTFOLIO_COLOR_SCHEME_STORAGE_KEY,
      })}
      cssVariablesResolver={portfolioCssVariablesResolver}
    >
      {children}
    </MantineProvider>
  );
}
