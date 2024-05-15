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
        justify-between
        items-center"
    >
      <p>
        &copy; 2024{' '}
        <Link href={'/'} className="hover:text-[#1B71D8]">
          Tegal Developer Group
        </Link>
        . All rights reserved
      </p>
      <SocialIconList />
    </footer>
  );
}
