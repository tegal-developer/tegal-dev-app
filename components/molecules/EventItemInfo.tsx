import TextBodyInfoItem from '../atoms/TextBodyInfoItem';
import TextBodyItem from '../atoms/TextBodyItem';
import TextHeadingItem from '../atoms/TextHeadingItem';

export default function EventItemInfo() {
  return (
    <div className="flex flex-col gap-3">
      <TextHeadingItem />
      <TextBodyInfoItem text="Dipublikasikan pada Sabtu, 25 Mei 2024" />
      <TextBodyInfoItem text="Trasa Coworking Space" />
      <TextBodyItem
        text="Tegal Dev merupakan sebuah komunitas developer teknologi informasi yang
      dibentuk sejak tahun 2024 dan merupakan wadah untuk belajar dan kolaborasi
      di Tegal"
      />
    </div>
  );
}
