import QuestionItemList from './QuestionItemList';

export default function FAQ({ faqs }: { faqs: any }) {
  return (
    <div className="flex flex-col gap-6 tracking-wider text-gray-700 dark:text-white">
      <h1 className="text-lg md:text-2xl font-semibold">
        Pertanyaan yang Sering Diajukan
      </h1>
      <QuestionItemList faqs={faqs} />
    </div>
  );
}
