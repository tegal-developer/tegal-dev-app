'use client';

import ButtonAction from '../atoms/ButtonAction';
import ButtonLink from '../atoms/ButtonLink';
import DialogRegistration from './DialogRegistration';

export default function InvitationButtonLinks({
  invitationLinks,
}: {
  invitationLinks: any;
}) {
  return (
    <>
      <div className="md:w-56">
        <ButtonAction
          buttonLabel="Gabung Keanggotaan"
          buttonAction={() =>
            (
              document?.getElementById('my_modal_2') as HTMLDialogElement
            ).showModal()
          }
          backgroundColor="transparent"
          hoverBackgroundColor="gray-100"
          darkHoverBackgroundColor="gray-700"
          textColor="gray-700"
        />
      </div>
      <DialogRegistration />
      {invitationLinks?.map((invitationLink: any) => (
        <ButtonLink
          key={invitationLink?.id}
          href={invitationLink?.button_link}
          text={invitationLink?.button_label}
        />
      ))}
    </>
  );
}
