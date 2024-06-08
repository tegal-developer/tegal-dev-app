'use client';

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
