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
        z-20
        bg-[#E5E8E9]
        dark:bg-gray-900
        w-full
        flex
        items-center
        justify-between
        px-5
        py-5
        text-[#5F6368]
        border-b-2
        dark:border-[#1B71D8]
        bg-transparent
        backdrop-blur-3xl"
    >
      <div className="flex items-center gap-20">
        <Link href={'#'}>
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
      <div className="md:flex items-center gap-10 hidden">
        <AuthNav />
        <ThemeSwitcher />
      </div>
      <HamburgerButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <PopUpMenu isOpen={isOpen} />
    </nav>
  );
}
