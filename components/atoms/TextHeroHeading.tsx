export default function TextHeroHeading({ text }: { text: string }) {
  return (
    <h1
      className="
        max-w-3xl
        mb-4
        text-4xl
        font-extrabold
        leading-none
        md:text-5xl
        xl:text-6xl
        dark:text-white"
    >
      {text}
    </h1>
  );
}
