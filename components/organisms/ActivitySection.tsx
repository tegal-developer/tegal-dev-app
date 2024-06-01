import ActivityItemList from '../molecules/ActivityItemList';
import Container from '../templates/Container';
import TextHeadingSection from '../atoms/TextHeadingSection';

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
        h-[560px]
        md:h-full
        border-t
        border-gray-300
        dark:border-gray-700
        px-5
        py-12
        text-gray-700
        dark:text-white"
    >
      <Container>
        <TextHeadingSection heading={activityHeading} />
        <ActivityItemList communityActivities={communityActivities} />
      </Container>
    </section>
  );
}
