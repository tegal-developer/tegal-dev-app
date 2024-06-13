import Link from 'next/link';
import Logo from '../atoms/Logo';
import Navigation from './Navigation';

export default function LeftNavigation({
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
  );
}
