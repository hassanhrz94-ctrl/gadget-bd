"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Hero } from "@/components/Hero";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailsModal } from "@/components/ProductDetailsModal";
import { featuredProducts } from "@/data/products";
import { Product } from "@/types/product";
import { SITE_CONFIG } from "@/config/site";
import { 
  ArrowRight, 
  Sparkles, 
  Truck, 
  ShieldCheck, 
  MessageCircle, 
  CreditCard,
  CheckCircle2,
  PackageCheck,
  Zap,
  ShoppingBag,
  Flame,
  Clock
} from "lucide-react";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen bg-[#090A10] text-slate-100">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Featured Products Section (STRICTLY ONLY 3 PRODUCTS) */}
      <section className="py-16 sm:py-24 bg-[#0C0E17] relative border-t border-white/10">
        {/* Subtle ambient lighting glows */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-48 bg-[#FFD000]/5 blur-3xl rounded-full"
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 sm:mb-14 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFD000]/10 text-[#FFD000] border border-[#FFD000]/25 mb-3 shadow-xs">
                <Zap className="w-3.5 h-3.5 fill-[#FFD000] text-[#FFD000]" />
                <span>Handpicked Collection</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Featured <span className="text-[#FFD000] drop-shadow-[0_0_15px_rgba(255,208,0,0.35)]">Gadgets</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-xl">
                Our top 3 best-selling gadgets chosen by tech and aesthetic room decor lovers across Bangladesh.
              </p>
            </div>

            {/* Link to all products */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FFD000] hover:text-[#ffe14d] transition-colors group"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Featured Products Grid (Exactly 3 Products) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>

          {/* Bottom Banner inside Featured Section */}
          <div className="mt-14 text-center">
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-white/5 hover:bg-white/10 text-white font-bold text-base border border-white/15 hover:border-[#FFD000]/40 shadow-xl transition-all hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>View All Gadgets & Accessories</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#FFD000]" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. How WhatsApp Ordering Works */}
      <section className="py-16 sm:py-24 bg-[#090A10] border-t border-white/10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 mb-3">
              <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
              <span>Hassle-Free Checkout</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
              Fast 3-Step <span className="text-[#25D366]">WhatsApp</span> Ordering
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Inspired by our fast shopping cart — no account registration or complicated forms needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="p-8 rounded-3xl bg-[#11131E] border border-white/10 hover:border-[#FFD000]/40 transition-all duration-300 relative flex flex-col items-center text-center shadow-xl group">
              <div className="w-14 h-14 rounded-2xl bg-[#FFD000] text-slate-950 font-black text-xl flex items-center justify-center mb-6 shadow-lg shadow-[#FFD000]/25 group-hover:scale-110 transition-transform">
                1
              </div>
              <h3 className="font-extrabold text-lg text-white mb-2">
                Pick Your Gadget
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Browse our curated gadgets and click <strong className="text-white">“Add to Bag”</strong> or <strong className="text-white">“View Details”</strong> to see full specifications.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-3xl bg-[#11131E] border border-white/10 hover:border-[#FFD000]/40 transition-all duration-300 relative flex flex-col items-center text-center shadow-xl group">
              <div className="w-14 h-14 rounded-2xl bg-[#FFD000] text-slate-950 font-black text-xl flex items-center justify-center mb-6 shadow-lg shadow-[#FFD000]/25 group-hover:scale-110 transition-transform">
                2
              </div>
              <h3 className="font-extrabold text-lg text-white mb-2">
                Review Your Bag
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Open your shopping bag, select your delivery area (Inside/Outside Dhaka), and review item subtotals in BDT.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-3xl bg-[#11131E] border border-[#25D366]/30 hover:border-[#25D366]/60 transition-all duration-300 relative flex flex-col items-center text-center shadow-xl shadow-emerald-500/5 group">
              <div className="w-14 h-14 rounded-2xl bg-[#25D366] text-white font-black text-xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                3
              </div>
              <h3 className="font-extrabold text-lg text-white mb-2">
                Buy Now on WhatsApp
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Click <strong className="text-[#25D366]">“Buy Now on WhatsApp”</strong> to send your pre-formatted order message to <strong className="text-white">{SITE_CONFIG.whatsappDisplayNumber}</strong>!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose My Gadget BD (Reflecting Official Logo Tagline) */}
      <section className="py-16 sm:py-24 bg-[#0C0E17] border-t border-white/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFD000]/10 text-[#FFD000] border border-[#FFD000]/25 mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>10,000+ Happy Customers</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Smart Gadgets.{" "}
                <span className="text-[#FFD000] block">Best Price.</span>
                <span className="text-white block">Trusted Service.</span>
              </h2>
              
              <p className="mt-4 text-slate-300 text-base leading-relaxed">
                We believe in authentic, hassle-free gadget shopping in Bangladesh. Every product is individually tested for performance, build quality, and battery longevity before dispatch.
              </p>

              <div className="mt-6 space-y-3.5">
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#FFD000]/15 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD000]" />
                  </div>
                  <span>Cash on Delivery inside & outside Dhaka</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#FFD000]/15 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#FFD000]" />
                  </div>
                  <span>7-Day Replacement Warranty on manufacturing defects</span>
                </div>
                <div className="flex items-center gap-3 text-slate-200 text-sm font-medium">
                  <div className="w-6 h-6 rounded-full bg-[#25D366]/15 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                  </div>
                  <span>Direct owner response on WhatsApp for quick query resolution</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-sm shadow-lg shadow-emerald-500/25 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Chat With Us on WhatsApp ({SITE_CONFIG.whatsappDisplayNumber})</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-[#11131E] border border-white/10 hover:border-[#FFD000]/30 transition-all shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-[#FFD000]/10 flex items-center justify-center text-[#FFD000] mb-4 border border-[#FFD000]/20">
                  <Truck className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-white text-base mb-1.5">Express Delivery</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  24–48 hours inside Dhaka city. 48–72 hours across other districts nationwide.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#11131E] border border-white/10 hover:border-[#FFD000]/30 transition-all shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-[#FFD000]/10 flex items-center justify-center text-[#FFD000] mb-4 border border-[#FFD000]/20">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-white text-base mb-1.5">Cash on Delivery</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Inspect the parcel upon delivery. Pay conveniently with Cash, bKash, or Nagad.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#11131E] border border-white/10 hover:border-[#FFD000]/30 transition-all shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-[#FFD000]/10 flex items-center justify-center text-[#FFD000] mb-4 border border-[#FFD000]/20">
                  <PackageCheck className="w-6 h-6" />
                </div>
                <h4 className="font-extrabold text-white text-base mb-1.5">100% Inspected</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every ambient light, gadget, and cable is manually inspected prior to dispatch.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-[#11131E] border border-white/10 hover:border-[#25D366]/30 transition-all shadow-lg">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] mb-4 border border-[#25D366]/20">
                  <MessageCircle className="w-6 h-6 fill-[#25D366]" />
                </div>
                <h4 className="font-extrabold text-white text-base mb-1.5">WhatsApp Helpline</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Fast support directly on WhatsApp for troubleshooting and order tracking.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Official Brand Showcase Banner */}
      <section className="py-14 bg-gradient-to-r from-[#0C0E17] via-[#141624] to-[#0C0E17] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-[#10121C] border border-[#FFD000]/25 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-[#FFD000] shadow-[0_0_20px_rgba(255,208,0,0.4)] shrink-0 bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={SITE_CONFIG.logo}
                  alt={SITE_CONFIG.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  My <span className="text-[#FFD000]">Gadget</span> BD
                </h3>
                <p className="text-xs sm:text-sm text-[#FFD000] font-semibold mt-0.5">
                  Smart Gadgets • Best Price • Trusted Service
                </p>
                <p className="text-xs text-slate-400 mt-1">
                  Have questions about our products or need bulk orders? Message us directly!
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "Hello My Gadget BD, I would like to order a gadget."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-lg shadow-emerald-500/25 flex items-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>WhatsApp: {SITE_CONFIG.whatsappDisplayNumber}</span>
              </a>

              <Link
                href="/products"
                className="px-6 py-3.5 rounded-2xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 transition-all hover:scale-105 active:scale-95"
              >
                View Catalog
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
