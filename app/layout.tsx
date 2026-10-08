import type { Metadata } from "next";
import "./globals.css";
import { ToastProvider } from "@/context/ToastContext";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastContainer } from "@/components/ToastContainer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "My Gadget BD | Smart Gadgets • Best Price • Trusted Service",
  description:
    "Discover modern, affordable and stylish gadgets from My Gadget BD. Quality gadgets, ambient night lamps, fast delivery and personal WhatsApp ordering across Bangladesh.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth dark">
      <body className="min-h-full flex flex-col bg-[#090A10] text-slate-100 selection:bg-[#FFD000] selection:text-slate-950 font-sans">
        <ToastProvider>
          <CartProvider>
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
            <FloatingWhatsApp />
            <ToastContainer />
          </CartProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
