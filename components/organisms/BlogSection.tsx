'use client';

import { usePathname } from 'next/navigation';
import ButtonSection from '../atoms/ButtonSection';
import TextHeadingSection from '../atoms/TextHeadingSection';
import BlogItemList from '../molecules/BlogItemList';
import Container from '../templates/Container';

export default function BlogSection({
  blogHeading,
  headlineNewestBlogs,
}: {
  blogHeading: string;
  headlineNewestBlogs: any;
}) {
  const pathname = usePathname();

  return (
    <section
      id="blog"
      className={`
        bg-white
        dark:bg-gray-900
        dark:border-t
        dark:border-gray-700
        dark:bg
        px-5
        py-12
        ${
          pathname === '/blogs' || pathname.includes('/blogs/authors')
            ? 'pt-24'
            : 'pt-12'
        }
        text-gray-700
        dark:text-white
        flex
        flex-col
        gap-10
        items-center`}
    >
      <Container>
        <TextHeadingSection heading={blogHeading} />
        {headlineNewestBlogs === null || headlineNewestBlogs?.length === 0 ? (
          <p>
            {pathname === '/blogs'
              ? 'Belum ada blog nih!'
              : 'Belum ada blog lain nih!'}
          </p>
        ) : (
          <>
            <BlogItemList headlineNewestBlogs={headlineNewestBlogs} />
            {pathname === '/blogs' ? (
              <div className="join">
                <button
                  className="
                    join-item
                    btn
                    bg-white
                    hover:bg-[#E7EDF2]
                    border-gray-300
                    text-gray-700
                    hover:border-gray-300
                    dark:bg-gray-800
                    dark:text-white
                    dark:border-gray-700
                    dark:hover:bg-gray-700"
                >
                  1
                </button>
                <button
                  className="
                    join-item
                    btn
                    bg-white
                    hover:bg-[#E7EDF2]
                    border-gray-300
                    text-gray-700
                    hover:border-gray-300
                    dark:bg-gray-800
                    dark:text-white
                    dark:border-gray-700
                    dark:hover:bg-gray-700"
                >
                  2
                </button>
                <button
                  className="
                    join-item
                    btn
                    bg-white
                    hover:bg-[#E7EDF2]
                    border-gray-300
                    text-gray-700
                    hover:border-gray-300
                    dark:bg-gray-800
                    dark:text-white
                    dark:border-gray-700
                    dark:hover:bg-gray-700"
                >
                  ...
                </button>
                <button
                  className="
                    join-item
                    btn
                    bg-white
                    hover:bg-[#E7EDF2]
                    border-gray-300
                    text-gray-700
                    hover:border-gray-300
                    dark:bg-gray-800
                    dark:text-white
                    dark:border-gray-700
                    dark:hover:bg-gray-700"
                >
                  99
                </button>
                <button
                  className="
                    join-item
                    btn
                    bg-white
                    hover:bg-[#E7EDF2]
                    border-gray-300
                    text-gray-700
                    hover:border-gray-300
                    dark:bg-gray-800
                    dark:text-white
                    dark:border-gray-700
                    dark:hover:bg-gray-700"
                >
                  100
                </button>
              </div>
            ) : (
              <ButtonSection label="Lihat lebih banyak" destination="/blogs" />
            )}
          </>
        )}
      </Container>
    </section>
  );
}
