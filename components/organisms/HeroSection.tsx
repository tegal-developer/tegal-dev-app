import BlurryEffect from '../atoms/BlurryEffect';
import SubHeroContent from '../molecules/SubHeroContent';
import SubHeroImage from '../molecules/SubHeroImage';

export default function HeroSection({
  heroHeading,
  heroBody,
  heroImages,
  invitationLinks,
  communityBenefits,
  communityHashtags,
}: {
  heroHeading: string;
  heroBody: string;
  heroImages: any;
  invitationLinks: any;
  communityBenefits: any;
  communityHashtags: any;
}) {
  return (
    <section className="px-5 pt-14 bg-[#FAFBFD] dark:bg-gray-900 ">
      <BlurryEffect />
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
          lg:max-w-[1800px]
          lg:mx-auto"
      >
        <SubHeroContent
          heroHeading={heroHeading}
          heroBody={heroBody}
          invitationLinks={invitationLinks?.data}
          communityBenefits={communityBenefits}
          communityHashtags={communityHashtags}
        />
        <SubHeroImage heroImages={heroImages} />
      </div>
    </section>
  );
}
