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
      className="group relative bg-[#10121C] rounded-3xl border border-white/10 shadow-xl shadow-black/50 hover:border-[#FFD000]/50 hover:shadow-2xl hover:shadow-[#FFD000]/10 transition-all duration-300 hover:-translate-y-1.5 flex flex-col overflow-hidden cursor-pointer"
    >
      {/* Product Image Area with Hover Zoom */}
      <div className="relative w-full aspect-square bg-[#08090F] overflow-hidden border-b border-white/5">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
        />

        {/* Category Pill Tag */}
        <div className="absolute top-3.5 left-3.5 z-10">
          <span className="px-3 py-1 rounded-full text-[11px] font-bold bg-black/80 backdrop-blur-md text-slate-200 shadow-md border border-white/15">
            {product.category}
          </span>
        </div>

        {/* Stock / Discount Tag */}
        {product.originalPrice && product.originalPrice > product.price && (
          <div className="absolute top-3.5 right-3.5 z-10">
            <span className="px-2.5 py-1 rounded-full text-[11px] font-black bg-[#FFD000] text-slate-950 shadow-md shadow-[#FFD000]/30">
              Save {formatBDT(product.originalPrice - product.price)}
            </span>
          </div>
        )}

        {/* Quick View Details Overlay Button */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none sm:pointer-events-auto">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails?.(product);
            }}
            className="px-4 py-2 rounded-xl bg-[#141624] text-white font-bold text-xs shadow-xl border border-white/20 flex items-center gap-1.5 hover:border-[#FFD000] hover:text-[#FFD000] transition-all active:scale-95"
          >
            <Eye className="w-3.5 h-3.5 text-[#FFD000]" />
            <span>View Details</span>
          </button>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Rating & Stock Indicator */}
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <div className="flex items-center gap-1 text-[#FFD000]">
              <Star className="w-3.5 h-3.5 fill-[#FFD000] text-[#FFD000]" />
              <span className="font-bold text-white text-xs">
                {product.rating ?? 4.8}
              </span>
            </div>
            <div className="flex items-center gap-1 text-emerald-400 text-[11px] font-semibold">
              <CheckCircle2 className="w-3 h-3" />
              <span>In Stock</span>
            </div>
          </div>

          {/* Product Title */}
          <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-[#FFD000] transition-colors line-clamp-1">
            {product.name}
          </h3>

          {/* Short Description */}
          <p className="mt-1.5 text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Price and Add to Cart Section */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
          {/* Price display */}
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1.5">
              <span className="text-xl sm:text-2xl font-black text-[#FFD000] tracking-tight">
                {formatBDT(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-slate-500 line-through">
                  {formatBDT(product.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">
              Cash on Delivery
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            type="button"
            onClick={handleAddToCart}
            className={`relative px-4 py-2.5 rounded-2xl font-bold text-xs sm:text-sm flex items-center gap-1.5 transition-all duration-200 active:scale-95 shadow-md ${
              justAdded
                ? "bg-emerald-500 text-slate-950 shadow-emerald-500/30"
                : "bg-white/10 hover:bg-[#FFD000] text-white hover:text-slate-950 border border-white/10 hover:border-[#FFD000] shadow-sm hover:shadow-[#FFD000]/30"
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {justAdded ? (
              <>
                <Check className="w-4 h-4 stroke-[3]" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
                <span>Add to Cart</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
