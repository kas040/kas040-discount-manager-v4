import type { HeadersFunction, LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet, useLoaderData, useRouteError } from "@remix-run/react";
import { boundary } from "@shopify/shopify-app-remix/server";
import { AppProvider } from "@shopify/shopify-app-remix/react";
import { NavMenu } from "@shopify/app-bridge-react";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";
import * as Polaris from "@shopify/polaris"; // Polaris Globaal Importeren

import { authenticate } from "../shopify.server";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return { apiKey: process.env.SHOPIFY_API_KEY || "" };
};

export default function App() {
  const { apiKey } = useLoaderData<typeof loader>();

  return (
    <AppProvider isEmbeddedApp apiKey={apiKey}>
      <Polaris.AppProvider i18n={{}}>
        <Polaris.Frame>
          <NavMenu>
            <Link to="/app" rel="home">
              Home
            </Link>
            <Link to="/app/discount-manager">Manager</Link>
          </NavMenu>

          <Polaris.Page title="Dashboard">
            <Polaris.Card sectioned>
              <p>Welkom bij de Discount Manager!</p>
              <Polaris.Button onClick={() => alert("Polaris werkt!")}>
                Test Polaris Button
              </Polaris.Button>
            </Polaris.Card>
          </Polaris.Page>

          <Outlet />
        </Polaris.Frame>
      </Polaris.AppProvider>
    </AppProvider>
  );
}

// Shopify needs Remix to catch some thrown responses, so that their headers are included in the response.
export function ErrorBoundary() {
  return boundary.error(useRouteError());
}

export const headers: HeadersFunction = (headersArgs) => {
  return boundary.headers(headersArgs);
};
