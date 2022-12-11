import { PassThrough } from "stream";
import type { EntryContext } from "@remix-run/node";
import { Response } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream, renderToString } from "react-dom/server";
import createEmotionServer from "@emotion/server/create-instance";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import { constructStyleTagsFromChunks } from "@emotion/server";

import { createEmotionCache } from "./lib";
import { RMPThemeProvider } from "./providers/ThemeProvider";
import { AppProvider } from "./providers";

const ABORT_DELAY = 5000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  const onReadyCallbackName = isbot(request.headers.get("user-agent"))
    ? "onAllReady"
    : "onShellReady";

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  function MuiRemixServer() {
    return (
      <CacheProvider value={cache}>
        <RMPThemeProvider>
          <RemixServer context={remixContext} url={request.url} />
        </RMPThemeProvider>
      </CacheProvider>
    );
  }

  // Render the component to a string.
  const html = renderToString(<MuiRemixServer />);
  // Grab the CSS from emotion
  const chunks = extractCriticalToChunks(html);

  let stylesHTML = "";

  chunks.styles.forEach(({ key, ids, css }) => {
    const emotionKey = `${key} ${ids.join(" ")}`;
    const newStyleTag = `<style data-emotion="${emotionKey}">${css}</style>`;
    stylesHTML = `${stylesHTML}${newStyleTag}`;
  });

  // Add the Emotion style tags after the insertion point meta tag
  const markup = html.replace(
    /<meta(\s)*name="emotion-insertion-point"(\s)*content="emotion-insertion-point"(\s)*\/>/,
    `<meta name="emotion-insertion-point" content="emotion-insertion-point"/>${stylesHTML}`
  );

  const body = `<!DOCTYPE html>${markup}`;

  return new Promise((resolve, reject) => {
    let didError = false;

    // const { pipe, abort } = renderToPipeableStream(<MuiRemixServer />, {
    //   [onReadyCallbackName]: () => {
    //     const body = new PassThrough();

    responseHeaders.set("Content-Type", "text/html");

    resolve(
      new Response(body, {
        headers: responseHeaders,
        status: didError ? 500 : responseStatusCode,
      })
    );

    //     pipe(body);
    //   },
    //   onShellError(err: unknown) {
    //     reject(err);
    //   },
    //   onError(error: unknown) {
    //     didError = true;

    //     console.error(error);
    //   },
    // });

    // setTimeout(abort, ABORT_DELAY);
  });
}
