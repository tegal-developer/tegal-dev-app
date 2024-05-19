'use client';

import { useTheme } from 'next-themes';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import parse from 'html-react-parser';
import { useState } from 'react';

export default function QuestionItem({
  questionText,
  answerText,
}: {
  questionText: string;
  answerText: string;
}) {
  const { resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="flex flex-col gap-2 group cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between cursor-pointer">
        <h2
          className={`lg:text-2xl group-hover:font-semibold duration-150 ${
            isOpen ? 'font-semibold' : ''
          }`}
        >
          {questionText}
        </h2>
        <div>
          {isOpen ? <IoIosArrowUp size={25} /> : <IoIosArrowDown size={25} />}
        </div>
      </div>
      <hr
        className={`${
          resolvedTheme === 'dark' ? 'group-hover:border-[#1B71D8]' : ''
        }`}
      />
      <div
        className={`${
          isOpen ? 'block' : 'hidden'
        } duration-150 text-sm tracking-widest leading-relaxed`}
      >
        {parse(answerText)}
      </div>
    </div>
  );
}
