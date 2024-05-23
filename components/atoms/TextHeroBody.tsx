import parse from 'html-react-parser';

export default function TextHeroBody({ text }: { text: string }) {
  return (
    <div
      className="
        max-w-4xl
        md:text-center
        xl:text-start
        mb-6
        text-gray-700
        text-sm
        lg:mb-8
        md:text-md
        dark:text-white
        tracking-widest"
    >
      {text !== undefined ? parse(text) : ''}
    </div>
  );
}
