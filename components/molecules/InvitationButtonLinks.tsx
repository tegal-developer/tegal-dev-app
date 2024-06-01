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
      <ButtonAction
        buttonType="button"
        buttonLabel="Gabung Keanggotaan"
        buttonAction={() => document.getElementById('my_modal_2').showModal()}
        backgroundColor="transparent"
        hoverBackgroundColor="gray-100"
        darkHoverBackgroundColor="gray-700"
        textColor="gray-700"
      />
      <DialogRegistration />
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
