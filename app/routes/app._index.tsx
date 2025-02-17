import { Page } from "@shopify/polaris";
import { authenticate } from "../shopify.server";
import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";
import { TitleBar } from '@shopify/app-bridge-react';
import { useAppBridge } from "@shopify/app-bridge-react";
import { Button } from "@shopify/polaris";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);
  return json({});
};

export default function Index() {
  const navigate = useNavigate();
  const app = useAppBridge();

  return (
    <Page>
  <TitleBar title="KAS040 Discount Manager">
    <Button variant="primary" onClick={() => navigate("/app/discount-manager")}>
      Discount run
    </Button>
  </TitleBar>
  {/* Page content */}
</Page>
  );
}