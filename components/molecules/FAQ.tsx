import QuestionItemList from './QuestionItemList';

export default function FAQ({ faqs }: { faqs: any }) {
  return (
    <div className="flex flex-col gap-5 tracking-wider text-white">
      <h1 className="text-lg md:text-2xl lg:text-3xl font-semibold">
        Frequently Asked Questions
      </h1>
      <hr />
      <QuestionItemList faqs={faqs} />
    </div>
  );
}
