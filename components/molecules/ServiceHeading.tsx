'use client';

import parse from 'html-react-parser';
import Button from '../atoms/Button';

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
        <div className="w-full md:w-fit hover:scale-110 duration-150">
          <Button
            label="Hubungi Kami"
            backgroundColor="#1B71D8"
            hoverBackgroundColor="#1865c2"
            textColor="white"
            action={() => (window.location.href = 'mailto:contact@tegal.dev')}
            textSize="xl"
          />
        </div>
      </div>
    </div>
  );
}
