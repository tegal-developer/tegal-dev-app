import Link from 'next/link';
import Logo from '../atoms/Logo';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import ThemeSwitcher from './ThemeSwitcher';

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
        border-gray-300"
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
      <div className="flex items-center gap-10">
        <AuthNav />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
