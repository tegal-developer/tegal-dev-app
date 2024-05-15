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
      <li onClick={() => handleButtoClick()}>
        <TextLink href="#" text="About" />
      </li>
      <li onClick={() => handleButtoClick()}>
        <TextLink href="#" text="Contact Us" />
      </li>
      <li onClick={() => handleButtoClick()}>
        <TextLink href="#" text="FAQ" />
      </li>
    </ul>
  );
}
