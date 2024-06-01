'use client';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import parse from 'html-react-parser';

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
      className="collapse cursor-pointer bg-gray-100 dark:bg-gray-800"
      onClick={() => {
        if (selected === questionId) setIsSelected(0);
        else setIsSelected(questionId);
      }}
    >
      <input type="checkbox" checked={selected === questionId} />
      <div className="collapse-title flex justify-between items-center p-4">
        <h2 className="leading-relaxed">{questionText}</h2>
        <div>
          {selected === questionId ? (
            <IoIosArrowUp size={25} />
          ) : (
            <IoIosArrowDown size={25} />
          )}
        </div>
      </div>
      <div className="collapse-content text-sm tracking-wider leading-relaxed">
        {parse(answerText)}
      </div>
    </div>
  );
}
