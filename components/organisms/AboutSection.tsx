export default function AboutSection({
  aboutContent,
}: {
  aboutContent: string;
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
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold">
          Tentang <span className="text-[#1B71D8]">Tegal Dev</span>
        </h1>
        <div className="flex flex-col items-center gap-10 w-full">
          <h3 className="max-w-[720px] text-center tracking-widest leading-relaxed text-sm">
            {aboutContent}
          </h3>
        </div>
      </div>
    </section>
  );
}
