import Link from 'next/link';
import Logo from '../atoms/Logo';
import Navigation from './Navigation';
import AuthNav from './AuthNav';

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
        w-full
        flex
        items-center
        justify-between
        px-10
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
      <AuthNav />
    </nav>
  );
}
