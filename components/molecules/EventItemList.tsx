import EventItem from './EventItem';
import { usePathname } from 'next/navigation';

export default function EventItemList({
  headlineNewestEvents,
}: {
  headlineNewestEvents: any;
}) {
  const pathname = usePathname();

  return (
    <div
      className={`flex gap-10 w-full py-5 ${
        pathname === '/events'
          ? 'flex-wrap justify-center'
          : 'overflow-x-scroll md:overflow-hidden md:justify-center'
      }`}
    >
      {headlineNewestEvents?.map((headlineEvent: any) => (
        <EventItem
          key={headlineEvent?.id}
          eventSlug={headlineEvent?.attributes?.slug}
          eventImage={
            headlineEvent?.attributes?.flyer_image?.data?.attributes?.url
          }
          eventHeading={headlineEvent?.attributes?.title}
          eventStartDateTime={headlineEvent?.attributes?.start_date_time}
          eventEndDateTime={headlineEvent?.attributes?.end_date_time}
          eventLocation={headlineEvent?.attributes?.location}
          eventTotalRSVP={headlineEvent?.attributes?.total_rsvp}
          eventMaxRSVP={headlineEvent?.attributes?.max_rsvp}
          eventDescription={headlineEvent?.attributes?.description}
        />
      ))}
    </div>
  );
}
