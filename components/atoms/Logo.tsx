import Image from 'next/image';

export default function Logo({
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
    <Image
      src={imageSource}
      alt={imageAlt}
      width={imageWidth}
      height={imageHeight}
    />
  );
}
