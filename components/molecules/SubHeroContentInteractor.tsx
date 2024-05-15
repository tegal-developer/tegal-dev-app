import NewsletterForm from './NewsletterForm';
import SubHeroContentButton from './SubHeroContentButton';

export default function SubHeroContentInteractor({
  invitationLinks,
  addNewsletterSubscriber,
}: {
  invitationLinks: any;
  addNewsletterSubscriber: any;
}) {
  return (
    <div className="flex flex-col gap-10">
      <SubHeroContentButton invitationLinks={invitationLinks} />
      <NewsletterForm addNewsletterSubscriber={addNewsletterSubscriber} />
    </div>
  );
}
