import { Product } from "@/types/product";

/**
 * Centralized products database for My Gadget BD.
 * Paste your real image links in the `image` field of each product.
 */
export const products: Product[] = [
  // FEATURED PRODUCT 1 (Featured on Home)
  {
    id: "prod-1",
    name: "Fiber Optic Flower Crystal LED Night Lamp",
    price: 99,
    originalPrice: 150,
    image: "https://i.ibb.co.com/wr0LZTW8/DSC01993.jpg",
    category: "Ambient Lights",
    shortDescription: "Vibrant glowing optical fiber flower with color-changing LED base.",
    description: "Create a magical and relaxing ambiance in any room with this Fiber Optic Crystal Flower LED Night Lamp. Hundreds of delicate, flexible optical fibers radiate shimmering multi-color light points while resting on a crystal floral petal base. Perfect for bedside tables, gaming setups, living rooms, and aesthetic home decor.",
    features: [
      "Dynamic multi-color ambient LED lighting",
      "Hundreds of flexible glowing optical fiber strands",
      "Elegant crystal-clear flower petal base",
      "Soft eye-protective glow, perfect for bedtime",
      "Energy efficient with long-lasting LED lifespan",
    ],
    inStock: true,
    isFeatured: true,
    rating: 4.8,
  },

  // FEATURED PRODUCT 2 (Featured on Home)
  {
    id: "prod-2",
    name: "RGB Halo Ring Suspended Lantern Desk Lamp",
    price: 499,
    originalPrice: 799,
    image: "https://i.ibb.co.com/YB9F3kjB/DSC02032.jpg",
    category: "Ambient Lights",
    shortDescription: "Modern circular RGB halo ring with suspended vintage glowing lantern.",
    description: "A show-stopping blend of modern cyberpunk illumination and cozy antique aesthetics. Features an illuminated circular halo ring radiating vivid multi-color RGB ambient gradients, surrounding a suspended miniature lantern with a warm flickering candlelight glow inside. Elevate your desk setup, bedroom, or streaming background instantly.",
    features: [
      "Vivid 360° circular RGB multi-color halo glow",
      "Suspended vintage lantern with warm flickering flame LED",
      "Weighted anti-slip matte black pedestal base",
      "Convenient USB powered operation with power switch",
      "High aesthetic appeal for desktop setups & cozy rooms",
    ],
    inStock: true,
    isFeatured: true,
    rating: 4.9,
  },

  // FEATURED PRODUCT 3 (Featured on Home)
  {
    id: "prod-3",
    name: "Glass Tube Flameless Pillar Candle Lamp",
    price: 599,
    originalPrice: 999,
    image: "https://i.ibb.co.com/7tq3MNFn/DSC01985.jpg",
    category: "Ambient Lights",
    shortDescription: "Elegant clear glass cylinder electronic candle with spiral fairy lights.",
    description: "Add a warm, luxurious glow without open flame, wax mess, or smoke. Encased in a crystal-clear borosilicate glass tube on an electroplated metallic stand, this electronic candle features a realistic 3D flickering LED flame wrapped with delicate spiraling micro fairy string lights for an enchanting dual-glow effect.",
    features: [
      "Ultra-realistic 3D flickering warm LED flame",
      "High-clarity borosilicate glass cylinder casing",
      "Spiraling warm-white micro fairy string lights",
      "100% flameless, zero smoke, and safe around kids & pets",
      "Polished metallic pedestal base with easy on/off switch",
    ],
    inStock: true,
    isFeatured: true,
    rating: 4.9,
  },

  // CATALOG PRODUCTS FOR /products PAGE
  {
    id: "prod-4",
    name: "Halo Ring Suspended Lantern Desk Lamp",
    price: 499,
    originalPrice: 799,
    // Replace this link with your own product image link
    image: "https://i.ibb.co.com/Q33YZwfV/DSC02014.jpg",
    category: "Ambient Lights",
    shortDescription: "Unique lamp with vintage lantern and ring light.",
    description: "Illuminate your space with this stunning desk lamp that combines a futuristic glowing ring with a classic vintage lantern. Powered by USB, it casts a warm and cozy light, making it the perfect addition to your bedroom or study desk. Features a sleek black metal base and a unique suspended lantern design.",
    features: [
      "Unique dual-light design",
      "Vintage lantern with warm flickering LED",
      "Multi-color RGB halo ring for ambient lighting",
      "Perfect for desktop decoration and cozy settings",
    ],
    inStock: true,
    isFeatured: false,
    rating: 4.9,
  },
  // {
  //   id: "prod-5",
  //   name: "AMOLED Calling Smart Watch",
  //   price: 3200,
  //   originalPrice: 3950,
  //   // Replace this link with your own product image link
  //   image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&auto=format&fit=crop&q=80",
  //   category: "Smart Watch",
  //   shortDescription: "Ultra-bright AMOLED display with direct Bluetooth calling.",
  //   description: "Premium metallic frame smartwatch with Always-On AMOLED screen. Make and receive phone calls straight from your wrist with built-in high-clarity speaker and microphone.",
  //   features: [
  //     "Always-On Ultra HD AMOLED screen",
  //     "Bluetooth calling with high-clarity speaker",
  //     "Metallic alloy body with premium strap",
  //     "IP68 water & dust resistance",
  //   ],
  //   inStock: true,
  //   isFeatured: false,
  //   rating: 4.9,
  // },
  // {
  //   id: "prod-6",
  //   name: "65W GaN Fast Charger (3 Ports)",
  //   price: 1650,
  //   originalPrice: 2100,
  //   // Replace this link with your own product image link
  //   image: "https://images.unsplash.com/photo-1622445262464-84b14e3b1540?w=800&auto=format&fit=crop&q=80",
  //   category: "Chargers",
  //   shortDescription: "GaN III tech charges laptops, tablets & phones simultaneously.",
  //   description: "One tiny charger for all your devices. Powered by Gallium Nitride (GaN III) technology, this 65W charger can charge your laptop, iPad, and phone at maximum speed from 2x USB-C and 1x USB-A ports.",
  //   features: [
  //     "65W maximum high-speed GaN III output",
  //     "Triple port: 2x USB-C + 1x USB-A",
  //     "Charges MacBook Air and laptops effortlessly",
  //     "Advanced thermal protection circuitry",
  //   ],
  //   inStock: true,
  //   isFeatured: false,
  //   rating: 4.8,
  // },
  // {
  //   id: "prod-7",
  //   name: "10,000mAh Magnetic Power Bank",
  //   price: 1950,
  //   originalPrice: 2500,
  //   // Replace this link with your own product image link
  //   image: "https://images.unsplash.com/photo-1609592424109-dd9892f1b177?w=800&auto=format&fit=crop&q=80",
  //   category: "Accessories",
  //   shortDescription: "Snap-on magnetic wireless charging with LED power display.",
  //   description: "Never run out of power on the go. Snaps magnetically to the back of compatible phones with strong magnets, offering 15W fast wireless charging plus 20W PD wired output.",
  //   features: [
  //     "Strong magnetic snap-on alignment",
  //     "15W wireless + 20W PD wired fast charging",
  //     "Digital LED display showing accurate battery %",
  //     "Slim, pocket-friendly matte finish",
  //   ],
  //   inStock: true,
  //   isFeatured: false,
  //   rating: 4.7,
  // },
  // {
  //   id: "prod-8",
  //   name: "Braided 100W Type-C Fast Cable",
  //   price: 380,
  //   originalPrice: 550,
  //   // Replace this link with your own product image link
  //   image: "https://images.unsplash.com/photo-1588508065123-287b28e013da?w=800&auto=format&fit=crop&q=80",
  //   category: "Accessories",
  //   shortDescription: "Durable nylon braided high-speed cable with E-marker chip.",
  //   description: "Built to last with 30,000+ bend lifespan. Supports up to 100W PD fast charging and 480Mbps data transfer speed, wrapped in tangle-free military-grade braided nylon.",
  //   features: [
  //     "Up to 100W (20V/5A) Power Delivery support",
  //     "Smart E-Marker chip for optimal power delivery",
  //     "High-density nylon braided tangle-free exterior",
  //     "1.2 meter length ideal for desk and car use",
  //   ],
  //   inStock: true,
  //   isFeatured: false,
  //   rating: 4.6,
  // },
  // {
  //   id: "prod-9",
  //   name: "RGB Gaming Surround Headset",
  //   price: 1750,
  //   originalPrice: 2200,
  //   // Replace this link with your own product image link
  //   image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&auto=format&fit=crop&q=80",
  //   category: "Other Gadgets",
  //   shortDescription: "50mm audio drivers, dynamic RGB lighting & noise-canceling mic.",
  //   description: "Hear every footstep and gunshot with pinpoint precision. Features 50mm neodymium audio drivers, ultra-soft breathable memory foam ear cushions, and dynamic RGB lighting.",
  //   features: [
  //     "50mm directional neodymium drivers",
  //     "360-degree adjustable noise-canceling microphone",
  //     "Flowing RGB lighting effect",
  //     "Universal 3.5mm + USB plug for PC, Mobile & Console",
  //   ],
  //   inStock: true,
  //   isFeatured: false,
  //   rating: 4.8,
  // },
  // {
  //   id: "prod-10",
  //   name: "Rechargeable Mini Desk Fan",
  //   price: 890,
  //   originalPrice: 1200,
  //   // Replace this link with your own product image link
  //   image: "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=800&auto=format&fit=crop&q=80",
  //   category: "Other Gadgets",
  //   shortDescription: "Whisper-quiet 4-speed airflow with 4000mAh long battery.",
  //   description: "Stay cool during hot summer days and load-shedding. Features 4 speed settings, whisper-quiet brushless motor, and up to 12 hours of cordless breeze on a single USB-C charge.",
  //   features: [
  //     "4000mAh built-in rechargeable battery",
  //     "Whisper-quiet aerodynamic blades",
  //     "4 adjustable wind speeds",
  //     "USB-C fast recharging",
  //   ],
  //   inStock: true,
  //   isFeatured: false,
  //   rating: 4.6,
  // },
  // {
  //   id: "prod-11",
  //   name: "Aluminum Adjustable Laptop Stand",
  //   price: 1150,
  //   originalPrice: 1500,
  //   // Replace this link with your own product image link
  //   image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&auto=format&fit=crop&q=80",
  //   category: "Accessories",
  //   shortDescription: "Ergonomic foldable stand with heat dissipation design.",
  //   description: "Improve your posture and keep your laptop cool. Made from solid aircraft-grade aluminum alloy, fully foldable and portable with anti-slip silicone pads.",
  //   features: [
  //     "6 adjustable ergonomic height angles",
  //     "Aircraft-grade aluminum alloy construction",
  //     "Hollow cooling design prevents laptop overheating",
  //     "Folds flat into a compact pouch for easy travel",
  //   ],
  //   inStock: true,
  //   isFeatured: false,
  //   rating: 4.8,
  // },
  // {
  //   id: "prod-12",
  //   name: "Stylus Pen for Touchscreens",
  //   price: 1400,
  //   originalPrice: 1850,
  //   // Replace this link with your own product image link
  //   image: "https://images.unsplash.com/photo-1589739900243-4b52cd9b104e?w=800&auto=format&fit=crop&q=80",
  //   category: "Other Gadgets",
  //   shortDescription: "Pixel-perfect precision with tilt sensitivity & palm rejection.",
  //   description: "Write, draw, and navigate with seamless fluidity. Zero lag, ultra-responsive fine tip, and convenient magnetic attachment with quick USB-C charging.",
  //   features: [
  //     "Pixel-precise fine point nib",
  //     "Tilt sensitivity for sketching & shading",
  //     "Type-C fast charge: 10 hours runtime",
  //     "Compatible with iPads, tablets, and touchscreen devices",
  //   ],
  //   inStock: true,
  //   isFeatured: false,
  //   rating: 4.7,
  // },
];

/**
 * Featured products helper: strictly returns ONLY the 3 featured products
 * as specified in requirements.
 */
export const featuredProducts: Product[] = products.filter((p) => p.isFeatured).slice(0, 3);

/**
 * Available product categories
 */
export const categories: ("All" | Product["category"])[] = [
  "All",
  "Ambient Lights",
  "Earbuds",
  "Smart Watch",
  "Chargers",
  "Accessories",
  "Other Gadgets",
];
