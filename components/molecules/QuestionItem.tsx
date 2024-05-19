'use client';

import { useTheme } from 'next-themes';
import { IoIosArrowDown } from 'react-icons/io';

export default function QuestionItem({
  questionText,
}: {
  questionText: string;
}) {
  const { resolvedTheme } = useTheme();
  return (
    <div className="flex flex-col gap-2 group cursor-pointer">
      <div className="flex items-center justify-between cursor-pointer">
        <h2 className="md:text-2xl group-hover:font-semibold duration-150">
          {questionText}
        </h2>
        <div>
          <IoIosArrowDown size={25} />
        </div>
      </div>
      <hr
        className={`${
          resolvedTheme === 'dark' ? 'group-hover:border-[#1B71D8]' : ''
        }`}
      />
    </div>
  );
}
