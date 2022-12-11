import { withEmotionCache } from "@emotion/react";
import { styled } from "@mui/material";
import useEnhancedEffect from "@mui/material/utils/useEnhancedEffect";
import {
  Meta,
  Links,
  ScrollRestoration,
  Scripts,
  LiveReload,
} from "@remix-run/react";
import { useContext } from "react";

import { ClientStyleContext } from "~/contexts";
interface DocumentProps {
  children: React.ReactNode;
  title?: string;
}

const Body = styled("body")({
  minHeight: "100vh",
});

const Document = withEmotionCache<DocumentProps>(
  ({ children, title }, emotionCache) => {
    const clientStyleData = useContext(ClientStyleContext);

    useEnhancedEffect(() => {
      // re-link sheet container
      emotionCache.sheet.container = document.head;

      // re-inject tags
      const tags = emotionCache.sheet.tags;
      emotionCache.sheet.flush();

      tags.forEach((tag) => {
        // eslint-disable-next-line no-underscore-dangle
        (emotionCache.sheet as any)._insertTag(tag);
      });

      // reset cache to reapply global styles
      // clientStyleData.reset();
    }, []);

    return (
      <html lang="en">
        <head>
          {/* <meta name="theme-color" content={theme.palette.primary.main} /> */}
          {title ? <title>{title}</title> : null}
          <Meta />
          <Links />
          <meta
            name="emotion-insertion-point"
            content="emotion-insertion-point"
          />
        </head>
        <Body>
          {children}
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Body>
      </html>
    );
  }
);

export default Document;
