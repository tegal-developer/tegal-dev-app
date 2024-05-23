import FAQ from '../molecules/FAQ';

export default function FAQSection({ faqs }: { faqs: any }) {
  return (
    <section
      id="faq"
      className="
        bg-white
        dark:bg-gray-900
        px-5
        py-12
        border-t
        border-gray-300
        dark:border-gray-700"
    >
      <div className="lg:container lg:mx-auto">
        <FAQ faqs={faqs} />
      </div>
    </section>
  );
}
