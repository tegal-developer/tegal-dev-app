import TextHeadingSection from '@/components/atoms/TextHeadingSection';
import Container from '@/components/templates/Container';
import Template from '@/components/templates/Template';

export default function Merchandises() {
  return (
    <Template>
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
          <TextHeadingSection heading="Merchandises Tegal Dev" />
        </Container>
      </section>
    </Template>
  );
}
