import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';

export default function SocialIconList() {
  return (
    <div className="flex gap-5">
      <FaInstagram size={35} />
      <FaLinkedinIn size={35} />
    </div>
  );
}
