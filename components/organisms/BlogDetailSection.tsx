import Image from 'next/image';
import TextHeadingSection from '../atoms/TextHeadingSection';
import parse from 'html-react-parser';
import { dateFormatter } from '@/utils';
import Link from 'next/link';

export default function BlogDetailSection({ blogDetail }: { blogDetail: any }) {
  return (
    <section
      id="event"
      className="
        bg-white
        dark:bg-gray-900
        dark:border-t
        dark:border-gray-700
        px-5
        py-12
        pt-24
        text-gray-700
        dark:text-white
        flex
        flex-col
        gap-10
        items-center"
    >
      <div className="flex flex-col gap-10 max-w-[1024px]">
        <div className="flex flex-col md:flex-row gap-10">
          <Image
            src={blogDetail?.image?.url}
            alt="Blog image"
            width={280}
            height={280}
            className="w-full md:max-w-[280px] rounded-lg"
          />
          <div className="flex flex-col gap-5 tracking-wider">
            <TextHeadingSection heading={blogDetail?.title} />
            <div className="flex flex-col gap-2">
              <p>
                Dipublikasikan pada {dateFormatter(blogDetail?.publishedAt)}
              </p>
              <p>
                Oleh{' '}
                <Link href={`/blogs/authors/${blogDetail?.user?.username}`}>
                  {blogDetail?.user?.name}
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="space-y-5 tracking-wider">
          {parse(blogDetail?.body)}
        </div>
      </div>
    </section>
  );
}
