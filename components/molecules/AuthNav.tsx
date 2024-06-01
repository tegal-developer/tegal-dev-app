'use client';

import toast from 'react-hot-toast';
import ButtonSignUp from '../atoms/ButtonSignUp';
import ButtonSignIn from '../atoms/ButtonSignIn';

export default function AuthNav() {
  const handleButtonClick = () => toast('Fitur ini akan segera diluncurkan!');

  return (
    <ul className="font-semibold flex gap-3 items-center">
      <li>
        <ButtonSignIn action={handleButtonClick} />
      </li>
      <li>
        <ButtonSignUp
          label="Sign Up"
          backgroundColor="#1B71D8"
          textColor="white"
          action={handleButtonClick}
        />
      </li>
    </ul>
  );
}
