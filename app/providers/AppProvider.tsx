import type { PropsWithChildren } from "react";

import type { ClientCacheProviderProps } from "./ClientCacheProvider";
import type { ThemeConfig } from "./ThemeProvider";

import { ClientCacheProvider } from "./ClientCacheProvider";
import { RMPThemeProvider } from "./ThemeProvider";

type AppProviderProps = ClientCacheProviderProps & ThemeConfig;

export const AppProvider = ({
  children,
}: PropsWithChildren<AppProviderProps>) => {
  return (
    <ClientCacheProvider>
      <RMPThemeProvider>{children}</RMPThemeProvider>
    </ClientCacheProvider>
  );
};
