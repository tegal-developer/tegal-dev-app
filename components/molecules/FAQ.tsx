import parse from 'html-react-parser';
import QuestionItemList from './QuestionItemList';

export default function FAQ({
  faqHeading,
  faqs,
}: {
  faqHeading: string;
  faqs: any;
}) {
  return (
    <div className="flex flex-col gap-6 tracking-wider text-gray-700 dark:text-white">
      <div className="text-lg md:text-2xl font-semibold">
        {faqHeading !== undefined ? parse(faqHeading) : ''}
      </div>
      <QuestionItemList faqs={faqs} />
    </div>
  );
}
