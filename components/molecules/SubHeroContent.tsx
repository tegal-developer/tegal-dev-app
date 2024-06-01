import SubHeroContentInfo from './SubHeroContentInfo';
import SubHeroContentInteractor from './SubHeroContentInteractor';
import HashtagItemList from './HashtagItemList';
import BenefitItemList from './BenefitItemList';

export default function SubHeroContent({
  heroHeading,
  heroBody,
  invitationLinks,
  communityBenefits,
  communityHashtags,
}: {
  heroHeading: string;
  heroBody: string;
  invitationLinks: any;
  communityBenefits: any;
  communityHashtags: any;
}) {
  return (
    <div className="place-self-center z-10 lg:col-span-7 w-full">
      <SubHeroContentInfo heroHeading={heroHeading} heroBody={heroBody} />
      <SubHeroContentInteractor invitationLinks={invitationLinks} />
      <div className="text-black mt-5">
        <BenefitItemList communityBenefits={communityBenefits} />
        <HashtagItemList communityHashtags={communityHashtags} />
      </div>
    </div>
  );
}
