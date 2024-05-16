export default function ServiceItem({ text }: { text: string }) {
  return (
    <div
      className="
        p-10
        bg-white
        cursor-pointer
        group
        dark:bg-[#202124]
        border
        border-black
        dark:border-white
        text-black
        dark:text-white
        w-full
        rounded-xl"
    >
      <p className="text-sm leading-relaxed group-hover:font-semibold duration-150">
        {text}
      </p>
    </div>
  );
}
