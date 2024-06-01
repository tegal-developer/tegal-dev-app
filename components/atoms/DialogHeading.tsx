import { AiOutlineCloseCircle } from 'react-icons/ai';

export default function DialogHeading() {
  return (
    <h3
      className="
        font-bold
        text-lg
        p-0
        border-b
        border-gray-200
        dark:border-gray-700
        pb-3
        tracking-wider
        leading-relaxed"
    >
      Pendaftaran Keanggotaan <span className="text-[#1B71D8]">Tegal Dev</span>
      <AiOutlineCloseCircle
        className="absolute right-5 top-5 cursor-pointer text-gray-400 dark:text-gray-700"
        onClick={() => document.getElementById('my_modal_2').close()!}
      />
    </h3>
  );
}
