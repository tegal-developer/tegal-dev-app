'use client';

import { useState } from 'react';
import QuestionItem from './QuestionItem';

export default function QuestionItemList({ faqs }: { faqs: any }) {
  const [selected, setIsSelected] = useState(0);

  return (
    <div className="flex flex-col gap-1 sm:gap-2">
      {faqs?.map((faq: any) => (
        <QuestionItem
          key={faq?.id}
          questionId={faq?.id}
          questionText={faq?.attributes?.question}
          answerText={faq?.attributes?.answer}
          selected={selected}
          setIsSelected={setIsSelected}
        />
      ))}
    </div>
  );
}
