import FAQ from '../molecules/FAQ';

export default function FAQSection({
  faqHeading,
  faqs,
}: {
  faqHeading: string;
  faqs: any;
}) {
  return (
    <section
      id="faq"
      className="
      bg-[#FAFBFD]
        dark:bg-gray-900
        px-5
        py-12
        border-t
        border-gray-300
        dark:border-gray-700"
    >
      <div className="lg:container lg:mx-auto">
        <FAQ faqHeading={faqHeading} faqs={faqs} />
      </div>
    </section>
  );
}
