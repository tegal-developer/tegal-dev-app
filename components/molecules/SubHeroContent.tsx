import { FaCheck } from 'react-icons/fa';
import SubHeroContentInfo from './SubHeroContentInfo';
import SubHeroContentInteractor from './SubHeroContentInteractor';

export default function SubHeroContent({
  heroHeading,
  heroBody,
  invitationLinks,
  addNewsletterSubscriber,
  communityBenefits,
  communityHashtags,
}: {
  heroHeading: string;
  heroBody: string;
  invitationLinks: any;
  addNewsletterSubscriber: any;
  communityBenefits: any;
  communityHashtags: any;
}) {
  return (
    <div className="place-self-center z-10 lg:col-span-7 w-full">
      <SubHeroContentInfo heroHeading={heroHeading} heroBody={heroBody} />
      <SubHeroContentInteractor
        invitationLinks={invitationLinks}
        addNewsletterSubscriber={addNewsletterSubscriber}
      />
      <div className="text-black mt-5">
        <div className="flex flex-col md:flex-row md:gap-5 md:justify-center xl:justify-normal">
          {communityBenefits?.map((communityBenefit: any) => (
            <div
              key={communityBenefit?.id}
              className="flex items-center gap-2 dark:text-white"
            >
              <FaCheck />
              <h3
                className="
                  items-center
                  justify-center
                  py-3
                  text-xs
                  font-medium
                  text-center"
              >
                {communityBenefit?.attributes?.benefit}
              </h3>
            </div>
          ))}
        </div>
        <div
          className="
            mt-5
            flex
            gap-3
            md:justify-center
            xl:justify-normal
            overflow-x-scroll
            py-3
            text-gray-700
            dark:text-white
            md:overflow-hidden"
        >
          {communityHashtags?.map((communityHashtag: any) => (
            <p
              key={communityHashtag?.id}
              className="text-xs border border-gray-300 w-fit p-1 rounded-lg dark:border-white"
            >
              {communityHashtag?.attributes?.hashtag}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
