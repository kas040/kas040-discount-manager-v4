import { Page } from "@shopify/polaris";
import { DiscountManagerForm } from "../components/DiscountManagerForm";
import { ProductTable } from "../components/ProductTable";
import { useState } from "react";
import type { Product } from "../types";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { authenticate } from "../shopify.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  await authenticate.admin(request);

  return json({
    // You can add initial data here if needed
  });
};

export default function DiscountManager() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);

  return (
    <Page title="Discount run">
      <DiscountManagerForm
        onFilterChange={setFilteredProducts}
        onDiscountChange={setDiscountPercentage}
      />
      <ProductTable 
        products={filteredProducts}
        discountPercentage={discountPercentage}
      />
    </Page>
  );
}
