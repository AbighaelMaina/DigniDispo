"use client";
import Image from "next/image";
import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

// Shows a soft sage panel if the image file is missing or fails to load.
export default function Photo({
  src,
  alt,
  className = "",
  priority = false,
  sizes = "(min-width: 768px) 50vw, 100vw",
}: Props) {
  const [failed, setFailed] = useState(false);
  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-sage/60 to-sage/20 ${className}`}>
      {!failed && (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          onError={() => setFailed(true)}
          className="object-cover"
        />
      )}
    </div>
  );
}