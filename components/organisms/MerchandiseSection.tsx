'use client';

import TextHeadingSection from '../atoms/TextHeadingSection';
import MerchandiseItemList from '../molecules/MerchandiseItemList';
import Container from '../templates/Container';

export default function MerchandiseSection({
  merchandiseHeading,
  merchandises,
}: {
  merchandiseHeading: string;
  merchandises: any;
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
        {merchandises === null || merchandises?.length === 0 ? (
          <p>Belum ada blog nih!</p>
        ) : (
          <MerchandiseItemList merchandises={merchandises} />
        )}
      </Container>
    </section>
  );
}
