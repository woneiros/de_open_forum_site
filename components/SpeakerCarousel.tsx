"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

type Speaker = {
  name: string;
  title: string;
  avatarUrl: string;
};

export default function SpeakerCarousel({ speakers }: { speakers: Speaker[] }) {
  const windowRef = useRef<HTMLUListElement>(null);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [focused, setFocused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const element = windowRef.current;
    if (!element) return;
    let inView = false;
    const update = () => setVisible(inView && !document.hidden);
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      update();
    });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    return () => {
      observer.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  const advance = useCallback((direction: number) => {
    const element = windowRef.current;
    if (!element) return;
    const card = element.firstElementChild as HTMLElement | null;
    const step = (card?.offsetWidth ?? 240) + 12;
    const end = element.scrollWidth - element.clientWidth;
    const atEnd = element.scrollLeft >= end - 2;
    const atStart = element.scrollLeft <= 2;
    const left = direction > 0 && atEnd ? 0
      : direction < 0 && atStart ? end
      : element.scrollLeft + direction * step;
    element.scrollTo({ left, behavior: reducedMotion ? "instant" : "smooth" });
  }, [reducedMotion]);

  useEffect(() => {
    if (paused || interacting || focused || reducedMotion || !visible) return;
    const timer = window.setInterval(() => advance(1), 4000);
    return () => window.clearInterval(timer);
  }, [advance, paused, interacting, focused, reducedMotion, visible]);

  if (speakers.length === 0) return null;

  const controlClass = "inline-flex h-9 w-9 items-center justify-center rounded-sm border border-accent/30 text-accent transition-colors hover:bg-accent/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

  return (
    <section
      id="speakers-2026"
      aria-labelledby="speakers-2026-heading"
      className="min-w-0 scroll-mt-24 rounded-sm border border-accent/20 bg-primary/50 p-4 sm:p-5"
      onMouseEnter={() => setInteracting(true)}
      onMouseLeave={() => setInteracting(false)}
      onFocusCapture={() => setFocused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setFocused(false);
      }}
    >
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <div className="space-y-2">
          <h3 id="speakers-2026-heading" className="font-mono text-lg font-semibold text-accent">
            Speakers from DEOF 2026
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Previous speakers" aria-controls="speakers-2026-window" className={controlClass} onClick={() => advance(-1)}>
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          {!reducedMotion && (
            <button type="button" aria-label={paused ? "Resume speaker scrolling" : "Pause speaker scrolling"} aria-pressed={paused} aria-controls="speakers-2026-window" className={controlClass} onClick={() => setPaused(!paused)}>
              {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
            </button>
          )}
          <button type="button" aria-label="Next speakers" aria-controls="speakers-2026-window" className={controlClass} onClick={() => advance(1)}>
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>
      <ul
        id="speakers-2026-window"
        ref={windowRef}
        tabIndex={0}
        aria-label="2026 speaker profiles"
        className="grid auto-cols-[15rem] grid-flow-col grid-rows-2 snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain pb-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent [scrollbar-color:var(--accent)_transparent] [scrollbar-width:thin]"
        onTouchStart={() => setInteracting(true)}
        onTouchEnd={() => setInteracting(false)}
        onTouchCancel={() => setInteracting(false)}
      >
        {speakers.map((speaker) => {
          const separator = speaker.title.lastIndexOf(" at ");
          const role = separator >= 0 ? speaker.title.slice(0, separator) : speaker.title;
          const company = separator >= 0 ? speaker.title.slice(separator + 4) : null;

          return (
            <li key={speaker.name} className="flex snap-start items-start gap-3 rounded-sm border border-accent/20 bg-accent/5 p-3">
              <Image src={speaker.avatarUrl} alt={`${speaker.name} portrait`} width={112} height={112} sizes="56px" className="h-14 w-14 shrink-0 rounded-full object-cover object-top" />
              <div className="min-w-0 space-y-1">
                <p className="text-[13px] font-semibold leading-snug text-primary-foreground">{speaker.name}</p>
                <p className="text-[11px] leading-relaxed text-primary-foreground/70">{role}</p>
                {company && <p className="text-[11px] font-medium leading-relaxed text-accent/90">{company}</p>}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
