export type ProductCategory =
  | "Ambient Lights"
  | "Earbuds"
  | "Smart Watch"
  | "Chargers"
  | "Accessories"
  | "Other Gadgets";

export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string; // The user will paste their image link here
  category: ProductCategory;
  shortDescription: string;
  description: string;
  features?: string[];
  inStock: boolean;
  isFeatured?: boolean;
  rating?: number;
}
