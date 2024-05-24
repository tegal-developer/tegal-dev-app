import Image from 'next/image';

export default function Logo({
  imageLightSource,
  imageDarkSource,
  imageAlt,
  imageWidth,
  imageHeight,
}: {
  imageLightSource: string;
  imageDarkSource: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
}) {
  return (
    <>
      <Image
        className="hover:scale-110 duration-150 block dark:hidden"
        src={imageLightSource}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
      <Image
        className="hover:scale-110 duration-150 hidden dark:block"
        src={imageDarkSource}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
    </>
  );
}
