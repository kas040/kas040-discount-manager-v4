import { DataTable, Card, BlockStack } from "@shopify/polaris";
import type { Product } from "../types";

interface Props {
  products: Product[];
  discountPercentage: number;
}

export function ProductTable({ products, discountPercentage }: Props) {
  const rows = products.map(product => [
    product.id,
    product.title,
    product.variants.map(v => v.id).join(", "),
    product.variants.map(v => v.title).join(", "),
    product.variants.map(v => formatPrice(v.price)).join(", "),
    product.collections?.join(", ") || "",
    product.tags?.join(", ") || "",
    product.vendor || "",
  ]);

  return (
    <Card>
      <BlockStack>
        <DataTable
          columnContentTypes={[
            'text',
            'text',
            'text',
            'text',
            'numeric',
            'text',
            'text',
            'text',
          ]}
          headings={[
            'Product ID',
            'Product Name',
            'Variant IDs',
            'Variant Names',
            'Prices',
            'Collections',
            'Tags',
            'Vendor'
          ]}
          rows={rows}
        />
      </BlockStack>
    </Card>
  );
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price);
}
