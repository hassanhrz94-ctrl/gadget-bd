"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, ArrowRight, Sparkles } from "lucide-react";

export function EmptyCart() {
  return (
    <div className="py-16 sm:py-24 px-4 text-center max-w-md mx-auto flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
      {/* Visual Bag Icon Container */}
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-3xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-lg shadow-emerald-600/10">
          <ShoppingBag className="w-12 h-12 stroke-[1.5]" />
        </div>
        <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
          <Sparkles className="w-4 h-4 fill-white" />
        </div>
      </div>

      {/* Main Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
        Your bag is empty
      </h2>

      {/* Subtitle */}
      <p className="mt-2.5 text-sm sm:text-base text-slate-500 max-w-xs leading-relaxed">
        Looks like you haven’t added any gadgets yet. Explore our trending gadgets
        and find something you’ll love!
      </p>

      {/* Action Button */}
      <div className="mt-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Explore Products</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
