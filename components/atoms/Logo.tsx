'use client';

import { getInitialTheme } from '@/utils';
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
  const theme = getInitialTheme();
  const { resolvedTheme } = useTheme();

  return (
    <Image
      className="hover:scale-110 duration-150"
      src={
        resolvedTheme === 'dark' || theme === 'dark'
          ? imageDarkSource
          : imageLightSource
      }
      alt={imageAlt}
      width={imageWidth}
      height={imageHeight}
    />
  );
}
