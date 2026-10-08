"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Laptop } from "lucide-react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  priority?: boolean;
}

export function ImageWithFallback({
  src,
  alt,
  className = "",
  priority = false,
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  if (!src || error) {
    return (
      <div
        className={`bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center text-slate-400 p-4 select-none ${className}`}
      >
        <div className="w-12 h-12 rounded-2xl bg-white/80 shadow-sm flex items-center justify-center text-emerald-600 mb-2">
          <Laptop className="w-6 h-6 stroke-[1.8]" />
        </div>
        <span className="text-xs font-medium text-slate-500 text-center max-w-[160px] truncate">
          {alt || "Product Image"}
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-slate-100 ${className}`}>
      {/* Skeleton loader while loading */}
      {loading && (
        <div className="absolute inset-0 bg-slate-200 animate-pulse" />
      )}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        onLoad={() => setLoading(false)}
        onError={() => {
          setError(true);
          setLoading(false);
        }}
        className={`w-full h-full object-cover object-center transition-all duration-500 ${
          loading ? "opacity-0 scale-95" : "opacity-100 scale-100"
        }`}
      />
    </div>
  );
}
