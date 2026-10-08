"use client";

import React, { useState, useMemo } from "react";
import { products, categories } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { ProductDetailsModal } from "@/components/ProductDetailsModal";
import { Product } from "@/types/product";
import { 
  Search, 
  SlidersHorizontal, 
  X, 
  PackageSearch,
  Sparkles,
  ArrowUpDown,
  Zap
} from "lucide-react";

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [sortBy, setSortBy] = useState<"featured" | "price-low" | "price-high">("featured");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return products
      .filter((product) => {
        // Category filter
        if (selectedCategory !== "All" && product.category !== selectedCategory) {
          return false;
        }

        // Search query filter
        if (searchQuery.trim()) {
          const query = searchQuery.toLowerCase().trim();
          const matchName = product.name.toLowerCase().includes(query);
          const matchDesc = product.description.toLowerCase().includes(query);
          const matchCategory = product.category.toLowerCase().includes(query);
          return matchName || matchDesc || matchCategory;
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        // Default: featured first, then original order
        if (a.isFeatured && !b.isFeatured) return -1;
        if (!a.isFeatured && b.isFeatured) return 1;
        return 0;
      });
  }, [searchQuery, selectedCategory, sortBy]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("All");
    setSortBy("featured");
  };

  return (
    <div className="min-h-screen py-10 sm:py-16 bg-[#090A10] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFD000]/10 text-[#FFD000] border border-[#FFD000]/25 mb-3">
            <Zap className="w-3.5 h-3.5 fill-[#FFD000]" />
            <span>Complete Collection</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Explore All <span className="text-[#FFD000] drop-shadow-[0_0_15px_rgba(255,208,0,0.35)]">Gadgets</span>
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-400">
            Browse our full range of ambient LED lamps, smart watches, fast chargers, and daily tech essentials.
          </p>
        </div>

        {/* Filter & Search Bar Container */}
        <div className="bg-[#10121C] rounded-3xl p-5 sm:p-7 shadow-2xl border border-white/10 mb-10">
          
          {/* Top row: Search input & Sort dropdown */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full sm:max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search gadgets (e.g. Lamp, Earbuds, 65W)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white/5 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#FFD000]/30 focus:border-[#FFD000] transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white p-1"
                  aria-label="Clear search query"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort by selector */}
            <div className="w-full sm:w-auto flex items-center justify-between sm:justify-end gap-3 text-xs sm:text-sm text-slate-400">
              <div className="flex items-center gap-1.5 font-medium text-slate-400">
                <ArrowUpDown className="w-4 h-4 text-[#FFD000]" />
                <span>Sort by:</span>
              </div>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-4 py-2.5 rounded-xl bg-[#141624] border border-white/15 text-white text-xs sm:text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#FFD000]/30 focus:border-[#FFD000] cursor-pointer"
              >
                <option value="featured">Featured First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Bottom row: Category Filter Pills */}
          <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            <SlidersHorizontal className="w-4 h-4 text-[#FFD000] shrink-0 mr-1 hidden sm:block" />
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer ${
                    isActive
                      ? "bg-[#FFD000] text-slate-950 shadow-md shadow-[#FFD000]/30"
                      : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>

        </div>

        {/* Results Count & Active Filter Indicator */}
        <div className="flex items-center justify-between mb-8 text-xs sm:text-sm text-slate-400 px-1">
          <span>
            Showing <strong className="text-white">{filteredProducts.length}</strong> gadgets
            {selectedCategory !== "All" && ` in "${selectedCategory}"`}
            {searchQuery && ` matching "${searchQuery}"`}
          </span>

          {(selectedCategory !== "All" || searchQuery) && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-[#FFD000] hover:text-[#ffe14d] font-bold hover:underline inline-flex items-center gap-1 cursor-pointer"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={(prod) => setSelectedProduct(prod)}
              />
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="bg-[#10121C] rounded-3xl p-12 text-center max-w-md mx-auto border border-white/10 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-white/5 text-[#FFD000] flex items-center justify-center mx-auto mb-4 border border-white/10">
              <PackageSearch className="w-8 h-8 stroke-[1.5]" />
            </div>
            <h3 className="font-extrabold text-lg text-white mb-1">
              No gadgets found
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mb-6">
              We couldn’t find any products matching your search or category filter.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="px-6 py-2.5 rounded-xl bg-[#FFD000] hover:bg-[#ffe14d] text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-[#FFD000]/25 transition-all"
            >
              Show All Gadgets
            </button>
          </div>
        )}

      </div>

      {/* Product Details Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}
