'use client';

import SocialIconList from '../molecules/SocialIconList';
import CopyrightItem from '../molecules/CopyrightItem';
import Link from 'next/link';
import toast from 'react-hot-toast';

export default function Footer({ content }: { content: string }) {
  const handleButtonClick = () => toast('Fitur ini akan segera diluncurkan!');

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
        className="
        lg:container
        lg:mx-auto
        flex
        flex-col-reverse
        md:flex-row
        gap-5
        justify-between
        items-center"
      >
        <CopyrightItem content={content} />
        <div
          className="
            flex
            flex-col-reverse
            md:flex-row
            gap-5
            md:gap-0
            md:divide-x
            items-center"
        >
          <div className="px-5 flex flex-col md:flex-row items-center gap-2 md:gap-5">
            <Link
              href="#"
              onClick={handleButtonClick}
              className="hover:text-gray-300"
            >
              Syarat dan Ketentuan
            </Link>
            <Link
              href="https://wa.me/6283173227143"
              target="_blank"
              className="hover:text-gray-300"
            >
              Bantuan
            </Link>
          </div>
          <div className="px-5">
            <SocialIconList />
          </div>
        </div>
      </div>
    </footer>
  );
}
