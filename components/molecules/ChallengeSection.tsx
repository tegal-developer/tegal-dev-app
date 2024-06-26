'use client';

import { usePathname } from 'next/navigation';
import Container from '../templates/Container';
import TextHeadingSection from '../atoms/TextHeadingSection';

export default function ChallengeSection({
  challengeHeading,
}: {
  challengeHeading: string;
}) {
  const pathname = usePathname();

  return (
    <section
      id="challenge"
      className={`
        bg-white
        dark:bg-gray-900
        border-gray-300
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
      </Container>
    </section>
  );
}
