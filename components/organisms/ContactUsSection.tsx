import ServiceHeading from '../molecules/ServiceHeading';

export default function ContactUsSection() {
  return (
    <section
      id="contact-us"
      className="
        bg-[#FAFBFD]
        dark:bg-gray-900
        border-t
        border-gray-300
        dark:border-gray-700
        px-5
        py-6
        md:py-12
        text-gray-700
        dark:text-white
        text-center"
    >
      <div className="flex flex-col gap-10 tracking-wider">
        <ServiceHeading />
      </div>
    </section>
  );
}
