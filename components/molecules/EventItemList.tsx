import EventItem from './EventItem';

export default function EventItemList({
  headlineNewestEvents,
}: {
  headlineNewestEvents: any;
}) {
  return (
    <div className="flex gap-5 w-full xl:justify-evenly overflow-x-scroll py-3">
      {headlineNewestEvents?.map((headlineEvent: any) => (
        <EventItem
          key={headlineEvent?.id}
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
