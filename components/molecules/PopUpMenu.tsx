'use client';

import Link from 'next/link';
import toast from 'react-hot-toast';

export default function PopUpMenu({ isOpen }: { isOpen: boolean }) {
  const handleButtoClick = () => toast('Fitur ini akan segera diluncurkan!');

  return (
    <ul
      className={`
        absolute
        left-0
        w-full
        menu
        mt-[20rem]
        py-5
        z-10
        lg:hidden
        ease-in-out
        duration-300
        block
        bg-[#ffffffd0]
        backdrop-blur-2xl
        dark:bg-[#111827d2]
        items-center
        border-y
        dark:border-gray-700 ${isOpen ? '' : 'hidden'} text-black
        dark:text-white
        gap-2`}
    >
      <li className="w-full" onClick={() => handleButtoClick()}>
        <a className="w-full justify-center">Community</a>
      </li>
      <li className="w-full">
        <Link href="/merchandises" className="w-full justify-center">
          Merchandises
        </Link>
      </li>
      <li className="w-full">
        <Link href="/events" className="w-full justify-center">
          Events
        </Link>
      </li>
      <li className="w-full">
        <Link href="/blogs" className="w-full justify-center">
          Blogs
        </Link>
      </li>
      <li className="w-full" onClick={() => handleButtoClick()}>
        <a className="w-full justify-center">Sign In</a>
      </li>
      <li className="w-full" onClick={() => handleButtoClick()}>
        <a className="w-full justify-center">Sign Up</a>
      </li>
    </ul>
  );
}
