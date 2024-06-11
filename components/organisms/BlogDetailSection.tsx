import TextHeadingSection from '../atoms/TextHeadingSection';

export default function BlogDetailSection({
  blogDetailHeading,
}: {
  blogDetailHeading: string;
}) {
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
        pt-24
        text-gray-700
        dark:text-white
        flex
        flex-col
        gap-10
        items-center"
    >
      <TextHeadingSection heading={blogDetailHeading} />
    </section>
  );
}
