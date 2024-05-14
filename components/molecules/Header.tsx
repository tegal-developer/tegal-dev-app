import Headline from './Headline';
import Navbar from './Navbar';

export default function Header({
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
    <header>
      <Navbar
        imageSource={imageSource}
        imageAlt={imageAlt}
        imageWidth={imageWidth}
        imageHeight={imageHeight}
      />
      <Headline text="Coming Soon" />
    </header>
  );
}
