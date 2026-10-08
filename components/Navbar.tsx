"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { SITE_CONFIG } from "@/config/site";
import { 
  ShoppingBag, 
  Menu, 
  X, 
  MessageCircle,
  Zap
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { totalCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to enhance dark glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "All Gadgets", href: "/products" },
    { label: "Shopping Bag", href: "/cart" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#090A10]/95 backdrop-blur-xl border-b border-[#FFD000]/20 shadow-xl shadow-black/60"
          : "bg-[#090A10]/80 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Brand Logo & Name Matching Official Logo Badge */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform active:scale-95"
            aria-label="My Gadget BD Home"
          >
            {/* Circular Logo Image with Gold Glow */}
            <div className="relative">
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#FFD000] shadow-[0_0_15px_rgba(255,208,0,0.35)] group-hover:shadow-[0_0_20px_rgba(255,208,0,0.6)] group-hover:scale-105 transition-all duration-300 bg-black">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={SITE_CONFIG.logo}
                  alt={SITE_CONFIG.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white leading-none">
                My <span className="text-[#FFD000] drop-shadow-[0_0_12px_rgba(255,208,0,0.4)]">Gadget</span> BD
              </span>
              <span className="text-[10px] font-medium tracking-wider uppercase text-slate-400 mt-1 flex items-center gap-1">
                <span className="text-[#FFD000]">Smart Gadgets</span> • Best Price
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1.5 rounded-full border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "text-white font-semibold shadow-xs bg-white/10 border border-[#FFD000]/30"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FFD000] shadow-[0_0_8px_#ffd000]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons: WhatsApp quick button + Cart Bag Icon */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick WhatsApp Contact badge with explicit WhatsApp number */}
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold text-white bg-[#25D366] hover:bg-[#20bd5a] transition-all hover:scale-105 active:scale-95 shadow-md shadow-emerald-500/25"
              title={`WhatsApp: ${SITE_CONFIG.whatsappDisplayNumber}`}
            >
              <MessageCircle className="w-3.5 h-3.5 fill-white text-[#25D366]" />
              <span>{SITE_CONFIG.whatsappDisplayNumber}</span>
            </a>

            {/* Shopping Bag / Cart Button */}
            <Link
              href="/cart"
              className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-white/5 hover:bg-white/10 text-slate-200 hover:text-white border border-white/10 transition-all duration-200 hover:scale-105 active:scale-95 group"
              aria-label={`Shopping bag with ${totalCount} items`}
            >
              <ShoppingBag className="w-5 h-5 text-slate-300 group-hover:text-[#FFD000] transition-colors" />

              {/* Cart item count badge */}
              <span
                className={`absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-black flex items-center justify-center transition-transform duration-300 ${
                  totalCount > 0
                    ? "bg-[#FFD000] text-slate-950 shadow-md shadow-amber-500/40 scale-100 animate-in zoom-in"
                    : "bg-slate-700 text-slate-300 scale-90 opacity-70"
                }`}
              >
                {totalCount}
              </span>
            </Link>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-2xl bg-white/5 text-slate-200 hover:bg-white/10 hover:text-white border border-white/10 transition-all active:scale-95"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[2]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[2]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0C0E17]/98 backdrop-blur-2xl animate-in slide-in-from-top-3 duration-200 px-4 pt-3 pb-6">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    isActive
                      ? "bg-[#FFD000]/10 text-[#FFD000] border border-[#FFD000]/20 font-semibold"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.href === "/cart" && totalCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-[#FFD000] text-slate-950 text-xs font-black">
                      {totalCount}
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-white/10">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-[#25D366] text-white text-sm font-bold hover:bg-[#20bd5a] transition-colors shadow-lg shadow-emerald-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-white text-[#25D366]" />
                <span>WhatsApp: {SITE_CONFIG.whatsappDisplayNumber}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
