'use client';

import toast from 'react-hot-toast';
import TextLink from '../atoms/TextLink';

export default function Navigation() {
  const handleButtoClick = () => toast('Coming soon!');

  return (
    <ul className="font-semibold flex gap-5">
      <li onClick={() => handleButtoClick()}>
        <TextLink href="#" text="Community" />
      </li>
      <li onClick={() => handleButtoClick()}>
        <TextLink href="#" text="Events" />
      </li>
      <li onClick={() => handleButtoClick()}>
        <TextLink href="#" text="Blogs" />
      </li>
      <li>
        <TextLink href="/#about" text="About" />
      </li>
      <li>
        <TextLink href="/#contact-us" text="Contact Us" />
      </li>
      <li>
        <TextLink href="/#faq" text="FAQ" />
      </li>
    </ul>
  );
}
