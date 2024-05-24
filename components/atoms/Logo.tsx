'use client';

import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

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
  const [localStorageTheme, setLocalStorageTheme] = useState('');

  useEffect(() => {
    const theme = window.localStorage.getItem('theme');
    setLocalStorageTheme(theme ? theme : '');
  }, []);

  return (
    <Image
      className="hover:scale-110 duration-150"
      src={
        resolvedTheme === 'dark' && localStorageTheme === 'dark'
          ? imageDarkSource
          : imageLightSource
      }
      alt={imageAlt}
      width={imageWidth}
      height={imageHeight}
    />
  );
}
