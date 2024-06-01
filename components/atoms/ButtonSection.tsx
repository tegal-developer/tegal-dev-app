'use client';

export default function ButtonSection({
  label,
  action,
}: {
  label: string;
  action: any;
}) {
  return (
    <button
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
        rounded-lg"
      onClick={action}
    >
      {label}
    </button>
  );
}
