import { IoIosClose } from 'react-icons/io';
import parser from 'html-react-parser';

export default function Headline({ text }: { text: string }) {
  return (
    <div className="bg-[#1B71D8] p-5 flex justify-center text-white border-b-2">
      <div className="tracking-wider z-10">{parser(text)}</div>
      <div className="absolute w-full flex justify-end px-5">
        <IoIosClose size={25} className="cursor-pointer" />
      </div>
    </div>
  );
}
