import Image from 'next/image';

export default function SubHeroImage({ heroImages }: { heroImages: any }) {
  return (
    <div
      className="
        hidden
        lg:mt-0
        lg:col-span-5
        xl:flex
        2xl:min-w-[680px]
        hover:cursor-pointer
        duration-500
        hover:scale-105
        active:scale-95"
    >
      <Image
        src={heroImages}
        alt="mockup"
        width={900}
        height={900}
        className="rounded-xl object-cover bg-white"
      />
    </div>
  );
}
