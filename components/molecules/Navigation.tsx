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
        <TextLink href="/challenges" text="Challenges" />
      </li>
      <li>
        <TextLink href="/blogs" text="Blogs" />
      </li>
      <li>
        <TextLink href="/merchandises" text="Merchandises" />
      </li>
    </ul>
  );
}
