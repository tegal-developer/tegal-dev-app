import Link from 'next/link';
import SocialIconList from '../molecules/SocialIconList';

export default function Footer() {
  return (
    <footer
      className="
      bg-[#1B71D8]
        dark:bg-gray-900 
        text-white
        dark:text-white
        p-5
        dark:border-y
        dark:border-gray-700
        text-xs
        tracking-wider"
    >
      <div
        className="lg:container lg:mx-auto
        flex
        flex-col-reverse
        md:flex-row
        gap-5
        justify-between
        items-center"
      >
        <p>
          &copy; 2024{' '}
          <Link href={'/'} className="hover:text-[#1B71D8]">
            Tegal Dev
          </Link>
          . All rights reserved
        </p>
        <SocialIconList />
      </div>
    </footer>
  );
}
