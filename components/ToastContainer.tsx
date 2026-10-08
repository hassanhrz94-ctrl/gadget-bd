"use client";

import React from "react";
import Link from "next/link";
import { useToast } from "@/context/ToastContext";
import { CheckCircle2, X, ShoppingBag, ArrowRight } from "lucide-react";
import { formatBDT } from "@/config/site";

export function ToastContainer() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <aside aria-label="Notifications" className="fixed bottom-5 right-5 z-50 flex flex-col gap-3 max-w-sm w-[calc(100vw-2.5rem)] pointer-events-none">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto bg-white/95 backdrop-blur-md border border-emerald-500/30 text-slate-900 rounded-2xl shadow-xl shadow-slate-900/10 p-3.5 transition-all duration-300 animate-in fade-in slide-in-from-bottom-4 flex items-start gap-3"
          role="status"
          aria-live="polite"
        >
          {/* Status Icon */}
          <div className="shrink-0 w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mt-0.5">
            <CheckCircle2 className="w-5 h-5 stroke-[2.5]" />
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold uppercase tracking-wider text-emerald-700">
              {toast.title}
            </p>
            {toast.product ? (
              <div className="mt-0.5">
                <p className="text-sm font-medium text-slate-900 truncate">
                  {toast.product.name}
                </p>
                <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                  <span className="font-semibold text-emerald-600">
                    {formatBDT(toast.product.price)}
                  </span>
                  {toast.quantity && toast.quantity > 1 && (
                    <span>Qty: {toast.quantity}</span>
                  )}
                </div>
              </div>
            ) : null}

            {/* Quick Action Button */}
            <div className="mt-2.5 pt-2 border-t border-slate-100 flex items-center justify-between">
              <Link
                href="/cart"
                onClick={() => removeToast(toast.id)}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>View Bag</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
              <button
                type="button"
                onClick={() => removeToast(toast.id)}
                className="text-[11px] text-slate-400 hover:text-slate-600"
              >
                Dismiss
              </button>
            </div>
          </div>

          {/* Close button */}
          <button
            type="button"
            onClick={() => removeToast(toast.id)}
            className="shrink-0 text-slate-400 hover:text-slate-600 p-1 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close notification"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </aside>
  );
}
