'use client';

import { useTheme } from 'next-themes';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? (
        <MdDarkMode size={35} className="cursor-pointer" />
      ) : (
        <MdOutlineDarkMode size={35} className="cursor-pointer" />
      )}
    </button>
  );
}
