import { useState } from "react";
import { Card, Page, Layout, TextField, Button, Select } from "@shopify/polaris";

export default function DiscountManager() {
  const [discount, setDiscount] = useState("");
  const [selectionType, setSelectionType] = useState("collection");
  const [selectionValue, setSelectionValue] = useState("");

  const handleSubmit = async () => {
    const response = await fetch("/routes/api/apply-discount", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        selectionType,
        selectionValue,
        discount: parseFloat(discount),
      }),
    });

    if (response.ok) {
      alert("Korting succesvol toegepast!");
    } else {
      alert("Er is iets misgegaan.");
    }
  };

  return (
    <Page title="Korting Beheer">
      <Layout>
        <Layout.Section>
          <Card>
            <Card>
              <Select
                label="Selecteer type"
                options={[
                  { label: "Collectie", value: "collection" },
                  { label: "Tag", value: "tag" },
                  { label: "Vendor", value: "vendor" },
                ]}
                onChange={(value) => setSelectionType(value)}
                value={selectionType}
              />
              <TextField
                label="Naam van Collectie / Tag / Vendor"
                value={selectionValue}
                onChange={(value) => setSelectionValue(value)}
                autoComplete="off"
              />
              <TextField
                label="Korting (%)"
                type="number"
                value={discount}
                onChange={(value) => setDiscount(value)}
                autoComplete="off"
              />
              <Button variant="primary" onClick={handleSubmit}>
  Korting Toepassen
</Button>

            </Card>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
