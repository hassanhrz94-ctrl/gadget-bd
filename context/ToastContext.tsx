"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { Product } from "@/types/product";

export interface ToastMessage {
  id: string;
  type?: "success" | "info" | "warning";
  title: string;
  product?: Product;
  quantity?: number;
}

interface ToastContextType {
  toasts: ToastMessage[];
  showToast: (title: string, product?: Product, quantity?: number) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (title: string, product?: Product, quantity?: number) => {
      const id = Date.now().toString() + Math.random().toString(36).substring(2, 7);
      const newToast: ToastMessage = {
        id,
        title,
        product,
        quantity,
      };

      setToasts((prev) => [...prev, newToast]);

      // Auto dismiss after 3.5 seconds
      setTimeout(() => {
        removeToast(id);
      }, 3500);
    },
    [removeToast]
  );

  return (
    <ToastContext.Provider value={{ toasts, showToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}
