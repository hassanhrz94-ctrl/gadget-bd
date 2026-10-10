"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { CartItem } from "@/components/CartItem";
import { EmptyCart } from "@/components/EmptyCart";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { formatBDT, SITE_CONFIG } from "@/config/site";
import {
  ShoppingBag,
  ArrowLeft,
  Trash2,
  ShieldCheck,
  Truck,
  PhoneCall,
  MapPin,
  Sparkles,
  MessageCircle,
  Gift,
  Tag,
  Zap,
  FlameKindling
} from "lucide-react";

export default function CartPage() {
  const { items, clearCart, totalCount, totalPrice, isLoaded } = useCart();
  const [customerNote, setCustomerNote] = useState("");
  const [selectedArea, setSelectedArea] = useState<"dhaka" | "outside">("dhaka");

  // Show a lightweight placeholder while reading localStorage on initial load
  if (!isLoaded) {
    return (
      <div className="min-h-screen py-16 px-4 flex items-center justify-center bg-[#090A10]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-[#FFD000]/20 border-t-[#FFD000] rounded-full animate-spin" />
          <span className="text-xs font-bold text-slate-400">Loading your shopping bag...</span>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen py-12 bg-[#090A10]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <EmptyCart />
        </div>
      </div>
    );
  }

  // Delivery charge calculation for Bangladesh
  const deliveryFee = selectedArea === "dhaka" ? 60 : 120;
  const grandTotal = totalPrice + deliveryFee;

  // Prepare full note for WhatsApp including delivery area
  const fullNotes = `Delivery Area: ${selectedArea === "dhaka" ? "Inside Dhaka (৳60 delivery)" : "Outside Dhaka (৳120 delivery)"
    }${customerNote.trim() ? `\nCustomer Note: ${customerNote.trim()}` : ""}`;

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#090A10] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Navigation & Title */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-8 mb-8 border-b border-white/10 gap-4">
          <div>
            <Link
              href="/products"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FFD000] hover:text-[#ffe14d] transition-colors mb-2"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Continue Shopping</span>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
              <span>Shopping Bag</span>
              <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-[#FFD000] text-slate-950">
                {totalCount} {totalCount === 1 ? "item" : "items"}
              </span>
            </h1>
          </div>

          {/* Clear Cart Button */}
          <button
            type="button"
            onClick={clearCart}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 border border-white/10 hover:border-rose-500/30 transition-all cursor-pointer"
            aria-label="Clear shopping bag"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>Clear Bag</span>
          </button>
        </div>

        {/* Main Cart Layout: 2 Columns on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Items List (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 px-1 font-bold uppercase tracking-wider">
              <span>Selected Gadgets</span>
              <span className="hidden sm:inline">Quantity & Subtotal</span>
            </div>

            {items.map((item) => (
              <CartItem key={item.product.id} item={item} />
            ))}

            {/* ✨ COMBO OFFER BANNER ✨ */}
            <div className="relative overflow-hidden rounded-2xl border border-[#FFD000]/40 bg-gradient-to-br from-[#1A1500] via-[#12100A] to-[#0C1A0A] shadow-2xl shadow-[#FFD000]/10">
              {/* Glowing top line */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FFD000]/70 to-transparent" />
              {/* Background ambient glow */}
              <div className="pointer-events-none absolute -top-8 -right-8 w-40 h-40 rounded-full bg-[#FFD000]/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-emerald-500/10 blur-3xl" />

              {/* HOT DEAL Badge */}
              <div className="absolute top-3 right-3 z-10 flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFD000] text-slate-950 text-[10px] font-black shadow-lg shadow-[#FFD000]/30 animate-pulse">
                <FlameKindling className="w-3 h-3" />
                <span>HOT DEAL</span>
              </div>

              <div className="flex flex-col sm:flex-row overflow-hidden">
                {/* Offer Image */}
                <div className="relative sm:w-48 shrink-0 h-40 sm:h-auto">
                  <Image
                    src="https://i.ibb.co.com/0Ry432QX/offer-image.jpg"
                    alt="Combo Offer - 3 Items for ৳999 with Free Small Light"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 192px"
                    priority
                  />
                  <div className="absolute inset-0 sm:bg-gradient-to-r sm:from-transparent sm:to-[#12100A]" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12100A] sm:from-transparent to-transparent" />
                </div>

                {/* Offer Details */}
                <div className="flex-1 p-5 sm:pl-3 relative z-10">
                  <div className="flex items-center gap-1.5 mb-1">
                    <Zap className="w-3.5 h-3.5 text-[#FFD000] fill-[#FFD000] shrink-0" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#FFD000]">Exclusive Combo Offer</span>
                  </div>

                  <h3 className="text-base sm:text-lg font-black text-white leading-tight mb-2">
                    Buy Any <span className="text-[#FFD000]">3 Products</span> &amp; Save Big!
                  </h3>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-2xl font-black text-[#FFD000] drop-shadow-[0_0_10px_rgba(255,208,0,0.4)]">৳999</span>
                    <span className="text-xs text-slate-500">for 3 items combo</span>
                  </div>

                  <div className="space-y-1.5 mb-4">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Tag className="w-3.5 h-3.5 text-[#FFD000] shrink-0" />
                      <span>Get <strong className="text-white">3 items</strong> together for only <strong className="text-[#FFD000]">৳999</strong></span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <Gift className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span><strong className="text-emerald-400">FREE Small Light</strong> included with this combo!</span>
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent("Hello My Gadget BD,\n\nI want to order the 3-item Combo Offer for ৳999 + FREE Small Light.\n\nPlease confirm my order. Thank you!")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFD000] hover:bg-[#ffe14d] text-slate-950 text-xs font-black transition-all hover:-translate-y-0.5 shadow-lg shadow-[#FFD000]/25"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Claim This Offer on WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent" />
            </div>

            {/* Quick Assistance Callout */}
            <div className="p-4 rounded-2xl bg-[#10121C] border border-[#25D366]/30 flex items-start gap-3 text-xs text-slate-300 shadow-lg">
              <PhoneCall className="w-4 h-4 text-[#25D366] shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <span className="font-bold text-white">Need assistance before ordering?</span> You can talk to us directly on WhatsApp at{" "}
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#25D366] underline hover:text-[#20bd5a]"
                >
                  {SITE_CONFIG.whatsappDisplayNumber}
                </a>{" "}
                for stock confirmation, delivery queries, or special requests.
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary & WhatsApp Checkout (5 cols) */}
          <div className="lg:col-span-5 sticky top-24">
            <div className="bg-[#10121C] rounded-3xl p-6 sm:p-7 border border-white/10 shadow-2xl">
              <h2 className="text-lg font-black text-white pb-4 border-b border-white/10">
                Order Summary
              </h2>

              {/* Items Breakdown list */}
              <div className="py-4 space-y-2.5 text-xs text-slate-400 border-b border-white/10">
                {items.map((item) => (
                  <div key={item.product.id} className="flex justify-between items-center">
                    <span className="truncate max-w-[200px] text-slate-300">
                      {item.product.name} × {item.quantity}
                    </span>
                    <span className="font-bold text-white">
                      {formatBDT(item.product.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Subtotal */}
              <div className="py-3 flex justify-between items-center text-sm">
                <span className="text-slate-400">Products Subtotal</span>
                <span className="font-bold text-white">
                  {formatBDT(totalPrice)}
                </span>
              </div>

              {/* Delivery Destination Selector */}
              <div className="py-3 border-t border-white/10">
                <label className="block text-xs font-bold text-slate-300 mb-2">
                  Delivery Area in Bangladesh:
                </label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedArea("dhaka")}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${selectedArea === "dhaka"
                      ? "border-[#FFD000] bg-[#FFD000]/15 font-bold text-[#FFD000]"
                      : "border-white/10 bg-white/5 hover:bg-white/10 text-slate-300"
                      }`}
                  >
                    <div className="font-black">Inside Dhaka</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">৳60 (24-48 hrs)</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedArea("outside")}
                    className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${selectedArea === "outside"
                      ? "border-[#FFD000] bg-[#FFD000]/15 font-bold text-[#FFD000]"
                      : "border-white/10 bg-white/5 hover:bg-white/10 text-slate-300"
                      }`}
                  >
                    <div className="font-black">Outside Dhaka</div>
                    <div className="text-[11px] text-slate-400 mt-0.5">৳120 (48-72 hrs)</div>
                  </button>
                </div>
              </div>

              {/* Optional Delivery Address or Notes */}
              <div className="py-3 border-t border-white/10">
                <label className="block text-xs font-bold text-slate-300 mb-1.5 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#FFD000]" />
                  <span>Delivery Address / Customer Note:</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Dhanmondi, Dhaka / 017XXXXXXXX"
                  value={customerNote}
                  onChange={(e) => setCustomerNote(e.target.value)}
                  className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-[#FFD000]/25 focus:border-[#FFD000]"
                />
                <span className="block text-[10px] text-slate-500 mt-1">
                  Will be included in your WhatsApp order message.
                </span>
              </div>

              {/* Grand Total */}
              <div className="pt-4 pb-6 border-t border-white/10 flex justify-between items-baseline">
                <div>
                  <span className="text-base font-black text-white block">
                    Estimated Total
                  </span>
                  <span className="text-[11px] text-slate-400">
                    Includes delivery fee
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-black text-[#FFD000] tracking-tight">
                    {formatBDT(grandTotal)}
                  </span>
                </div>
              </div>

              {/* Main Checkout Button: Buy Now on WhatsApp */}
              <WhatsAppButton
                items={items}
                customerNote={fullNotes}
              />

              {/* WhatsApp Ordering Explainer */}
              <div className="mt-4 text-center">
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  Clicking <strong className="text-white">Buy Now on WhatsApp</strong> will open WhatsApp chat with <strong className="text-[#25D366] font-bold">{SITE_CONFIG.whatsappDisplayNumber}</strong> with your order pre-filled.
                </p>
              </div>

              {/* Security & Warranty badges */}
              <div className="mt-5 pt-4 border-t border-white/10 grid grid-cols-2 gap-2 text-[11px] text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-[#FFD000] shrink-0" />
                  <span>Cash on Delivery</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#FFD000] shrink-0" />
                  <span>7-Day Replacement</span>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
