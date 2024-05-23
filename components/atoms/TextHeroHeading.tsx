import parse from 'html-react-parser';

export default function TextHeroHeading({ text }: { text: string }) {
  return (
    <h1
      className="
        mb-4
        text-[1.8rem]
        sm:text-[3rem]
        font-extrabold
        xl:text-4xl
        2xl:text-5xl
        text-gray-700
        dark:text-white
        flex
        flex-col
        xl:flex-row
        xl:gap-2
        md:items-center
        xl:items-start"
    >
      {text !== undefined ? parse(text) : ''}
    </h1>
  );
}
