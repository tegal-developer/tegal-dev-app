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
        inline-flex
        items-center
        justify-center
        px-5
        py-3
        text-xs
        font-medium
        text-center
        text-gray-900
        border
        hover:cursor-pointer
        min-w-[240px]
        border-gray-300
        rounded-lg
        hover:bg-gray-100
        active:scale-95
        duration-150
        ${
          selectedActivity === id
            ? 'bg-gray-100 dark:bg-gray-700'
            : 'bg-white dark:bg-transparent'
        }
        focus:ring-4
        focus:ring-gray-100
        dark:text-white
        dark:border-gray-700
        dark:hover:bg-gray-700
        dark:focus:ring-gray-800"`}
      onClick={() => setSelectedActivity(id)}
    >
      {text}
    </div>
  );
}
