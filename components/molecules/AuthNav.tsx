'use client';

import toast from 'react-hot-toast';
import Button from '../atoms/Button';
import TextLink from '../atoms/TextLink';

export default function AuthNav() {
  const handleButtoClick = () => toast('Fitur ini akan segera diluncurkan!');

  return (
    <ul className="font-semibold flex gap-3 items-center">
      <li>
        <Button
          label="Sign In"
          backgroundColor="#E7EDF2"
          hoverBackgroundColor="#1865c2"
          textColor="gray-700"
          action={handleButtoClick}
        />
      </li>
      <li>
        <Button
          label="Sign Up"
          backgroundColor="#1B71D8"
          hoverBackgroundColor="#1865c2"
          textColor="white"
          action={handleButtoClick}
        />
      </li>
    </ul>
  );
}
