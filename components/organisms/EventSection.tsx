'use client';

import Container from '../templates/Container';
import TextHeadingSection from '../atoms/TextHeadingSection';
import EventItemList from '../molecules/EventItemList';
import ButtonSection from '../atoms/ButtonSection';
import { Suspense } from 'react';
import { usePathname } from 'next/navigation';

export default function EventSection({
  eventHeading,
  headlineNewestEvents,
}: {
  eventHeading: string;
  headlineNewestEvents: any;
}) {
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
        ${pathname === '/events' ? 'pt-24' : 'pt-6'}
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
              <div className="join">
                <button className="join-item btn bg-white hover:bg-[#E7EDF2] border-gray-300 text-gray-700 hover:border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
                  1
                </button>
                <button className="join-item btn bg-white hover:bg-[#E7EDF2] border-gray-300 text-gray-700 hover:border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
                  2
                </button>
                <button className="join-item btn bg-white hover:bg-[#E7EDF2] border-gray-300 text-gray-700 hover:border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
                  ...
                </button>
                <button className="join-item btn bg-white hover:bg-[#E7EDF2] border-gray-300 text-gray-700 hover:border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
                  99
                </button>
                <button className="join-item btn bg-white hover:bg-[#E7EDF2] border-gray-300 text-gray-700 hover:border-gray-300 dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
                  100
                </button>
              </div>
            ) : (
              <ButtonSection label="Lihat lebih banyak" destination="/events" />
            )}
          </>
        )}
      </Container>
    </section>
  );
}
