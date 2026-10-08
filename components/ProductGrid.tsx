"use client";

import React from "react";
import { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onViewDetails?: (product: Product) => void;
  columns?: "3" | "4";
}

export function ProductGrid({
  products,
  onViewDetails,
  columns = "3",
}: ProductGridProps) {
  const gridColClass =
    columns === "4"
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={`grid ${gridColClass} gap-6 sm:gap-8`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onViewDetails={onViewDetails}
        />
      ))}
    </div>
  );
}
