import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function SocialIconList() {
  return (
    <div className="flex gap-3">
      <Link href="https://instagram.com/tegal.dev" target="_blank">
        <FaInstagram
          size={20}
          className="cursor-pointer hover:text-black dark:hover:text-white"
        />
      </Link>
      <Link href="https://linkedin.com/company/tegal-dev" target="_blank">
        <FaLinkedinIn
          size={20}
          className="cursor-pointer hover:text-black dark:hover:text-white"
        />
      </Link>
      <Link href="https://github.com/tegal-developer" target="_blank">
        <FaGithub
          size={20}
          className="cursor-pointer hover:text-black dark:hover:text-white"
        />
      </Link>
    </div>
  );
}
