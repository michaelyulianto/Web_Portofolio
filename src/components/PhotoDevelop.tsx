"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function PhotoDevelop({ children }: { children: ReactNode }) {
  const mosaicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mosaic = mosaicRef.current;
    if (!mosaic || !window.IntersectionObserver || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const frames = Array.from(mosaic.querySelectorAll<HTMLElement>(".offscreen__frame"));
    frames.forEach((frame) => { frame.dataset.reveal = "waiting"; });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const frame = entry.target as HTMLElement;
        const image = frame.querySelector("img");
        const show = () => { frame.dataset.reveal = "visible"; };

        if (!image || image.complete) show();
        else {
          image.addEventListener("load", show, { once: true });
          image.addEventListener("error", show, { once: true });
        }
        observer.unobserve(frame);
      });
    }, { threshold: 0.12 });

    frames.forEach((frame) => observer.observe(frame));
    return () => observer.disconnect();
  }, []);

  return <div className="offscreen__mosaic page-shell" ref={mosaicRef}>{children}</div>;
}
