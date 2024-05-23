import ActivityItemList from '../molecules/ActivityItemList';

export default function ActivitySection({
  communityActivities,
}: {
  communityActivities: any;
}) {
  return (
    <section
      id="activity"
      className="
        bg-white
        dark:bg-gray-900
        border-t
        border-gray-300
        dark:border-gray-700
        px-5
        py-12
        text-gray-700
        dark:text-white"
    >
      <div
        className="lg:container lg:mx-auto 
        flex
        flex-col
        gap-10
        items-center"
      >
        <h1 className="text-2xl md:text-4xl lg:text-4xl font-bold">
          Kegiatan di <span className="text-[#1B71D8]">Tegal Dev</span>
        </h1>
        <ActivityItemList communityActivities={communityActivities} />
      </div>
    </section>
  );
}
