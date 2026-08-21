"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageSlotProps {
  src?: string;
  alt: string;
  width: number;
  height: number;
  filename: string;
  category?: string;
  className?: string;
  priority?: boolean;
}

export function ImageSlot({
  src,
  alt,
  width,
  height,
  filename,
  category = "imagenes",
  className = "",
  priority = false,
}: ImageSlotProps) {
  const [hasError, setHasError] = useState(false);
  const imagePath = `/${category}/${filename}`;
  const showPlaceholder = !src || hasError;

  if (showPlaceholder) {
    const aspectRatio = (height / width) * 100;
    return (
      <div
        className={`relative bg-gradient-to-br from-slate-100 to-slate-200 flex flex-col items-center justify-center border-2 border-dashed border-slate-300 ${className}`}
        style={{
          aspectRatio: `${width} / ${height}`,
          minHeight: `${Math.min(200, height)}px`,
        }}
      >
        <div className="text-center px-4">
          <div className="text-xs font-mono text-slate-500 mb-2">
            Espacio pendiente
          </div>
          <div className="text-sm font-semibold text-slate-700 mb-1">
            {filename}
          </div>
          <div className="text-xs text-slate-600">
            {width} × {height}px
          </div>
          <div className="text-xs text-slate-500 mt-3">
            Copia el archivo aquí: <br />
            <code className="text-blue-600">public/{category}/{filename}</code>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ aspectRatio: `${width} / ${height}` }}>
      <Image
        src={imagePath}
        alt={alt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 100vw"
        priority={priority}
        onError={() => setHasError(true)}
        className="object-cover"
      />
    </div>
  );
}
