import { IoIosClose } from 'react-icons/io';

export default function Headline({ text }: { text: string }) {
  return (
    <div className="bg-[#1B71D8] p-5 flex justify-center text-white">
      <h1 className="text-xl font-bold tracking-wider z-10">{text}</h1>
      <div className="absolute w-full flex justify-end px-5">
        <IoIosClose size={25} className="cursor-pointer" />
      </div>
    </div>
  );
}
