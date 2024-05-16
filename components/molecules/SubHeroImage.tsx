import Image from 'next/image';

export default function SubHeroImage({
  communityPhotos,
}: {
  communityPhotos: any;
}) {
  return (
    <div
      className="
        hidden
        lg:mt-0
        lg:col-span-5
        lg:flex
        hover:cursor-pointer
        hover:brightness-50
        duration-500"
    >
      <Image
        src={communityPhotos}
        alt="mockup"
        width={900}
        height={900}
        className="rounded-xl"
      />
    </div>
  );
}
