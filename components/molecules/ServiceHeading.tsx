'use client';

import parse from 'html-react-parser';

export default function ServiceHeading({
  contactHeading,
}: {
  contactHeading: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col justify-center items-center gap-5 md:gap-10">
        <div className="text-2xl md:text-3xl lg:text-4xl font-bold">
          {contactHeading !== undefined ? parse(contactHeading) : ''}
        </div>
        <button
          type="button"
          className={`
            sm:min-w-[160px]
            bg-[#1B71D8]
            hover:bg-[#0d4385]
            active:scale-95
            duration-150
            text-white
            dark:text-white
            py-3
            px-3
            text-xs
            font-semibold
            rounded-lg`}
          onClick={() => (window.location.href = 'mailto:contact@tegal.dev')}
        >
          Hubungi Kami
        </button>
      </div>
    </div>
  );
}
