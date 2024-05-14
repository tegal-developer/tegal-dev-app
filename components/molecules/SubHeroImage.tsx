import Image from 'next/image';

export default function SubHeroImage() {
  return (
    <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <Image
        src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
        alt="mockup"
        width={500}
        height={500}
      />
    </div>
  );
}
