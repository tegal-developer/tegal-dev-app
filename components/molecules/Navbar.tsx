'use client';

import Link from 'next/link';
import Logo from '../atoms/Logo';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import ThemeSwitcher from './ThemeSwitcher';
import { useState } from 'react';
import HamburgerButton from './HamburgerButton';
import PopUpMenu from './PopUpMenu';

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
  const [isOpen, setIsOpen] = useState(false);

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
      <div
        className="lg:container lg:max-w-[1800px] lg:mx-auto flex
        items-center
        justify-between"
      >
        <div className="flex items-center gap-20">
          <Link href={'/'}>
            <Logo
              imageLightSource={logoImageLightSource}
              imageDarkSource={logoImageDarkSource}
              imageAlt={logoImageAlt}
              imageWidth={logoImageWidth}
              imageHeight={logoImageHeight}
            />
          </Link>
          <Navigation />
        </div>
        <div className="lg:flex items-center gap-10 hidden">
          <AuthNav />
          <ThemeSwitcher />
        </div>
        <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
        <PopUpMenu isOpen={isOpen} />
      </div>
    </nav>
  );
}
