import parse from 'html-react-parser';

export default function ServiceItem({ content }: { content: any }) {
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
        rounded-3xl"
    >
      {parse(content)}
    </div>
  );
}
