import Image from 'next/image';

export default function SubHeroImage({ heroImages }: { heroImages: any }) {
  return (
    <div>
      <div
        className="
          hidden
          lg:mt-0
          lg:col-span-5
          xl:flex
          2xl:min-w-[720px]
          2xl:max-h-[420px]
          overflow-hidden
          hover:cursor-pointer
          duration-500
          hover:brightness-50
          dark:brightness-75
          dark:hover:brightness-[.25]
          active:scale-95
          rounded-3xl"
      >
        <Image
          src={heroImages}
          alt="mockup"
          width={900}
          height={900}
          className="object-cover"
        />
      </div>
    </div>
  );
}
