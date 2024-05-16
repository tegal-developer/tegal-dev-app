import ServiceHeading from '../molecules/ServiceHeading';
import ServiceItemList from '../molecules/ServiceItemList';

export default function ContactUsSection() {
  return (
    <section
      id="contact-us"
      className="
        bg-[#E5E8E9]
        dark:bg-gray-900
        px-5
        py-28
        border-t-2
        text-black
        dark:text-white"
    >
      <div className="flex flex-col gap-10 tracking-wider max-w-[100vh]">
        <ServiceHeading />
        <ServiceItemList />
      </div>
    </section>
  );
}
