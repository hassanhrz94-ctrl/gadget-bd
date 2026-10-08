"use client";

import React, { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";

export function FloatingWhatsApp() {
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Speech bubble / Tooltip for customer encouragement */}
      {!tooltipDismissed && (
        <div className="hidden sm:flex items-center gap-2 bg-[#10121C]/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-2xl border border-white/15 text-xs animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="flex flex-col">
            <span className="font-bold text-white leading-tight">Need help? Chat with us</span>
            <span className="text-[11px] text-[#25D366] font-bold">{SITE_CONFIG.whatsappDisplayNumber}</span>
          </div>
          <button
            type="button"
            onClick={() => setTooltipDismissed(true)}
            className="text-slate-400 hover:text-white p-0.5 rounded-full hover:bg-white/10 transition-colors ml-1"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encodeURIComponent(
          "Hello My Gadget BD, I would like to inquire about your products."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp at ${SITE_CONFIG.whatsappDisplayNumber}`}
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-110 active:scale-95 transition-all duration-300"
      >
        {/* Pulse ring animation */}
        <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 animate-ping group-hover:opacity-0" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 fill-white text-[#25D366] relative z-10" />

        {/* Online Status Dot */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center z-20">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full" />
        </span>
      </a>
    </div>
  );
}
