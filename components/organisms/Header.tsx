import Headline from '../molecules/Headline';
import Navbar from '../molecules/Navbar';

export default function Header({
  logoImageLightSource,
  logoImageDarkSource,
  logoImageAlt,
  logoImageWidth,
  logoImageHeight,
  headlineContent,
}: {
  logoImageLightSource: string;
  logoImageDarkSource: string;
  logoImageAlt: string;
  logoImageWidth: number;
  logoImageHeight: number;
  headlineContent: string;
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
      {headlineContent !== undefined ? <Headline text={headlineContent} /> : ''}
    </header>
  );
}
