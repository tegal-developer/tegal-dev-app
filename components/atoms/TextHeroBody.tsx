export default function TextHeroBody({ text }: { text: string }) {
  return (
    <p
      className="
        max-w-4xl
        mb-6
        font-light
        text-gray-500
        text-sm
        lg:mb-8
        md:text-lg
        lg:text-xl
        dark:text-gray-400
        tracking-wide"
    >
      {text}
    </p>
  );
}
