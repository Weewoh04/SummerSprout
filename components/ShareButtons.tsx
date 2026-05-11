"use client";

import { Copy, Facebook } from "lucide-react";

type ShareButtonsProps = {
  title: string;
  path: string;
};

export function ShareButtons({ title, path }: ShareButtonsProps) {
  const shareUrl = path.startsWith("http") ? path : `https://summer-sprout.com${path}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;

  async function copyLink() {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      await navigator.clipboard.writeText(shareUrl);
    }
  }

  return (
    <div className="share-row" aria-label={`Share ${title}`}>
      <a href={facebookUrl} target="_blank" rel="noreferrer">
        <Facebook size={18} aria-hidden="true" />
        Share on Facebook
      </a>
      <button type="button" onClick={copyLink}>
        <Copy size={18} aria-hidden="true" />
        Copy Link
      </button>
    </div>
  );
}
