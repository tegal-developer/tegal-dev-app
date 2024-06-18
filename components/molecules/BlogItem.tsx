import Image from 'next/image';
import BlogItemInfo from './BlogItemInfo';
import Link from 'next/link';
import moment from 'moment';

export default function BlogItem({
  blogSlug,
  blogImageSource,
  blogTitle,
  blogPublishedDate,
  blogCreator,
  blogBody,
}: {
  blogSlug: string;
  blogImageSource: string;
  blogTitle: string;
  blogPublishedDate: string;
  blogCreator: string;
  blogBody: string;
}) {
  return (
    <div className="indicator active:scale-95 duration-300">
      {moment(new Date().getTime()).diff(blogPublishedDate, 'days') < 7 ? (
        <span className="indicator-item badge badge-primary bg-[#1B71D8] text-white mr-3">
          new
        </span>
      ) : (
        ''
      )}
      <Link
        href={`/blogs/${blogSlug}`}
        className="
          bg-white
          dark:bg-gray-900
          w-full
          min-w-[300px]
          max-w-[360px]
          2xl:max-w-[560px]
          flex flex-col
          2xl:flex-row
          gap-5
          p-3
          rounded-xl
          cursor-pointer
          duration-300
          hover:bg-gray-100
          dark:hover:bg-gray-700
          dark:border
          dark:border-gray-700"
      >
        <Image
          className="rounded-lg object-cover w-full 2xl:w-[140px]"
          src={blogImageSource}
          alt="Blog image"
          width={140}
          height={140}
        />
        <div className="flex flex-col gap-5">
          <BlogItemInfo
            blogTitle={blogTitle}
            blogPublishedDate={blogPublishedDate}
            blogCreator={blogCreator}
            blogBody={blogBody}
          />
        </div>
      </Link>
    </div>
  );
}
