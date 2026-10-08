"use client";

import React, { useState, useEffect } from "react";
import { Product } from "@/types/product";
import { useCart } from "@/context/CartContext";
import { formatBDT, generateSingleProductWhatsAppUrl, SITE_CONFIG } from "@/config/site";
import { ImageWithFallback } from "./ImageWithFallback";
import {
  X,
  Plus,
  Minus,
  ShoppingBag,
  CheckCircle2,
  ShieldCheck,
  Truck,
  Star,
  Check,
  MessageCircle,
} from "lucide-react";

interface ProductDetailsModalProps {
  product: Product | null;
  onClose: () => void;
}

export function ProductDetailsModal({
  product,
  onClose,
}: ProductDetailsModalProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [justAdded, setJustAdded] = useState(false);

  // Reset quantity when modal opens for a new product
  useEffect(() => {
    setQuantity(1);
    setJustAdded(false);
  }, [product]);

  // Lock body scroll while modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [product]);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setJustAdded(true);
    setTimeout(() => {
      setJustAdded(false);
    }, 1500);
  };

  const handleBuyNowWhatsApp = () => {
    const waUrl = generateSingleProductWhatsAppUrl(
      product.name,
      product.price,
      quantity
    );
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative bg-white w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col md:flex-row border border-slate-100 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-modal-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 hover:bg-slate-100 text-slate-500 hover:text-slate-900 shadow-md flex items-center justify-center transition-all"
          aria-label="Close product details"
        >
          <X className="w-5 h-5 stroke-[2]" />
        </button>

        {/* Left Side: Large Product Image */}
        <div className="md:w-1/2 bg-slate-50 relative min-h-[260px] md:min-h-full flex items-center justify-center p-6 border-b md:border-b-0 md:border-r border-slate-100">
          <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-inner bg-white">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          {/* Category Chip */}
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-slate-800 shadow-xs border border-slate-200/60">
            {product.category}
          </span>
        </div>

        {/* Right Side: Details & Actions */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto flex flex-col justify-between">
          <div>
            {/* Rating and Stock */}
            <div className="flex items-center justify-between text-xs mb-2">
              <div className="flex items-center gap-1.5 text-amber-500">
                <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                <span className="font-bold text-slate-800 text-sm">
                  {product.rating ?? 4.8}
                </span>
                <span className="text-slate-400">(Customer verified)</span>
              </div>
              <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                In Stock (Ready to Deliver)
              </span>
            </div>

            {/* Product Title */}
            <h2
              id="product-modal-title"
              className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight"
            >
              {product.name}
            </h2>

            {/* Price Row */}
            <div className="mt-3 flex items-baseline gap-2.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-emerald-600">
                {formatBDT(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-slate-400 line-through">
                  {formatBDT(product.originalPrice)}
                </span>
              )}
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">
                  Save {formatBDT(product.originalPrice - product.price)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              {product.description}
            </p>

            {/* Key Features List if present */}
            {product.features && product.features.length > 0 && (
              <div className="mt-4 pt-4 border-t border-slate-100">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                  Key Specifications:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Quantity and Action Buttons */}
          <div className="mt-6 pt-6 border-t border-slate-100 space-y-4">
            {/* Quantity Selector */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-700">Quantity</span>
              <div className="flex items-center border border-slate-200 rounded-xl bg-slate-50 p-1">
                <button
                  type="button"
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 disabled:opacity-40 transition-all shadow-xs"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="w-10 text-center font-bold text-sm text-slate-900">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-slate-600 hover:text-slate-900 transition-all shadow-xs"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Subtotal calculation */}
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>Item Subtotal:</span>
              <span className="font-bold text-sm text-slate-900">
                {formatBDT(product.price * quantity)}
              </span>
            </div>

            {/* Buttons: Add to Cart & Buy Now WhatsApp */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* Add to Cart Button */}
              <button
                type="button"
                onClick={handleAddToCart}
                className={`w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 border transition-all active:scale-95 ${
                  justAdded
                    ? "bg-slate-900 text-white border-slate-900"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-200"
                }`}
              >
                {justAdded ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400 stroke-[2.5]" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4" />
                    <span>Add to Bag</span>
                  </>
                )}
              </button>

              {/* Buy Now directly on WhatsApp */}
              <button
                type="button"
                onClick={handleBuyNowWhatsApp}
                className="w-full py-3 px-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md shadow-emerald-600/20 transition-all active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                <span>Buy Now (WhatsApp)</span>
              </button>
            </div>

            {/* Direct WhatsApp ordering notice */}
            <p className="text-[11px] text-center text-slate-500">
              Orders are sent directly to WhatsApp: <strong className="text-emerald-700 font-bold">{SITE_CONFIG.whatsappDisplayNumber}</strong>
            </p>

            {/* Delivery and Warranty Micro-badges */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-500 pt-1">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>24-48h Dhaka Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>7-Day Replacement</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
