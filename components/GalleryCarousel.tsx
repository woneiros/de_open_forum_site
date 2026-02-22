"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";

type GalleryItem = {
  src: string;
  alt: string;
  title: string;
  body: readonly string[];
};

type GalleryCarouselProps = {
  items: readonly GalleryItem[];
  intervalMs?: number;
};

export default function GalleryCarousel({
  items,
  intervalMs = 8000,
}: GalleryCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const totalItems = items.length;

  const safeItems = useMemo(
    () => (totalItems > 0 ? items : []),
    [items, totalItems]
  );

  useEffect(() => {
    if (totalItems <= 1) {
      return undefined;
    }

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalItems);
    }, intervalMs);

    return () => window.clearInterval(timer);
  }, [intervalMs, totalItems]);

  if (safeItems.length === 0) {
    return null;
  }

  const activeItem = safeItems[activeIndex];

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % totalItems);
  };

  return (
    <div className="overflow-hidden rounded-sm border border-accent/20 bg-primary/50">
      <div className="relative aspect-[16/9]">
        <Image
          src={activeItem.src}
          alt={activeItem.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-between px-3">
          <button
            type="button"
            onClick={goToPrevious}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-primary/70 text-base text-primary-foreground shadow-sm backdrop-blur hover:border-accent hover:text-accent"
            aria-label="Previous photo"
          >
            ◀
          </button>
          <button
            type="button"
            onClick={goToNext}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-primary/70 text-base text-primary-foreground shadow-sm backdrop-blur hover:border-accent hover:text-accent"
            aria-label="Next photo"
          >
            ▶
          </button>
        </div>
      </div>
      <div className="relative flex min-h-[180px] flex-col border-t border-accent/20 bg-accent/10 px-6 py-5 text-sm text-primary-foreground">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <p className="font-semibold">{activeItem.title}</p>
        </div>
        <div className="mt-3 space-y-1 text-muted-foreground">
          {activeItem.body.map((line) => (
            <p key={line}>{line}</p>
          ))}
        </div>
        <div className="absolute bottom-4 left-6 text-[11px] text-muted-foreground">
          {activeIndex + 1} / {totalItems}
        </div>
      </div>
    </div>
  );
}
