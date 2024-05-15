'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Logo({
  imageLightSource,
  imageDarkSource,
  imageAlt,
  imageWidth,
  imageHeight,
}: {
  imageLightSource: string;
  imageDarkSource: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}) {
  const { resolvedTheme } = useTheme();
  return (
    <Image
      src={resolvedTheme === 'dark' ? imageDarkSource : imageLightSource}
      alt={imageAlt}
      width={imageWidth}
      height={imageHeight}
    />
  );
}
