import NewsletterForm from './NewsletterForm';
import SubHeroContentButton from './SubHeroContentButton';

export default function SubHeroContentInteractor({
  invitationLinks,
}: {
  invitationLinks: any;
}) {
  return (
    <div className="flex flex-col gap-7">
      <SubHeroContentButton invitationLinks={invitationLinks} />
      <NewsletterForm />
    </div>
  );
}
