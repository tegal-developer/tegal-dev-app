import TextBodyItem from '../atoms/TextBodyItem';
import TextBodyInfoItem from '../atoms/TextBodyInfoItem';
import TextHeadingItem from '../atoms/TextHeadingItem';
import TextPublisherBlogThumbnail from '../atoms/TextPublisherBlogThumbnail';
import { dateFormatter } from '@/utils';

export default function BlogItemInfo({
  blogTitle,
  blogPublishedDate,
  blogCreator,
  blogBody,
}: {
  blogTitle: string;
  blogPublishedDate: string;
  blogCreator: string;
  blogBody: string;
}) {
  return (
    <div className="flex flex-col gap-3">
      <TextHeadingItem text={blogTitle} />
      <div className="flex flex-col gap-2">
        <TextBodyInfoItem
          text={`Dipublikasikan pada ${dateFormatter(blogPublishedDate)}`}
        />
        <TextPublisherBlogThumbnail text={blogCreator} />
      </div>
      <TextBodyItem text={blogBody} />
    </div>
  );
}
