import parse from 'html-react-parser';

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
      bg-white
      dark:bg-gray-900
      border-t
      border-gray-300
      dark:border-gray-700
      px-5
      py-12
      text-gray-700
      dark:text-white"
    >
      <div
        className="lg:container lg:mx-auto 
      flex
      flex-col
      gap-10
      items-center"
      >
        <div className="text-2xl md:text-4xl lg:text-4xl font-bold">
          {aboutHeading !== undefined ? parse(aboutHeading) : ''}
        </div>
        <div className="flex flex-col items-center gap-10 w-full">
          <div className="max-w-[720px] text-center tracking-widest leading-relaxed text-sm">
            {aboutBody !== undefined ? parse(aboutBody) : ''}
          </div>
        </div>
      </div>
    </section>
  );
}
