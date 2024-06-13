import Link from 'next/link';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function SocialIconList({
  instagramURL,
  linkedinURL,
  githubURL,
}: {
  instagramURL: string;
  linkedinURL: string;
  githubURL: string;
}) {
  return (
    <div className="flex gap-3">
      <Link href={instagramURL} target="_blank">
        <FaInstagram size={20} className="cursor-pointer hover:text-gray-300" />
      </Link>
      <Link href={linkedinURL} target="_blank">
        <FaLinkedinIn
          size={20}
          className="cursor-pointer hover:text-gray-300"
        />
      </Link>
      <Link href={githubURL} target="_blank">
        <FaGithub size={20} className="cursor-pointer hover:text-gray-300" />
      </Link>
    </div>
  );
}
