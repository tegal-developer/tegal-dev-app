'use client';

import Link from 'next/link';
import toast from 'react-hot-toast';

export default function PopUpMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: any;
}) {
  const handleButtoClick = () => toast('Fitur ini akan segera diluncurkan!');

  return (
    <ul
      className={`
        absolute
        left-0
        w-full
        menu
        mt-[380px]
        py-5
        z-20
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
        <Link
          href="/#event"
          className="w-full justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          Event
        </Link>
      </li>
      <li className="w-full">
        <Link
          href="/#blog"
          className="w-full justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          Blog
        </Link>
      </li>
      <li className="w-full">
        <Link
          href="/#about"
          className="w-full justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          About
        </Link>
      </li>
      <li className="w-full">
        <Link
          href="/#contact-us"
          className="w-full justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          Contact Us
        </Link>
      </li>
      <li className="w-full">
        <Link
          href="/#faq"
          className="w-full justify-center"
          onClick={() => setIsOpen(!isOpen)}
        >
          FAQ
        </Link>
      </li>
      <li className="w-full" onClick={() => handleButtoClick()}>
        <a className="w-full justify-center">Sign In</a>
      </li>
      <li className="w-full" onClick={() => handleButtoClick()}>
        <a className="w-full justify-center">Register</a>
      </li>
    </ul>
  );
}
