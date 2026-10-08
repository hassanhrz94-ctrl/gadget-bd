"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import { 
  MessageCircle, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  Clock,
  ExternalLink,
  Zap
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#06070B] text-slate-300 pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
      {/* Ambient background gold glow */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFD000]/5 blur-3xl rounded-full"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Brand Info (5 columns) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#FFD000] shadow-[0_0_15px_rgba(255,208,0,0.35)] bg-black group-hover:scale-105 transition-transform duration-300">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={SITE_CONFIG.logo}
                  alt={SITE_CONFIG.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl text-white tracking-tight">
                  My <span className="text-[#FFD000]">Gadget</span> BD
                </span>
                <span className="text-[11px] font-semibold text-[#FFD000]/90 tracking-wide">
                  Smart Gadgets • Best Price • Trusted Service
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Your trusted destination for genuine lifestyle electronics and aesthetic ambient lights in Bangladesh.
              Fast cash-on-delivery across all 64 districts with personal WhatsApp assistance.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-[#FFD000]" />
                <span>Express BD Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#FFD000]" />
                <span>100% Quality Checked</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-[#25D366]" />
                <span>Instant WhatsApp Support</span>
              </div>
            </div>
          </div>

          {/* Quick Links (3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFD000]" />
              <span>Quick Links</span>
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-[#FFD000] transition-colors inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-[#FFD000] transition-colors inline-block"
                >
                  All Products & Gadgets
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="hover:text-[#FFD000] transition-colors inline-block"
                >
                  Shopping Bag / Cart
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#25D366] transition-colors inline-flex items-center gap-1.5 text-slate-300 font-medium"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
                  <span>WhatsApp Inquiry</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Order (4 columns) */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#25D366]" />
              <span>Direct Helpline & Order</span>
            </h4>
            <ul className="space-y-3.5 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#25D366]/15 text-[#25D366] flex items-center justify-center shrink-0 border border-[#25D366]/30">
                  <MessageCircle className="w-4 h-4 fill-[#25D366]" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-medium">WhatsApp Hotline (Orders):</span>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-[#25D366] font-bold text-base transition-colors"
                  >
                    {SITE_CONFIG.whatsappDisplayNumber} <span className="text-xs text-slate-400 font-normal">(+{SITE_CONFIG.whatsappNumber})</span>
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#FFD000]/15 text-[#FFD000] flex items-center justify-center shrink-0 border border-[#FFD000]/30">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-medium">Customer Phone Support:</span>
                  <a
                    href={`tel:${SITE_CONFIG.whatsappDisplayNumber}`}
                    className="text-white hover:text-[#FFD000] font-semibold transition-colors"
                  >
                    {SITE_CONFIG.whatsappDisplayNumber}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 text-slate-300 flex items-center justify-center shrink-0 border border-white/10">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-medium">Email:</span>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-white hover:text-[#FFD000] transition-colors"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/5 text-slate-300 flex items-center justify-center shrink-0 border border-white/10">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500 font-medium">Location:</span>
                  <span className="text-slate-300">{SITE_CONFIG.contact.address}</span>
                </div>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-3">
              <a
                href={SITE_CONFIG.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 text-xs font-semibold text-white border border-white/10 transition-colors"
              >
                Facebook Page
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-1.5 rounded-xl bg-[#25D366]/20 text-[#25D366] hover:bg-[#25D366]/30 text-xs font-bold transition-colors border border-[#25D366]/40 flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-[#25D366]" />
                <span>WhatsApp Channel</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5 text-slate-400">
            <span className="text-[#FFD000]">Smart Gadgets</span> • <span className="text-white">Best Price</span> • <span className="text-[#25D366]">Trusted Service</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
