import ButtonLink from '../atoms/ButtonLink';

export default function InvitationButtonLinks({
  invitationLinks,
}: {
  invitationLinks: any;
}) {
  return (
    <>
      {invitationLinks?.map((invitationLink: any) => (
        <ButtonLink
          key={invitationLink?.id}
          href={invitationLink?.attributes?.button_link}
          text={invitationLink?.attributes?.button_label}
        />
      ))}
    </>
  );
}
