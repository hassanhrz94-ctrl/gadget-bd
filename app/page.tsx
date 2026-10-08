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
  PackageCheck
} from "lucide-react";

export default function HomePage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <div className="min-h-screen">
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. Featured Products Section (STRICTLY ONLY 3 PRODUCTS) */}
      <section className="py-16 sm:py-20 bg-slate-50 relative border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-3">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Handpicked Collection</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Gadgets
              </h2>
              <p className="mt-2 text-base text-slate-600 max-w-xl">
                Our top 3 best-selling gadgets chosen by tech lovers across Bangladesh.
              </p>
            </div>

            {/* Link to all products */}
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors group"
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
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-base shadow-md shadow-slate-900/10 hover:shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>View All Gadgets & Accessories</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

        </div>
      </section>

      {/* 3. How WhatsApp Ordering Works */}
      <section className="py-16 sm:py-20 bg-white border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Simple 3-Step WhatsApp Ordering
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              No account creation or complicated checkout needed. Order directly in seconds.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Step 1 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center mb-5 shadow-md shadow-emerald-600/20">
                1
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Choose Your Gadget
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Browse our curated catalogue and click “Add to Cart” or “View Details” to configure your order.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white font-black text-lg flex items-center justify-center mb-5 shadow-md shadow-emerald-600/20">
                2
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Review Your Bag
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Open your shopping bag, adjust quantities, review item subtotals, and check your total price in BDT.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-7 rounded-3xl bg-slate-50 border border-slate-200/80 relative flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-2xl bg-[#25D366] text-white font-black text-lg flex items-center justify-center mb-5 shadow-md shadow-emerald-500/20">
                3
              </div>
              <h3 className="font-bold text-lg text-slate-900 mb-2">
                Buy Now on WhatsApp
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Click “Buy Now on WhatsApp” to automatically launch WhatsApp with your pre-formatted order message!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Choose My Gadget BD */}
      <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-emerald-50/30 border-t border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-5">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Trusted by 10,000+ Customers</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Authentic Gadgets. Transparent Prices.
              </h2>
              <p className="mt-4 text-slate-600 text-base leading-relaxed">
                We believe in hassle-free gadget shopping in Bangladesh. Every product is individually inspected for performance, authentic specifications, and battery life before delivery.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Cash on Delivery available inside & outside Dhaka</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>7-Day Replacement Warranty on manufacturing defects</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 text-sm font-medium">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Direct owner response on WhatsApp for quick query resolution</span>
                </div>
              </div>

              <div className="mt-8">
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                  <span>Chat With Us on WhatsApp ({SITE_CONFIG.whatsappDisplayNumber})</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <Truck className="w-8 h-8 text-emerald-600 mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-1">Fast Delivery</h4>
                <p className="text-xs text-slate-500">
                  24–48 hours inside Dhaka city. 48–72 hours across other districts in Bangladesh.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <CreditCard className="w-8 h-8 text-emerald-600 mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-1">Cash on Delivery</h4>
                <p className="text-xs text-slate-500">
                  Inspect the parcel upon delivery. Pay conveniently with Cash, bKash, or Nagad.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <PackageCheck className="w-8 h-8 text-emerald-600 mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-1">100% Inspected</h4>
                <p className="text-xs text-slate-500">
                  Every earbud, charger, and smartwatch is tested prior to shipping out.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-xs">
                <ShieldCheck className="w-8 h-8 text-emerald-600 mb-3" />
                <h4 className="font-bold text-slate-900 text-base mb-1">Authentic Support</h4>
                <p className="text-xs text-slate-500">
                  Direct personal customer service via WhatsApp for troubleshooting and queries.
                </p>
              </div>
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
