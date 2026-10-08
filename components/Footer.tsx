"use client";

import React from "react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";
import {
  Sparkles,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  Truck,
  Clock,
  ExternalLink
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800">

          {/* Brand Info (5 columns) */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="inline-flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center shadow-md shadow-emerald-500/20">
                <Sparkles className="w-5 h-5 fill-white/20" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                {SITE_CONFIG.name}
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Your trusted destination for useful and affordable gadgets.
              Providing authentic consumer electronics with fast delivery and direct WhatsApp support in Bangladesh.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <Truck className="w-4 h-4 text-emerald-400" />
                <span>Cash on Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Quality Tested</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-emerald-400" />
                <span>24/7 WhatsApp Chat</span>
              </div>
            </div>
          </div>

          {/* Quick Links (3 columns) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="hover:text-emerald-400 transition-colors inline-block"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-emerald-400 transition-colors inline-block"
                >
                  All Products
                </Link>
              </li>
              <li>
                <Link
                  href="/cart"
                  className="hover:text-emerald-400 transition-colors inline-block"
                >
                  Shopping Bag / Cart
                </Link>
              </li>
              <li>
                <a
                  href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1"
                >
                  <span>WhatsApp Inquiry</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social (4 columns) */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contact & Order
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500">WhatsApp Order:</span>
                  <a
                    href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-emerald-400 font-bold transition-colors"
                  >
                    {SITE_CONFIG.whatsappDisplayNumber} <span className="text-xs text-slate-400 font-normal">(+{SITE_CONFIG.whatsappNumber})</span>
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500">Direct Call / Helpline:</span>
                  <a
                    href={`tel:${SITE_CONFIG.whatsappDisplayNumber}`}
                    className="text-white hover:text-emerald-400 font-medium transition-colors"
                  >
                    {SITE_CONFIG.whatsappDisplayNumber}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500">Email:dxnaimkhan9632@gmail.com
                  </span>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="text-white hover:text-emerald-400 transition-colors"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              </li>

              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs text-slate-500">Location:</span>
                  <span className="text-slate-300">{SITE_CONFIG.contact.address}</span>
                </div>
              </li>
            </ul>

            {/* Social Media Links */}
            <div className="mt-5 pt-4 border-t border-slate-800 flex items-center gap-3">
              <a
                href={SITE_CONFIG.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-white transition-colors"
              >
                Facebook Page
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 text-xs font-medium transition-colors"
              >
                WhatsApp Channel
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 {SITE_CONFIG.name}. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed for Bangladeshi Gadget Enthusiasts
          </p>
        </div>
      </div>
    </footer>
  );
}
