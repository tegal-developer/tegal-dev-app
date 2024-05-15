'use client';

import toast from 'react-hot-toast';
import InvitationButtonLinks from './InvitationButtonLinks';

export default function SubHeroContentButton({
  invitationLinks,
}: {
  invitationLinks: any;
}) {
  const handleButtoClick = () => toast('Coming soon!');

  return (
    <div className="flex gap-5">
      <button
        type="button"
        className="
          inline-flex
          items-center
          justify-center
          px-5
          py-3
          text-base
          font-medium
          text-center
          text-gray-900
          border
          border-gray-300
          rounded-lg
          hover:bg-gray-100
          focus:ring-4
          focus:ring-gray-100
          dark:text-white
          dark:border-gray-700
          dark:hover:bg-gray-700
          dark:focus:ring-gray-800"
        onClick={() => handleButtoClick()}
      >
        Gabung Keanggotaan
      </button>
      <InvitationButtonLinks invitationLinks={invitationLinks} />
    </div>
  );
}
