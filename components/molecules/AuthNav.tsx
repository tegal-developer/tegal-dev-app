'use client';

import toast from 'react-hot-toast';
import Button from '../atoms/Button';
import TextLink from '../atoms/TextLink';

export default function AuthNav() {
  const handleButtoClick = () => toast('Coming soon!');

  return (
    <ul className="font-semibold flex gap-5 items-center">
      <li onClick={() => handleButtoClick()}>
        <TextLink href="#" text="Sign In" />
      </li>
      <li>
        <Button
          label="Register"
          backgroundColor="#1B71D8"
          hoverBackgroundColor="#1865c2"
          textColor="white"
          action={() => handleButtoClick()}
        />
      </li>
    </ul>
  );
}
