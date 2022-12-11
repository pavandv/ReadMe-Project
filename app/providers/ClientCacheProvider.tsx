import type { PropsWithChildren } from "react";
import { useMemo } from "react";
import type { EmotionCache } from "@emotion/react";

import { useState } from "react";
import { CacheProvider } from "@emotion/react";

import { ClientStyleContext } from "../contexts";
import { createEmotionCache } from "../lib";

export interface ClientCacheProviderProps {
  cache?: EmotionCache;
}

export const ClientCacheProvider = ({
  cache,
  children,
}: PropsWithChildren<ClientCacheProviderProps>) => {
  const [emotionCache, setEmotionCache] = useState(
    cache || createEmotionCache()
  );

  const clientStyleContextValue = useMemo(
    () => ({
      reset() {
        setEmotionCache(createEmotionCache());
      },
    }),
    []
  );

  return (
    <ClientStyleContext.Provider value={clientStyleContextValue}>
      <CacheProvider value={cache || emotionCache}>{children}</CacheProvider>
    </ClientStyleContext.Provider>
  );
};
