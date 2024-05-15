export default function ActivityItem({
  id,
  text,
  selectedActivity,
  setSelectedActivity,
}: {
  id: number;
  text: string;
  selectedActivity: number;
  setSelectedActivity: any;
}) {
  return (
    <div
      className={`
        text-center
        py-5
        w-[400px]
        border
        rounded-full
        text-xl
        tracking-wider
        shadow-md
        cursor-pointer
        ${
          selectedActivity === id
            ? 'bg-[#202124] -translate-y-1 scale-110 text-white'
            : 'bg-[#E8EAED] text-black'
        }
        transition
        ease-in-out
        delay-150
        hover:-translate-y-1
        hover:scale-110
        duration-300`}
      onClick={() => setSelectedActivity(id)}
    >
      {text}
    </div>
  );
}
