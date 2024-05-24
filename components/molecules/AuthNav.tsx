'use client';

import toast from 'react-hot-toast';
import Button from '../atoms/Button';

export default function AuthNav() {
  const handleButtoClick = () => toast('Fitur ini akan segera diluncurkan!');

  return (
    <ul className="font-semibold flex gap-3 items-center">
      <li>
        <button
          type="button"
          className={`
            bg-[#E7EDF2]
            text-gray-700
            active:scale-95
            duration-150
            py-1
            px-3
            text-xs
            font-semibold
            rounded-lg`}
          onClick={handleButtoClick}
        >
          Sign In
        </button>
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
