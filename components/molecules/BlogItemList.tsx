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
          blogSlug={headlineBlog?.slug}
          blogImageSource={headlineBlog?.image?.url}
          blogTitle={headlineBlog?.title}
          blogPublishedDate={headlineBlog?.publishedAt}
          blogCreator={headlineBlog?.author}
          blogBody={headlineBlog?.body}
        />
      ))}
    </div>
  );
}
