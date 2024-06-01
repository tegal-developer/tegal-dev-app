'use client';

import TextHeadingSection from '../atoms/TextHeadingSection';
import Container from '../templates/Container';
import BlogItemList from '../molecules/BlogItemList';
import ButtonSection from '../atoms/ButtonSection';
import toast from 'react-hot-toast';

export default function BlogSection({ blogHeading }: { blogHeading: string }) {
  const handleButtoClick = () => toast('Fitur ini akan segera diluncurkan!');

  return (
    <section
      id="blog"
      className="
        bg-[#FAFBFD]
        dark:bg-gray-900
        border-t
        border-gray-300
        dark:border-gray-700
        dark:bg
        px-5
        py-12
        text-gray-700
        dark:text-white
        flex
        flex-col
        gap-10
        items-center"
    >
      <Container>
        <TextHeadingSection heading={blogHeading} />
        <p>Belum ada blog nih!</p>
        {/* <BlogItemList />
        <ButtonSection label="Muat lebih banyak" action={handleButtoClick} /> */}
      </Container>
    </section>
  );
}
