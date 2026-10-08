"use client";

import React from "react";
import { CartItem as CartItemType } from "@/types/cart";
import { useCart } from "@/context/CartContext";
import { formatBDT } from "@/config/site";
import { ImageWithFallback } from "./ImageWithFallback";
import { Plus, Minus, Trash2 } from "lucide-react";

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;
  const subtotal = product.price * quantity;

  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 sm:p-5 bg-[#10121C] rounded-2xl border border-white/10 shadow-lg hover:border-[#FFD000]/30 transition-all">
      {/* Product Image and Meta */}
      <div className="flex items-center gap-4">
        <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-xl overflow-hidden bg-black shrink-0 border border-white/10">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <span className="text-[11px] font-bold text-[#FFD000] uppercase tracking-wider">
            {product.category}
          </span>
          <h4 className="font-bold text-white text-sm sm:text-base leading-snug line-clamp-1">
            {product.name}
          </h4>
          <p className="text-xs text-slate-400 mt-0.5">
            Unit Price: <span className="font-semibold text-white">{formatBDT(product.price)}</span>
          </p>

          {/* Mobile subtotal */}
          <div className="sm:hidden mt-2 text-sm font-black text-[#FFD000]">
            Subtotal: {formatBDT(subtotal)}
          </div>
        </div>
      </div>

      {/* Quantity Stepper & Subtotal */}
      <div className="flex items-center justify-between sm:justify-end gap-6 pt-3 sm:pt-0 border-t sm:border-t-0 border-white/10">
        {/* Quantity Controls */}
        <div className="flex items-center border border-white/15 rounded-xl bg-white/5 p-1">
          <button
            type="button"
            onClick={() => updateQuantity(product.id, quantity - 1)}
            disabled={quantity <= 1}
            className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-200 hover:text-white disabled:opacity-30 transition-all shadow-xs"
            aria-label={`Decrease quantity of ${product.name}`}
          >
            <Minus className="w-3.5 h-3.5" />
          </button>
          
          <span className="w-9 text-center font-bold text-sm text-white">
            {quantity}
          </span>

          <button
            type="button"
            onClick={() => updateQuantity(product.id, quantity + 1)}
            className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-200 hover:text-white transition-all shadow-xs"
            aria-label={`Increase quantity of ${product.name}`}
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Desktop Subtotal */}
        <div className="hidden sm:block text-right min-w-[90px]">
          <span className="block text-[10px] text-slate-400 uppercase tracking-wider">
            Subtotal
          </span>
          <span className="font-black text-base text-[#FFD000]">
            {formatBDT(subtotal)}
          </span>
        </div>

        {/* Remove Button */}
        <button
          type="button"
          onClick={() => removeFromCart(product.id)}
          className="w-9 h-9 rounded-xl text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 flex items-center justify-center transition-colors"
          title="Remove from cart"
          aria-label={`Remove ${product.name} from cart`}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
