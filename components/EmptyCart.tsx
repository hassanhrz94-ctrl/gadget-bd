"use client";

import React from "react";
import Link from "next/link";
import { ShoppingBag, ArrowRight, Sparkles } from "lucide-react";

export function EmptyCart() {
  return (
    <div className="py-16 sm:py-24 px-4 text-center max-w-md mx-auto flex flex-col items-center animate-in fade-in zoom-in-95 duration-300">
      {/* Visual Bag Icon Container */}
      <div className="relative mb-6">
        <div className="w-24 h-24 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FFD000] shadow-2xl">
          <ShoppingBag className="w-12 h-12 stroke-[1.5]" />
        </div>
        <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#FFD000] text-slate-950 flex items-center justify-center shadow-md">
          <Sparkles className="w-4 h-4 fill-slate-950 text-slate-950" />
        </div>
      </div>

      {/* Main Title */}
      <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
        Your bag is empty
      </h2>

      {/* Subtitle */}
      <p className="mt-2.5 text-sm sm:text-base text-slate-400 max-w-xs leading-relaxed">
        Looks like you haven’t added any gadgets yet. Explore our trending ambient lamps and lifestyle tech to find something you love!
      </p>

      {/* Action Button */}
      <div className="mt-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-[#FFD000] hover:bg-[#ffe14d] text-slate-950 font-black text-sm shadow-xl shadow-[#FFD000]/25 transition-all hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>Explore All Gadgets</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </Link>
      </div>
    </div>
  );
}
