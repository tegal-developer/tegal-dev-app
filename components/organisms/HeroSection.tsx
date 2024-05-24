'use client';

import { useTheme } from 'next-themes';
import SubHeroContent from '../molecules/SubHeroContent';
import SubHeroImage from '../molecules/SubHeroImage';

export default function HeroSection({
  heroHeading,
  heroBody,
  heroImages,
  invitationLinks,
  addNewsletterSubscriber,
  communityBenefits,
  communityHashtags,
}: {
  heroHeading: string;
  heroBody: string;
  heroImages: any;
  invitationLinks: any;
  addNewsletterSubscriber: any;
  communityBenefits: any;
  communityHashtags: any;
}) {
  const { resolvedTheme } = useTheme();
  return (
    <section className="px-5 pt-14 bg-[#FAFBFD] dark:bg-gray-900">
      <div
        className={`
          ${resolvedTheme === 'dark' ? 'block' : 'hidden md:hidden'}
          -z-0
          md:block
          bg-[#28f3dfce]
          absolute
          top-0
          left-0
          w-full
          md:w-96
          h-96
          opacity-20
          rounded-full
          blur-3xl`}
      />
      <div
        className="
          py-8
          mx-auto
          z-20
          lg:gap-8
          xl:gap-10
          lg:py-16
          flex
          flex-col
          md:flex-row
          justify-between
          lg:container
          lg:mx-auto"
      >
        <SubHeroContent
          heroHeading={heroHeading}
          heroBody={heroBody}
          invitationLinks={invitationLinks?.data}
          addNewsletterSubscriber={addNewsletterSubscriber}
          communityBenefits={communityBenefits}
          communityHashtags={communityHashtags}
        />
        <SubHeroImage heroImages={heroImages} />
      </div>
    </section>
  );
}
