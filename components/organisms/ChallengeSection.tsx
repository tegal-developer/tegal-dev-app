'use client';

import { usePathname } from 'next/navigation';
import Container from '../templates/Container';
import TextHeadingSection from '../atoms/TextHeadingSection';
import { Suspense } from 'react';
import ButtonSection from '../atoms/ButtonSection';
import ChallengeItemList from '../molecules/ChallengeItemList';

export default function ChallengeSection({
  challengeHeading,
  headlineNewestChallenges,
}: {
  challengeHeading: string;
  headlineNewestChallenges: any;
}) {
  const pathname = usePathname();

  return (
    <section
      id="challenge"
      className={`
        bg-[#FAFBFD]
        dark:bg-gray-900
        dark:border-t
        dark:border-gray-700
        px-5
        py-12
        ${pathname === '/challenges' ? 'pt-24' : 'pt-12'}
        text-gray-700
        dark:text-white
        flex
        flex-col
        gap-10
        items-center`}
    >
      <Container>
        <TextHeadingSection heading={challengeHeading} />
        {headlineNewestChallenges === null ||
        headlineNewestChallenges?.length === 0 ? (
          <p>
            {pathname === '/challenges'
              ? 'Belum ada challenge nih!'
              : 'Belum ada challenge lain nih!'}
          </p>
        ) : (
          <>
            <Suspense>
              <ChallengeItemList challenges={headlineNewestChallenges} />
            </Suspense>
            {pathname === '/challenges' ? (
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
              <ButtonSection
                label="Lihat lebih banyak"
                destination="/challenges"
              />
            )}
          </>
        )}
      </Container>
    </section>
  );
}
