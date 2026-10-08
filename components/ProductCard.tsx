"use client";

import React, { useState } from "react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { formatBDT } from "@/config/site";
import { ImageWithFallback } from "./ImageWithFallback";
import { 
  ShoppingBag, 
  Check, 
  Eye, 
  Star,
  CheckCircle2
} from "lucide-react";

interface ProductCardProps {
  product: Product;
  onViewDetails?: (product: Product) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const { addToCart } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); // Don't trigger card modal open
    addToCart(product, 1);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1500);
  };

  return (
    <div
      onClick={() => onViewDetails?.(product)}
      className="group relative bg-white rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:shadow-slate-900/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Product Image Area with Hover Zoom */}
      <div className="relative w-full aspect-square bg-slate-50 overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
        />

        {/* Category Pill Tag */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-white/90 backdrop-blur-md text-slate-800 shadow-xs border border-slate-200/50">
            {product.category}
          </span>
        </div>

        {/* Stock / Discount Tag */}
        {product.originalPrice && product.originalPrice > product.price && (
          <div className="absolute top-3.5 right-3.5 z-10">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-600 text-white shadow-xs">
              Save {formatBDT(product.originalPrice - product.price)}
            </span>
          </div>
        )}

        {/* Quick View Details Overlay Button */}
        <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none sm:pointer-events-auto">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails?.(product);
            }}
            className="px-4 py-2 rounded-xl bg-white text-slate-900 font-medium text-xs shadow-lg flex items-center gap-1.5 hover:bg-slate-50 transition-transform active:scale-95"
          >
            <Eye className="w-3.5 h-3.5 text-emerald-600" />
            <span>View Details</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating & Stock Indicator */}
          <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
            <div className="flex items-center gap-1 text-amber-500">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span className="font-semibold text-slate-700 text-xs">
                {product.rating ?? 4.8}
              </span>
            </div>
            <div className="flex items-center gap-1 text-emerald-600 text-[11px] font-medium">
              <CheckCircle2 className="w-3 h-3" />
              <span>In Stock</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-semibold text-base sm:text-lg text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="mt-1.5 text-xs sm:text-sm text-slate-500 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price and Add to Cart Section */}
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          {/* Price display */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg sm:text-xl font-extrabold text-slate-950 tracking-tight">
                {formatBDT(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-400 line-through">
                  {formatBDT(product.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">
              Cash on Delivery
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className={`relative px-4 py-2.5 rounded-2xl font-semibold text-xs sm:text-sm flex items-center gap-1.5 transition-all duration-200 active:scale-95 shadow-xs ${
              justAdded
                ? "bg-emerald-700 text-white shadow-emerald-700/30"
                : "bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/25 hover:shadow-emerald-600/35"
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4 stroke-[2.5]" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 stroke-[2]" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
