'use client';

import Container from '../templates/Container';
import TextHeadingSection from '../atoms/TextHeadingSection';
import EventItemList from '../molecules/EventItemList';
import ButtonSection from '../atoms/ButtonSection';
import { Suspense } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function EventSection({
  eventHeading,
  headlineNewestEvents,
}: {
  eventHeading: string;
  headlineNewestEvents: any;
}) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section
      id="event"
      className={`
        bg-white
        dark:bg-gray-900
        border-gray-300
        dark:border-gray-700
        px-5
        py-12
        ${pathname === '/events' ? 'pt-32' : ''}
        text-gray-700
        dark:text-white
        flex
        flex-col
        gap-10
        items-center`}
    >
      <Container>
        <TextHeadingSection heading={eventHeading} />
        {headlineNewestEvents === null || headlineNewestEvents?.length === 0 ? (
          <p>Belum ada event nih!</p>
        ) : (
          <>
            <Suspense>
              <EventItemList headlineNewestEvents={headlineNewestEvents} />
            </Suspense>
            {pathname === '/events' ? (
              ''
            ) : (
              <ButtonSection
                label="Lihat lebih banyak"
                action={() => router.push('/events')}
              />
            )}
          </>
        )}
      </Container>
    </section>
  );
}
