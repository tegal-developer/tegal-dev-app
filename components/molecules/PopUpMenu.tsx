import Link from 'next/link';

export default function PopUpMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <ul
      className={`
        absolute
        left-0
        w-full
        menu
        mt-[460px]
        py-5
        z-20
        bg-[#E5E8E9]
        dark:bg-gray-900
        items-center
        border-y-2
        border-gray-300
        dark:border-white ${isOpen ? '' : 'hidden'} text-black
        dark:text-white
        gap-2`}
    >
      <li className="w-full">
        <a className="w-full justify-center">Community</a>
      </li>
      <li className="w-full">
        <a className="w-full justify-center">Events</a>
      </li>
      <li className="w-full">
        <a className="w-full justify-center">Blogs</a>
      </li>
      <li className="w-full">
        <Link href="/#about" className="w-full justify-center">
          About
        </Link>
      </li>
      <li className="w-full">
        <Link href="/contact-us" className="w-full justify-center">
          Contact Us
        </Link>
      </li>
      <li className="w-full">
        <Link href="/#faq" className="w-full justify-center">
          FAQ
        </Link>
      </li>
      <li className="w-full">
        <a className="w-full justify-center">Sign In</a>
      </li>
      <li className="w-full">
        <a className="w-full justify-center">Register</a>
      </li>
    </ul>
  );
}
