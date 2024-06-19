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
          eventSlug={headlineEvent?.slug}
          eventImage={headlineEvent?.flyer_image?.url}
          eventHeading={headlineEvent?.title}
          eventStartDateTime={headlineEvent?.start_date_time}
          eventEndDateTime={headlineEvent?.end_date_time}
          eventLocation={headlineEvent?.location}
          eventTotalRSVP={headlineEvent?.total_rsvp}
          eventMaxRSVP={headlineEvent?.max_rsvp}
          eventDescription={headlineEvent?.description}
        />
      ))}
    </div>
  );
}
