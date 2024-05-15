import SubHeroContentInfo from './SubHeroContentInfo';
import SubHeroContentInteractor from './SubHeroContentInteractor';

export default function SubHeroContent({
  heroHeading,
  heroBody,
  invitationLinks,
  addNewsletterSubscriber,
}: {
  heroHeading: string;
  heroBody: string;
  invitationLinks: any;
  addNewsletterSubscriber: any;
}) {
  return (
    <div className="place-self-center lg:col-span-7">
      <SubHeroContentInfo heroHeading={heroHeading} heroBody={heroBody} />
      <SubHeroContentInteractor
        invitationLinks={invitationLinks}
        addNewsletterSubscriber={addNewsletterSubscriber}
      />
    </div>
  );
}
