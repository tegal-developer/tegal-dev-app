export default function TextHeroHeading({ text }: { text: string }) {
  return (
    <h1
      className="
        max-w-4xl
        mb-4
        text-3xl
        font-extrabold
        md:text-4xl
        xl:text-5xl
        text-black
        dark:text-white
        leading-relaxed
        flex
        flex-col
        md:block"
    >
      {text} <span className="text-[#1B71D8]">Tegal Dev</span>
    </h1>
  );
}
