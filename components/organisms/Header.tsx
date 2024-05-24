'use client';

import { useState } from 'react';
import Navbar from '../molecules/Navbar';

export default function Header({
  logoImageLightSource,
  logoImageDarkSource,
  logoImageAlt,
  logoImageWidth,
  logoImageHeight,
}: {
  logoImageLightSource: string;
  logoImageDarkSource: string;
  logoImageAlt: string;
  logoImageWidth: number;
  logoImageHeight: number;
}) {
  const [isClosed, setIsClosed] = useState(false);

  return (
    <header>
      <Navbar
        logoImageLightSource={logoImageLightSource}
        logoImageDarkSource={logoImageDarkSource}
        logoImageAlt={logoImageAlt}
        logoImageWidth={logoImageWidth}
        logoImageHeight={logoImageHeight}
      />
    </header>
  );
}
