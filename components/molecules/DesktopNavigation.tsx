import LeftNavigation from './LeftNavigation';
import RightNavigation from './RightNavigation';

export default function DesktopNavigation({
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
    <>
      <LeftNavigation
        logoImageLightSource={logoImageLightSource}
        logoImageDarkSource={logoImageDarkSource}
        logoImageAlt={logoImageAlt}
        logoImageWidth={logoImageWidth}
        logoImageHeight={logoImageHeight}
      />
      <RightNavigation />
    </>
  );
}
