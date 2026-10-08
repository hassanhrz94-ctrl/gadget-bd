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
  Sparkles,
  PhoneCall,
  MessageCircle
} from "lucide-react";

export function Navbar() {
  const pathname = usePathname();
  const { totalCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll to enhance glassmorphism effect
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
    { label: "Products", href: "/products" },
    { label: "Cart / Bag", href: "/cart" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-white/85 backdrop-blur-md shadow-sm shadow-slate-900/5 border-b border-slate-200/80"
          : "bg-white/95 backdrop-blur-sm border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo / Brand Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group transition-transform active:scale-95"
            aria-label="My Gadget BD Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-600/20 group-hover:shadow-emerald-600/40 transition-all duration-300 group-hover:rotate-3">
              <Sparkles className="w-5 h-5 fill-white/20" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-slate-900 leading-none">
                My Gadget <span className="text-emerald-600">BD</span>
              </span>
              <span className="text-[10px] font-medium tracking-widest uppercase text-slate-400 mt-1">
                Authentic Store
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100/70 p-1.5 rounded-full border border-slate-200/60">
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
                      ? "text-slate-950 font-semibold shadow-sm bg-white"
                      : "text-slate-600 hover:text-slate-950 hover:bg-white/60"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-emerald-600" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Icons: WhatsApp quick button + Cart Bag Icon */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Contact badge with explicit WhatsApp number */}
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all hover:scale-105 active:scale-95 shadow-2xs"
              title={`WhatsApp: ${SITE_CONFIG.whatsappDisplayNumber}`}
            >
              <MessageCircle className="w-3.5 h-3.5 fill-[#25D366] text-[#25D366]" />
              <span>WhatsApp: {SITE_CONFIG.whatsappDisplayNumber}</span>
            </a>

            {/* Shopping Bag / Cart Button */}
            <Link
              href="/cart"
              className="relative flex items-center justify-center w-11 h-11 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-all duration-200 hover:scale-105 active:scale-95 group"
              aria-label={`Shopping bag with ${totalCount} items`}
            >
              <ShoppingBag className="w-5 h-5 text-slate-700 group-hover:text-emerald-600 transition-colors" />

              {/* Cart item count badge */}
              <span
                className={`absolute -top-1 -right-1 min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-bold flex items-center justify-center transition-transform duration-300 ${
                  totalCount > 0
                    ? "bg-emerald-600 text-white shadow-sm shadow-emerald-600/30 scale-100 animate-in zoom-in"
                    : "bg-slate-300 text-slate-700 scale-90 opacity-70"
                }`}
              >
                {totalCount}
              </span>
            </Link>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-11 h-11 rounded-2xl bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 transition-all active:scale-95"
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
        <div className="md:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl animate-in slide-in-from-top-3 duration-200 px-4 pt-3 pb-6">
          <div className="flex flex-col gap-1.5">
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
                      ? "bg-emerald-50 text-emerald-800 font-semibold"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.href === "/cart" && totalCount > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-600 text-white text-xs font-bold">
                      {totalCount}
                    </span>
                  )}
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-100">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-[#25D366] text-white text-sm font-bold hover:bg-[#20bd5a] transition-colors shadow-sm"
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
