export default function ActivityItem({ text }: { text: string }) {
  return (
    <div
      className="
        p-10
        border
        rounded-xl
        text-2xl
        font-semibold
        shadow-md
        cursor-pointer
        bg-[#202124]
        text-white"
    >
      {text}
    </div>
  );
}
