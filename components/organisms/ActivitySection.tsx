import ActivityItemList from '../molecules/ActivityItemList';

export default function ActivitySection({
  communityActivities,
}: {
  communityActivities: any;
}) {
  return (
    <section
      id="about"
      className="
        bg-white
        dark:bg-gray-900
        border-t-2
        dark:bg
        px-5
        py-28
        text-black
        dark:text-white
        flex
        flex-col
        gap-20
        items-center"
    >
      <h1 className="text-6xl font-bold">
        Kegiatan di{' '}
        <span className="text-[#1B71D8]">Tegal Developer Group</span>
      </h1>
      <ActivityItemList communityActivities={communityActivities} />
    </section>
  );
}
