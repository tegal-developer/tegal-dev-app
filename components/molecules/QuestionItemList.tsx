import QuestionItem from './QuestionItem';

export default function QuestionItemList({ faqs }: { faqs: any }) {
  return (
    <div className="flex flex-col gap-5">
      {faqs?.map((faq: any) => (
        <QuestionItem
          key={faq?.id}
          questionText={faq?.attributes?.question}
          answerText={faq?.attributes?.answer}
        />
      ))}
    </div>
  );
}
