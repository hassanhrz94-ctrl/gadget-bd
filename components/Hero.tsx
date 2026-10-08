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
  Headphones,
  Watch,
  BatteryCharging
} from "lucide-react";
import { ImageWithFallback } from "./ImageWithFallback";

interface HeroProps {
  // You can replace this link with any hero photo link you wish
  heroImageSrc?: string;
}

export function Hero({
  heroImageSrc = "https://i.ibb.co.com/YB9F3kjB/DSC02032.jpg",
}: HeroProps) {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24">
      {/* Subtle Background Glows and Shapes */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-emerald-200/40 via-teal-100/30 to-blue-200/40 blur-3xl rounded-full -z-10"
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 -right-24 w-80 h-80 bg-emerald-100/40 blur-2xl rounded-full -z-10"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Store Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs sm:text-sm font-medium mb-6 shadow-xs animate-in fade-in duration-500">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Direct WhatsApp Ordering in Bangladesh</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              Smart Gadgets.{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-blue-600 bg-clip-text text-transparent">
                Better Life.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Discover useful, affordable and stylish gadgets from My Gadget BD.
              Carefully tested electronics curated for your everyday convenience.
            </p>

            {/* Hero CTA Buttons */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              {/* Explore Products Button */}
              <Link
                href="/products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-semibold text-base shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/35 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* View Cart Button */}
              <Link
                href="/cart"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-2xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 shadow-sm hover:shadow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <ShoppingBag className="w-4 h-4 text-emerald-600 transition-colors group-hover:scale-110" />
                <span>View Cart</span>
              </Link>
            </div>

            {/* Trust Highlights */}
            <div className="mt-10 pt-8 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-4 w-full text-slate-600">
              <div className="flex items-center gap-2.5">
                <Truck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Nationwide BD Delivery</span>
              </div>
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Authentic Quality</span>
              </div>
              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Zap className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Instant WhatsApp Order</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual with floating micro-elements */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            
            {/* Visual Container */}
            <div className="relative w-full max-w-md lg:max-w-none">
              
              {/* Soft ambient background aura */}
              <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500/20 via-teal-400/20 to-blue-500/20 rounded-3xl blur-xl" />

              {/* Card Container */}
              <div className="relative bg-white rounded-3xl p-3 sm:p-4 shadow-2xl shadow-slate-900/10 border border-slate-100 overflow-hidden group">
                <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
                  <ImageWithFallback
                    src={heroImageSrc}
                    alt="Featured Gadgets at My Gadget BD"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    priority
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />

                  {/* Caption badge inside the image */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs">
                    <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md font-medium flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                      Trending Gadgets 2026
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-emerald-600/90 font-bold">
                      Best Price in BD
                    </span>
                  </div>
                </div>

                {/* Floating Micro-interaction Badges */}
                <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
                    <Sparkles className="w-4 h-4 text-emerald-600 mb-1" />
                    <span className="text-[11px] font-semibold text-slate-800">RGB Lamps</span>
                    <span className="text-[9px] text-slate-400">Ambient Glow</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
                    <Zap className="w-4 h-4 text-emerald-600 mb-1" />
                    <span className="text-[11px] font-semibold text-slate-800">LED Lights</span>
                    <span className="text-[9px] text-slate-400">Desk Decor</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100 flex flex-col items-center">
                    <Truck className="w-4 h-4 text-emerald-600 mb-1" />
                    <span className="text-[11px] font-semibold text-slate-800">BD Delivery</span>
                    <span className="text-[9px] text-slate-400">Cash on Delivery</span>
                  </div>
                </div>

              </div>

              {/* Floating verified badge */}
              <div className="hidden sm:flex absolute -bottom-4 -left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-slate-100 items-center gap-3">
                <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">100% Genuine</p>
                  <p className="text-[10px] text-slate-500">Official Warranty Support</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
