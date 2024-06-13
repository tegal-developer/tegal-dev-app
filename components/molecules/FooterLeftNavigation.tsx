import Link from 'next/link';
import toast from 'react-hot-toast';

export default function FooterLeftNavigation() {
  const handleButtonClick = () => toast('Fitur ini akan segera diluncurkan!');

  return (
    <div className="px-5 flex flex-col md:flex-row items-center gap-2 md:gap-5">
      <Link
        href="#"
        onClick={handleButtonClick}
        className="hover:text-gray-300"
      >
        Syarat dan Ketentuan
      </Link>
      <Link
        href="https://wa.me/6283173227143"
        target="_blank"
        className="hover:text-gray-300"
      >
        Bantuan
      </Link>
    </div>
  );
}
