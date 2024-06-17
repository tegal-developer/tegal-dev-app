'use client';

import TextHeadingSection from '../atoms/TextHeadingSection';
import Container from '../templates/Container';

export default function MerchandiseSection({
  merchandiseHeading,
}: {
  merchandiseHeading: string;
}) {
  return (
    <section
      className="
        bg-white
        dark:bg-gray-900
        border-gray-300
        dark:border-gray-700
        px-5
        py-24
        text-gray-700
        dark:text-white
        flex
        flex-col
        gap-10
        items-center"
    >
      <Container>
        <TextHeadingSection heading={merchandiseHeading} />
      </Container>
    </section>
  );
}
