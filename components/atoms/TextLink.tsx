import Link from 'next/link';

export default function TextLink({
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
      text-gray-700
        dark:text-white
        hover:text-[#1B71D8]
        hover:underline
        hover:underline-offset-8
        hover:decoration-4
        tracking-wide
        text-xs"
    >
      {text}
    </Link>
  );
}
