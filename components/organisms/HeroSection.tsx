'use client';

import SubHeroContent from '../molecules/SubHeroContent';
import SubHeroImage from '../molecules/SubHeroImage';

export default function HeroSection({
  heroHeading,
  heroBody,
  invitationLinks,
  addNewsletterSubscriber,
  communityPhotos,
}: {
  heroHeading: string;
  heroBody: string;
  invitationLinks: any;
  addNewsletterSubscriber: any;
  communityPhotos: any;
}) {
  return (
    <section className="bg-[#E5E8E9] dark:bg-gray-900 ">
      <div className="px-5 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 flex justify-between">
        <SubHeroContent
          heroHeading={heroHeading}
          heroBody={heroBody}
          invitationLinks={invitationLinks?.data}
          addNewsletterSubscriber={addNewsletterSubscriber}
        />
        <SubHeroImage communityPhotos={communityPhotos} />
      </div>
    </section>
  );
}
