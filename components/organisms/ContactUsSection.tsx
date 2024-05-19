import ServiceHeading from '../molecules/ServiceHeading';

export default function ContactUsSection({ services }: { services: any }) {
  return (
    <section
      id="contact-us"
      className="
        bg-[#E5E8E9]
        dark:bg-gray-900
        px-5
        py-12
        text-black
        dark:text-white
        text-center"
    >
      <div className="flex flex-col gap-10 tracking-wider">
        <ServiceHeading />
      </div>
    </section>
  );
}
