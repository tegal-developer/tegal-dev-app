'use client';

import Link from 'next/link';

export default function ButtonSection({
  label,
  destination,
}: {
  label: string;
  destination: any;
}) {
  return (
    <Link
      href={destination}
      type="button"
      className="
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
        rounded-lg
        text-center"
    >
      {label}
    </Link>
  );
}
