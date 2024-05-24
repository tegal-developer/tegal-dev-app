'use client';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import parse from 'html-react-parser';
import { useState } from 'react';

export default function QuestionItem({
  questionId,
  questionText,
  answerText,
  selected,
  setIsSelected,
}: {
  questionId: number;
  questionText: string;
  answerText: string;
  selected: number;
  setIsSelected: any;
}) {
  return (
    <div
      className="flex flex-col gap-2 group cursor-pointer"
      onClick={() => {
        if (selected === questionId) setIsSelected(0);
        else setIsSelected(questionId);
      }}
    >
      <div
        className="
          flex
          items-center
          justify-between
          cursor-pointer
          bg-[#FAFBFD]
          border-black
          dark:bg-gray-800
          p-3
          rounded-lg"
      >
        <h2>{questionText}</h2>
        <div>
          {selected === questionId ? (
            <IoIosArrowUp size={25} />
          ) : (
            <IoIosArrowDown size={25} />
          )}
        </div>
      </div>
      <div
        className={`${selected === questionId ? 'block' : 'hidden'} duration-150
        text-sm
        tracking-wide
        leading-relaxed
        mb-1
        bg-[#FAFBFD]/50
        border-black
        dark:bg-gray-800/30
        p-3
        rounded-lg`}
      >
        {parse(answerText)}
      </div>
    </div>
  );
}
