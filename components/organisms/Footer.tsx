import Link from 'next/link';
import SocialIconList from '../molecules/SocialIconList';

export default function Footer() {
  return (
    <footer
      className="
        bg-[#E5E8E9]
        dark:bg-gray-900 
        text-gray-500
        p-5
        border-gray-300
        border-t-2
        flex
        flex-col-reverse
        md:flex-row
        gap-5
        justify-between
        items-center
        text-sm"
    >
      <p>
        &copy; 2024{' '}
        <Link href={'/'} className="hover:text-[#1B71D8]">
          Tegal Dev
        </Link>
        . All rights reserved
      </p>
      <SocialIconList />
    </footer>
  );
}
