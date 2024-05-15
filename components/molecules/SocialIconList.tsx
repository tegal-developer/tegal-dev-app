import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function SocialIconList() {
  return (
    <div className="flex gap-5">
      <Link href="https://instagram.com/tegal.dev" target="_blank">
        <FaInstagram size={25} className="cursor-pointer" />
      </Link>
      <Link href="https://linkedin.com/company/tegal-dev" target="_blank">
        <FaLinkedinIn size={25} className="cursor-pointer" />
      </Link>
      <Link href="https://github.com/tegal-developer" target="_blank">
        <FaGithub size={25} className="cursor-pointer" />
      </Link>
    </div>
  );
}
