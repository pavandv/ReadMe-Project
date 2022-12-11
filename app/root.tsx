import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Outlet, useCatch } from "@remix-run/react";

import Document from "./components/Document";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Pavan Divi - Full Stack, DevOps Engineer",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "anonymous",
    },
    {
      rel: "stylesheet",
      // href: "https://fonts.googleapis.com/icon?family=Material+Icons+Round",
      href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,200,1,0",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800&family=Noto+Sans:wght@400;500;700&display=swap",
    },
  ];
};

export default function App() {
  return (
    <Document>
      <Outlet />
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#errorboundary
export function ErrorBoundary({ error }: { error: Error }) {
  console.error(error);

  return (
    <Document title="Error!">
      {/* <Layout> */}
      <div>
        <h1>There was an error</h1>
        <p>{error.message}</p>
        <hr />
        <p>
          Hey, developer, you should replace this with what you want your users
          to see.
        </p>
      </div>
      {/* </Layout> */}
    </Document>
  );
}

// https://remix.run/docs/en/v1/api/conventions#catchboundary
export function CatchBoundary() {
  const caught = useCatch();

  let message;
  switch (caught.status) {
    case 401:
      message = (
        <p>
          Oops! Looks like you tried to visit a page that you do not have access
          to.
        </p>
      );
      break;
    case 404:
      message = (
        <p>Oops! Looks like you tried to visit a page that does not exist.</p>
      );
      break;

    default:
      throw new Error(caught.data || caught.statusText);
  }

  return (
    <Document title={`${caught.status} ${caught.statusText}`}>
      {/* <Layout> */}
      <h1>
        {caught.status}: {caught.statusText}
      </h1>
      {message}
      {/* </Layout> */}
    </Document>
  );
}
