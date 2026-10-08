"use client";

import React from "react";
import { MessageCircle, ExternalLink } from "lucide-react";
import { CartItem } from "@/types/cart";
import { generateWhatsAppOrderUrl } from "@/config/site";

interface WhatsAppButtonProps {
  items: CartItem[];
  customerNote?: string;
  className?: string;
  disabled?: boolean;
}

export function WhatsAppButton({
  items,
  customerNote,
  className = "",
  disabled = false,
}: WhatsAppButtonProps) {
  const orderItems = items.map((item) => ({
    name: item.product.name,
    quantity: item.quantity,
    price: item.product.price,
  }));

  const isDisabled = disabled || items.length === 0;

  const handleClick = (e: React.MouseEvent) => {
    if (isDisabled) {
      e.preventDefault();
      return;
    }

    const waUrl = generateWhatsAppOrderUrl(orderItems, customerNote);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isDisabled}
      className={`group relative w-full py-4 px-6 rounded-2xl font-bold text-base flex items-center justify-center gap-3 transition-all duration-200 ${
        isDisabled
          ? "bg-slate-200 text-slate-400 cursor-not-allowed"
          : "bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1caa51] text-white shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/35 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
      } ${className}`}
      aria-label="Buy Now on WhatsApp"
    >
      <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
        <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
      </div>
      <span>Buy Now on WhatsApp</span>
      {!isDisabled && (
        <ExternalLink className="w-4 h-4 ml-1 opacity-70 group-hover:opacity-100 transition-opacity" />
      )}
    </button>
  );
}
