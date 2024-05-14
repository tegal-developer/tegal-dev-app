import Link from 'next/link';
import Logo from '../atoms/Logo';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import { MdDarkMode } from 'react-icons/md';

export default function Navbar({
  imageSource,
  imageAlt,
  imageWidth,
  imageHeight,
}: {
  imageSource: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}) {
  return (
    <nav
      className="
        bg-white
        dark:bg-gray-900
        w-full
        flex
        items-center
        justify-between
        px-5
        py-5
        text-[#5F6368]"
    >
      <div className="flex items-center gap-20">
        <Link href={'#'}>
          <Logo
            imageSource={imageSource}
            imageAlt={imageAlt}
            imageWidth={imageWidth}
            imageHeight={imageHeight}
          />
        </Link>
        <Navigation />
      </div>
      <div className="flex items-center gap-10">
        <AuthNav />
        <MdDarkMode size={35} className="cursor-pointer" />
      </div>
    </nav>
  );
}
