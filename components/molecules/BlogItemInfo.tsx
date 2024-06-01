import TextBodyItem from '../atoms/TextBodyItem';
import TextBodyInfoItem from '../atoms/TextBodyInfoItem';
import TextHeadingItem from '../atoms/TextHeadingItem';
import TextPublisherBlogThumbnail from '../atoms/TextPublisherBlogThumbnail';

export default function BlogItemInfo() {
  return (
    <div className="flex flex-col gap-3">
      <TextHeadingItem />
      <TextBodyInfoItem text="Dipublikasikan pada Sabtu, 24 Mei 2024" />
      <TextPublisherBlogThumbnail />
      <TextBodyItem
        text="Tegal Dev merupakan sebuah komunitas developer teknologi informasi yang
      dibentuk sejak tahun 2024 dan merupakan wadah untuk belajar dan kolaborasi
      di Tegal"
      />
    </div>
  );
}
