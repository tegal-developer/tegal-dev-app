import InvitationButtonLinks from './InvitationButtonLinks';

export default function SubHeroContentButton({
  invitationLinks,
}: {
  invitationLinks: any;
}) {
  return (
    <div className="flex flex-col md:flex-row gap-3 md:gap-5">
      <InvitationButtonLinks invitationLinks={invitationLinks} />
    </div>
  );
}
