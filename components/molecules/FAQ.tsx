import QuestionItemList from './QuestionItemList';

export default function FAQ() {
  return (
    <div className="flex flex-col gap-5 tracking-wider">
      <h1 className="text-3xl font-semibold">Frequently Asked Questions</h1>
      <hr />
      <QuestionItemList />
    </div>
  );
}
