import { Card, FormLayout, Select, TextField, BlockStack } from "@shopify/polaris";
import { useCallback, useState } from "react";
import type { Product, SelectOption } from "../types";

interface Props {
  onFilterChange: (products: Product[]) => void;
  onDiscountChange: (discount: number) => void;
}

export function DiscountManagerForm({ onFilterChange, onDiscountChange }: Props) {
  const [selectedCollection, setSelectedCollection] = useState("");
  const [selectedVendor, setSelectedVendor] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [discount, setDiscount] = useState("0");

  const handleDiscountChange = useCallback(
    (value: string) => {
      setDiscount(value);
      onDiscountChange(Number(value));
    },
    [onDiscountChange]
  );

  // Initialize empty arrays with proper typing
  const collections: SelectOption[] = [];
  const vendors: SelectOption[] = [];
  const tags: SelectOption[] = [];

  return (
    <Card>
      <BlockStack>
        <FormLayout>
          <TextField
            label="Discount Percentage"
            type="number"
            value={discount}
            onChange={handleDiscountChange}
            autoComplete="off"
          />
          <Select
            label="Collection"
            options={collections}
            onChange={setSelectedCollection}
            value={selectedCollection}
          />
          <Select
            label="Vendor"
            options={vendors}
            onChange={setSelectedVendor}
            value={selectedVendor}
          />
          <Select
            label="Tag"
            options={tags}
            onChange={setSelectedTag}
            value={selectedTag}
          />
        </FormLayout>
      </BlockStack>
    </Card>
  );
}
