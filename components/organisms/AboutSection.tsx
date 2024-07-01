import TextHeadingSection from '../atoms/TextHeadingSection';
import TextBodySection from '../atoms/TextBodySection';
import Container from '../templates/Container';

export default function AboutSection({
  aboutHeading,
  aboutBody,
}: {
  aboutHeading: string;
  aboutBody: string;
}) {
  return (
    <section
      id="about"
      className="
        bg-[#FAFBFD]
        dark:bg-gray-900
        dark:border-t
        dark:border-gray-700
        px-5
        py-12
        text-gray-700
        dark:text-white"
    >
      <Container>
        <TextHeadingSection heading={aboutHeading} />
        <TextBodySection body={aboutBody} />
      </Container>
    </section>
  );
}
