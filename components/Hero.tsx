"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowRight, 
  ShoppingBag, 
  ShieldCheck, 
  Truck, 
  Sparkles,
  Zap,
  CheckCircle2,
  MessageCircle,
  Flame,
  Sun
} from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";
import { SITE_CONFIG } from "@/config/site";

interface HeroProps {
  heroImageSrc?: string;
}

export function Hero({
  heroImageSrc = "https://i.ibb.co.com/YB9F3kjB/DSC02032.jpg",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 bg-[#090A10] text-white">
      {/* Dynamic Background Glows matching yellow/gold logo palette */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-gradient-to-r from-[#FFD000]/15 via-amber-500/10 to-transparent blur-3xl rounded-full -z-10"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/3 -right-20 w-96 h-96 bg-[#FFD000]/10 blur-3xl rounded-full -z-10"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute bottom-0 left-10 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Speed & Best Price Announcement Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-[#FFD000]/30 text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-black/40 animate-in fade-in duration-500 backdrop-blur-md">
              <Zap className="w-4 h-4 text-[#FFD000] fill-[#FFD000] animate-pulse" />
              <span className="text-slate-200">Express Delivery in BD</span>
              <span className="w-1 h-1 rounded-full bg-[#FFD000]" />
              <span className="text-[#FFD000] font-bold">Best Price Guaranteed</span>
            </div>

            {/* Main Headline with Brand Yellow & Gold Accents */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1]">
              Smart Gadgets.{" "}
              <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-[#FFD000] via-[#FBBF24] to-[#F59E0B] drop-shadow-[0_0_25px_rgba(255,208,0,0.3)]">
                Best Price.
              </span>
              <span className="block mt-1 text-white">
                Trusted Service.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Discover authentic lifestyle electronics and mesmerizing ambient lighting gadgets from{" "}
              <strong className="text-white font-bold">My <span className="text-[#FFD000]">Gadget</span> BD</strong>.
              Personally tested for high quality, featuring instant WhatsApp ordering and Cash on Delivery across Bangladesh.
            </p>

            {/* Hero CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Primary Explore Products Button in Bright Brand Yellow */}
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl bg-[#FFD000] hover:bg-[#ffe14d] active:bg-[#eab308] text-slate-950 font-extrabold text-base shadow-xl shadow-[#FFD000]/25 hover:shadow-[#FFD000]/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group cursor-pointer"
              >
                <span>Explore All Gadgets</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
              </Link>

              {/* Instant WhatsApp Order Button */}
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "Hello My Gadget BD, I would like to order a gadget."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-2xl bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1caa51] text-white font-bold text-base shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
              >
                <MessageCircle className="w-5 h-5 fill-white text-[#25D366]" />
                <span>WhatsApp: {SITE_CONFIG.whatsappDisplayNumber}</span>
              </a>
            </div>

            {/* Trust Highlights Grid */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-slate-300">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FFD000]/10 flex items-center justify-center shrink-0 border border-[#FFD000]/20">
                  <Truck className="w-4 h-4 text-[#FFD000]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">Express Delivery</div>
                  <div className="text-[11px] text-slate-400">All 64 Districts</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FFD000]/10 flex items-center justify-center shrink-0 border border-[#FFD000]/20">
                  <ShieldCheck className="w-4 h-4 text-[#FFD000]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">100% Genuine</div>
                  <div className="text-[11px] text-slate-400">Tested Quality</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center shrink-0 border border-[#25D366]/20">
                  <MessageCircle className="w-4 h-4 text-[#25D366] fill-[#25D366]" />
                </div>
                <div>
                  <div className="text-xs sm:text-sm font-bold text-white">Cash on Delivery</div>
                  <div className="text-[11px] text-slate-400">Pay at Doorstep</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Ambient Aura Frame */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Outer Golden Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#FFD000]/30 via-amber-500/20 to-purple-600/20 rounded-3xl blur-2xl opacity-75" />

              {/* Glass Card Container */}
              <div className="relative bg-[#11131E]/90 backdrop-blur-xl rounded-3xl p-3 sm:p-4 shadow-2xl border border-white/15 overflow-hidden group">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-950 border border-white/10">
                  <ImageWithFallback
                    src={heroImageSrc}
                    alt="Featured RGB Halo Ring Lamp at My Gadget BD"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  {/* Caption badge inside the image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs">
                    <span className="px-3 py-1.5 rounded-xl bg-black/75 backdrop-blur-md font-semibold text-white flex items-center gap-1.5 border border-white/15">
                      <Sparkles className="w-3.5 h-3.5 text-[#FFD000]" />
                      RGB Halo Ring Lamp
                    </span>
                    <span className="px-3 py-1.5 rounded-xl bg-[#FFD000] text-slate-950 font-black shadow-md shadow-[#FFD000]/30">
                      ৳1,450 • In Stock
                    </span>
                  </div>
                </div>

                {/* Floating Micro-interaction Badges */}
                <div className="mt-3.5 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center">
                    <Sparkles className="w-4 h-4 text-[#FFD000] mb-1" />
                    <span className="text-[11px] font-bold text-white">RGB Ring</span>
                    <span className="text-[9px] text-slate-400">Multi-Color</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center">
                    <Sun className="w-4 h-4 text-[#FFD000] mb-1" />
                    <span className="text-[11px] font-bold text-white">Fiber Optic</span>
                    <span className="text-[9px] text-slate-400">Crystal Flower</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex flex-col items-center">
                    <Flame className="w-4 h-4 text-[#FFD000] mb-1" />
                    <span className="text-[11px] font-bold text-white">LED Candle</span>
                    <span className="text-[9px] text-slate-400">Glass Cylinder</span>
                  </div>
                </div>

              </div>

              {/* Floating Verified Trust Badge */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-[#141624]/95 backdrop-blur-xl px-4 py-3 rounded-2xl shadow-xl border border-[#FFD000]/30 items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FFD000] text-slate-950 flex items-center justify-center font-bold shadow-md shadow-[#FFD000]/30">
                  <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <p className="text-xs font-black text-white">100% Genuine Gadgets</p>
                  <p className="text-[10px] text-slate-400">Replacement Guarantee in BD</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
