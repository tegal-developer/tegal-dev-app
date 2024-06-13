'use client';

import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';

export default function Navbar({
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
    <nav
      className="
        fixed
        top-0
        z-40
        bg-[#ffffffd0]
        dark:bg-[#111827d2]
        w-full
        px-5
        py-3
        text-[#5F6368]
        shadow-lg
        dark:border-[#1B71D8]
        backdrop-blur-xl
        duration-300"
    >
      <div className="lg:container lg:max-w-[1800px] lg:mx-auto flex items-center justify-between">
        <DesktopNavigation
          logoImageLightSource={logoImageLightSource}
          logoImageDarkSource={logoImageDarkSource}
          logoImageAlt={logoImageAlt}
          logoImageWidth={logoImageWidth}
          logoImageHeight={logoImageHeight}
        />
        <MobileNavigation />
      </div>
    </nav>
  );
}
