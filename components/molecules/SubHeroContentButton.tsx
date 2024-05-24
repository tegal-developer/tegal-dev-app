import InvitationButtonLinks from './InvitationButtonLinks';

export default function SubHeroContentButton({
  invitationLinks,
}: {
  invitationLinks: any;
}) {
  return (
    <div className="flex flex-col md:flex-row md:justify-center xl:justify-normal gap-3">
      <InvitationButtonLinks invitationLinks={invitationLinks} />
    </div>
  );
}
