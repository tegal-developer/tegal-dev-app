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
        className="hover:scale-110 duration-150 block dark:hidden active:scale-95"
        src={imageLightSource}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
      <Image
        className="hover:scale-110 duration-150 hidden dark:block active:scale-95"
        src={imageDarkSource}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
      />
    </>
  );
}
