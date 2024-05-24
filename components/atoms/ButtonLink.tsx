import Link from 'next/link';

export default function ButtonLink({
  href,
  text,
}: {
  href: string;
  text: string;
}) {
  return (
    <Link
      href={href}
      className="
        inline-flex
        items-center
        justify-center
        px-5
        py-3
        text-xs
        font-medium
        text-center
        text-gray-700
        border
        border-gray-300
        rounded-lg
        focus:ring-4
        active:scale-95
        duration-150
        focus:ring-gray-100
        dark:text-white
        hover:bg-gray-100
        dark:hover:bg-gray-700
        ease-in-out
        dark:hover:shadow-slate-500
        dark:focus:ring-gray-800"
      target="_blank"
    >
      {text}
    </Link>
  );
}
