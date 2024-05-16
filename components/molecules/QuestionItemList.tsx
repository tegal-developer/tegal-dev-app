import QuestionItem from './QuestionItem';

export default function QuestionItemList() {
  return (
    <div className="flex flex-col gap-5">
      <QuestionItem questionText="Apa itu Tegal Dev?" />
      <QuestionItem questionText="Bagaimana cara bergabung menjadi anggota Tegal Dev?" />
      <QuestionItem questionText="Bagaimana cara ikut serta dalam Hackalearn?" />
      <QuestionItem
        questionText="Bagaimana cara mengikuti pelatihan IT yang diselenggarakan
        Tegal Dev?"
      />
      <QuestionItem questionText="Bagaimana cara berkolaborasi dengan Tegal Dev?" />
    </div>
  );
}
