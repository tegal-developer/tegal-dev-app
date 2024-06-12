import { usePathname } from 'next/navigation';
import BlogItem from './BlogItem';

export default function BlogItemList({
  headlineNewestBlogs,
}: {
  headlineNewestBlogs: any;
}) {
  const pathname = usePathname();

  return (
    <div
      className={`flex gap-10 w-full py-5 ${
        pathname === '/blogs'
          ? 'flex-wrap justify-center'
          : 'overflow-x-scroll md:overflow-hidden md:justify-center'
      }`}
    >
      {headlineNewestBlogs?.map((headlineBlog: any) => (
        <BlogItem
          key={headlineBlog?.id}
          blogSlug={headlineBlog?.attributes?.slug}
          blogImageSource={
            headlineBlog?.attributes?.image?.data?.attributes?.url
          }
          blogTitle={headlineBlog?.attributes?.title}
          blogPublishedDate={headlineBlog?.attributes?.publishedAt}
          blogCreator={headlineBlog?.attributes?.author}
          blogBody={headlineBlog?.attributes?.body}
        />
      ))}
    </div>
  );
}
