import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function SocialIconList() {
  return (
    <div className="flex gap-5">
      <FaInstagram size={35} className="cursor-pointer" />
      <FaLinkedinIn size={35} className="cursor-pointer" />
      <FaGithub size={35} className="cursor-pointer" />
    </div>
  );
}
