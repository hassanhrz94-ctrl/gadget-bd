"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Truck, Wallet, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

const TRUST = [
  { icon: Truck, title: "Express delivery", sub: "All 64 districts" },
  { icon: ShieldCheck, title: "100% genuine", sub: "Personally tested" },
  { icon: Wallet, title: "Cash on delivery", sub: "Pay at your door" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <style>{`
        @keyframes mg-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: none; } }
        @keyframes mg-drive { from { opacity: 0; transform: translateX(-90px); } to { opacity: 1; transform: none; } }
        @keyframes mg-bob { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-6px); } }
        @keyframes mg-draw { to { stroke-dashoffset: 0; } }
        @keyframes mg-streak { 0% { transform: translateX(30px); opacity: 0; } 30% { opacity: 1; } 100% { transform: translateX(-40px); opacity: 0; } }
        @keyframes mg-spin { to { transform: rotate(360deg); } }
        @keyframes mg-pulse { 0%,100% { opacity: .5; } 50% { opacity: 1; } }

        .mg-rise { opacity: 0; animation: mg-rise .7s cubic-bezier(.2,.7,.2,1) forwards; }
        .mg-drive { opacity: 0; animation: mg-drive .9s cubic-bezier(.2,.8,.2,1) .25s forwards; }
        .mg-bob { animation: mg-bob 3.6s ease-in-out 1.3s infinite; }
        .mg-swoosh { stroke-dasharray: 320; stroke-dashoffset: 320; animation: mg-draw .9s ease-out 1s forwards; }
        .mg-streak { opacity: 0; animation: mg-streak 1.8s ease-in-out infinite; }
        .mg-ring { animation: mg-spin 40s linear infinite; transform-origin: center; }
        .mg-dot { animation: mg-pulse 2.4s ease-in-out infinite; }

        @media (prefers-reduced-motion: reduce) {
          .mg-rise, .mg-drive { opacity: 1; animation: none; }
          .mg-bob, .mg-streak, .mg-ring, .mg-dot { animation: none; }
          .mg-swoosh { animation: none; stroke-dashoffset: 0; }
          .mg-streak { opacity: .8; }
        }
      `}</style>

      {/* Soft brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-[#FFD000]/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          {/* Content */}
          <div className="lg:col-span-7">
            <p
              className="mg-rise inline-flex items-center gap-2 text-sm font-medium text-slate-300"
              style={{ animationDelay: "0.05s" }}
            >
              <span className="mg-dot h-2 w-2 rounded-full bg-[#FFD000]" />
              Bangladesh&apos;s gadget shop, delivered fast
            </p>

            <h1
              className="mg-rise mt-5 text-5xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl"
              style={{ animationDelay: "0.15s" }}
            >
              Smart Gadgets.
              <span className="relative mt-1 block w-fit text-[#FFD000]">
                Best Price.
                <svg
                  aria-hidden="true"
                  viewBox="0 0 320 16"
                  className="absolute -bottom-3 left-0 h-3 w-full"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    className="mg-swoosh"
                    d="M4 12 C80 2, 220 2, 316 10"
                    stroke="#FFD000"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span className="mt-1 block">Trusted Service.</span>
            </h1>

            <p
              className="mg-rise mt-8 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg"
              style={{ animationDelay: "0.3s" }}
            >
              Lifestyle electronics and ambient lighting from{" "}
              <strong className="font-bold text-white">My Gadget BD</strong>. Order in one tap on
              WhatsApp and pay when it arrives.
            </p>

            <div
              className="mg-rise mt-9 flex flex-wrap items-center gap-4"
              style={{ animationDelay: "0.45s" }}
            >
              <Link
                href="/products"
                className="group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-[#FFD000] px-8 py-4 text-base font-extrabold text-black shadow-xl shadow-[#FFD000]/20 transition duration-200 hover:-translate-y-0.5 hover:bg-[#ffe14d] active:translate-y-0 sm:w-auto"
              >
                Shop all gadgets
                <ArrowRight className="h-4 w-4 stroke-[2.5] transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
                  "Hello My Gadget BD, I would like to order a gadget."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-2.5 rounded-2xl border border-white/20 px-7 py-4 text-base font-bold text-white transition duration-200 hover:-translate-y-0.5 hover:border-[#25D366] hover:text-[#25D366] active:translate-y-0 sm:w-auto"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp {SITE_CONFIG.whatsappDisplayNumber}
              </a>
            </div>

            <ul
              className="mg-rise mt-12 grid max-w-xl grid-cols-1 gap-5 border-t border-white/10 pt-8 sm:grid-cols-3"
              style={{ animationDelay: "0.6s" }}
            >
              {TRUST.map(({ icon: Icon, title, sub }) => (
                <li key={title} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-[#FFD000]/25 bg-[#FFD000]/10">
                    <Icon className="h-4 w-4 text-[#FFD000]" />
                  </span>
                  <span>
                    <span className="block text-sm font-bold">{title}</span>
                    <span className="block text-xs text-slate-400">{sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Brand motif: the logo cart, driving in */}
          <div className="relative flex items-center justify-center lg:col-span-5" aria-hidden="true">
            <div className="relative aspect-square w-full max-w-[420px]">
              {/* Rotating dashed ring */}
              <svg viewBox="0 0 200 200" className="mg-ring absolute inset-0 h-full w-full">
                <circle
                  cx="100"
                  cy="100"
                  r="96"
                  fill="none"
                  stroke="#FFD000"
                  strokeOpacity=".45"
                  strokeWidth="1.5"
                  strokeDasharray="2 9"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-6 rounded-full border-[6px] border-[#FFD000] bg-black shadow-[0_0_80px_rgba(255,208,0,0.18)]" />

              {/* Cart + speed lines */}
              <div className="mg-drive absolute inset-0 flex items-center justify-center">
                <div className="mg-bob">
                  <svg viewBox="0 0 260 200" className="w-[260px] sm:w-[300px]">
                    {/* speed lines */}
                    <g stroke="#FFD000" strokeWidth="6" strokeLinecap="round">
                      <line className="mg-streak" x1="4" y1="46" x2="62" y2="46" style={{ animationDelay: "1.2s" }} />
                      <line className="mg-streak" x1="14" y1="66" x2="58" y2="66" style={{ animationDelay: "1.5s" }} />
                      <line className="mg-streak" x1="24" y1="86" x2="62" y2="86" style={{ animationDelay: "1.8s" }} />
                    </g>
                    {/* cart */}
                    <g fill="none" stroke="#FFD000" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M70 28 H98 L120 128 H214" />
                      <path d="M104 52 H238 L216 108 H122 Z" />
                    </g>
                    <circle cx="136" cy="160" r="13" fill="#FFD000" />
                    <circle cx="198" cy="160" r="13" fill="#FFD000" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}