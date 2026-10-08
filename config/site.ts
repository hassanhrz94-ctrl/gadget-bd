/**
 * Central site configuration for My Gadget BD
 * The WhatsApp number is defined here as a single source of truth.
 */
export const WHATSAPP_NUMBER = "8801939319336"; // WhatsApp number for order & support
export const WHATSAPP_DISPLAY_NUMBER = "01939319336"; // Local format for display

export const SITE_CONFIG = {
  name: "My Gadget BD",
  tagline: "Smart Gadgets • Best Price • Trusted Service",
  description: "Discover modern, affordable and stylish gadgets from My Gadget BD. Quality gadgets, fast delivery and personal WhatsApp ordering across Bangladesh.",
  logo: "/logo.jpg",
  logoUrl: "https://i.ibb.co.com/hFLM862N/logo.jpg",
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappDisplayNumber: WHATSAPP_DISPLAY_NUMBER,
  currency: "৳",
  contact: {
    phone: "01939319336",
    formattedPhone: "+880 1939-319336",
    email: "dxnaimkhan9632@gmail.com",
    facebook: "https://www.facebook.com/people/My-Gadget-BD/61595356072362",
    whatsappUrl: `https://wa.me/${WHATSAPP_NUMBER}`,
    address: "Dhaka, Bangladesh",
    deliveryInfo: "Cash on delivery available all over Bangladesh",
  },
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Cart", href: "/cart" },
  ],
};

/**
 * Format price in Bangladeshi Taka
 * Example: formatBDT(1250) => "৳1,250"
 */
export function formatBDT(amount: number): string {
  return `৳${amount.toLocaleString("en-US")}`;
}

/**
 * Generate a pre-filled WhatsApp message for an order
 */
export interface OrderItem {
  name: string;
  quantity: number;
  price: number;
}

export function generateWhatsAppOrderUrl(items: OrderItem[], customNotes?: string): string {
  if (items.length === 0) return "#";

  let message = `Hello My Gadget BD,\n\nI would like to order:\n\n`;
  let total = 0;

  items.forEach((item, index) => {
    const itemSubtotal = item.price * item.quantity;
    total += itemSubtotal;
    message += `${index + 1}. ${item.name} x${item.quantity} - ${formatBDT(itemSubtotal)}\n`;
  });

  message += `\nTotal: ${formatBDT(total)}\n`;

  if (customNotes && customNotes.trim()) {
    message += `\nDelivery Note / Address: ${customNotes.trim()}\n`;
  }

  message += `\nPlease confirm my order. Thank you!`;

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

/**
 * Generate a single product direct order WhatsApp URL
 */
export function generateSingleProductWhatsAppUrl(productName: string, price: number, quantity: number = 1): string {
  const subtotal = price * quantity;
  const message = `Hello My Gadget BD,\n\nI would like to order:\n\n1. ${productName} x${quantity} - ${formatBDT(subtotal)}\n\nTotal: ${formatBDT(subtotal)}\n\nPlease confirm my order. Thank you!`;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}
