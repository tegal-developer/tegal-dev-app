'use client';

import toast from 'react-hot-toast';
import TextLink from '../atoms/TextLink';

export default function Navigation() {
  const handleButtoClick = () => toast('Fitur ini akan segera diluncurkan!');

  return (
    <ul className="font-semibold lg:flex gap-5 hidden">
      <li onClick={handleButtoClick}>
        <TextLink href="#" text="Community" />
      </li>
      <li>
        <TextLink href="/events" text="Events" />
      </li>
      <li>
        <TextLink href="/#blog" text="Blog" />
      </li>
      <li>
        <TextLink href="/#about" text="About" />
      </li>
      <li>
        <TextLink href="/#activity" text="Activity" />
      </li>
      <li>
        <TextLink href="/#membership" text="Membership" />
      </li>
      <li>
        <TextLink href="/#merchandise" text="Merchandise" />
      </li>
      <li>
        <TextLink href="/#contact" text="Contact" />
      </li>
      <li>
        <TextLink href="/#faq" text="FAQ" />
      </li>
    </ul>
  );
}
