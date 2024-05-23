'use client';

import Button from '../atoms/Button';

export default function ServiceHeading() {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col justify-center items-center gap-5 md:gap-10">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Ingin Berkolaborasi dengan{' '}
          <span className="text-[#1B71D8]">Tegal Dev</span>?
        </h1>
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
