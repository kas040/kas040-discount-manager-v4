export interface Product {
  id: string;
  title: string;
  vendor?: string;
  tags?: string[];
  collections?: string[];
  variants: Variant[];
}

export interface Variant {
  id: string;
  title: string;
  price: number;
}

export interface SelectOption {
  label: string;
  value: string;
}
