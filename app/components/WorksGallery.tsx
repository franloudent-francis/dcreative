"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X } from "lucide-react";

type GalleryImage = { src: string; alt: string };

const row1: GalleryImage[] = [
  { src: "/images/hero/girl-ugc.webp", alt: "AI UGC style girl creative for lifestyle brands" },
  { src: "/images/hero/mens.webp", alt: "Men's fashion model creative by D Creative Studio" },
  { src: "/images/hero/jewels.webp", alt: "AI jewellery model creative for accessories brands" },
  { src: "/images/hero/kuruthi.webp", alt: "AI fashion model in ethnic wear for clothing brands" },
  { src: "/images/hero/product.webp", alt: "AI product photography creative for ecommerce" },
  { src: "/images/hero/tops.webp", alt: "AI fashion model creative for kurti and tops brands" },
  { src: "/images/hero/women.webp", alt: "AI women fashion model creative for clothing brands" },
  { src: "/images/hero/mens pose.webp", alt: "Men's fashion model pose creative" },
];

const row2: GalleryImage[] = [
  { src: "/images/product-before-after.webp", alt: "Product photography before and after by D Creative Studio" },
  { src: "/images/offer banner.webp", alt: "Offer banner creative for social media promotions" },
  { src: "/images/realesate ads.webp", alt: "Real estate advertisement creative by D Creative Studio" },
  { src: "/images/product ad creatives.webp", alt: "Product ad creatives for Instagram and social media" },
  { src: "/images/product ads.webp", alt: "AI product advertisement visuals for ecommerce brands" },
  { src: "/images/charcter and pose.webp", alt: "AI character and pose creative by D Creative Studio" },
  { src: "/images/charcter and texture.webp", alt: "AI character with texture creative for clothing brands" },
  { src: "/images/charcter consitency .webp", alt: "AI character consistency creative by D Creative Studio" },
];

function GalleryRow({
  images,
  direction,
  onSelect,
}: {
  images: GalleryImage[];
  direction: "left" | "right";
  onSelect: (img: GalleryImage) => void;
}) {
  const doubled = [...images, ...images];
  return (
    <div className={`gallery-row gallery-row-${direction}`}>
      <div className="gallery-track">
        {doubled.map((img, i) => (
          <button
            key={`${img.src}-${i}`}
            className="gallery-thumb"
            onClick={() => onSelect(img)}
            aria-label={`View ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              loading="lazy"
              className="creative-image"
              sizes="240px"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function WorksGallery() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selected]);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      <div className="works-gallery" aria-label="Creative works gallery">
        <GalleryRow images={row1} direction="left" onSelect={setSelected} />
        <GalleryRow images={row2} direction="right" onSelect={setSelected} />
      </div>

      {selected && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Preview: ${selected.alt}`}
          onClick={() => setSelected(null)}
        >
          <button
            className="lightbox-close"
            aria-label="Close preview"
            onClick={() => setSelected(null)}
          >
            <X aria-hidden="true" />
          </button>
          <div
            className="lightbox-img-wrap"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selected.src}
              alt={selected.alt}
              fill
              className="lightbox-image"
              sizes="(max-width: 640px) 95vw, 80vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
