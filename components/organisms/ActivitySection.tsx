import parse from 'html-react-parser';
import ActivityItemList from '../molecules/ActivityItemList';

export default function ActivitySection({
  activityHeading,
  communityActivities,
}: {
  activityHeading: string;
  communityActivities: any;
}) {
  return (
    <section
      id="activity"
      className="
        bg-[#FAFBFD]
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
        <div className="text-2xl md:text-4xl lg:text-4xl font-bold">
          {activityHeading !== undefined ? parse(activityHeading) : ''}
        </div>
        <ActivityItemList communityActivities={communityActivities} />
      </div>
    </section>
  );
}
