'use client';

import Container from '../templates/Container';
import TextHeadingSection from '../atoms/TextHeadingSection';
import EventItemList from '../molecules/EventItemList';
import ButtonSection from '../atoms/ButtonSection';
import toast from 'react-hot-toast';

export default function EventSection({
  eventHeading,
  headlineNewestEvents,
}: {
  eventHeading: string;
  headlineNewestEvents: any;
}) {
  const handleButtoClick = () => toast('Fitur ini akan segera diluncurkan!');

  return (
    <section
      id="event"
      className="
        bg-white
        dark:bg-gray-900
        border-t
        border-gray-300
        dark:border-gray-700
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
        <TextHeadingSection heading={eventHeading} />
        {headlineNewestEvents === null || headlineNewestEvents?.length === 0 ? (
          <p>Belum ada event nih!</p>
        ) : (
          <>
            <EventItemList headlineNewestEvents={headlineNewestEvents} />
            <ButtonSection
              label="Lihat lebih banyak"
              action={handleButtoClick}
            />
          </>
        )}
      </Container>
    </section>
  );
}
