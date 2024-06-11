import Image from 'next/image';
import EventItemInfo from './EventItemInfo';
import Link from 'next/link';

export default function EventItem({
  eventSlug,
  eventImage,
  eventHeading,
  eventStartDateTime,
  eventEndDateTime,
  eventLocation,
  eventTotalRSVP,
  eventMaxRSVP,
  eventDescription,
}: {
  eventSlug: string;
  eventImage: string;
  eventHeading: string;
  eventStartDateTime: string;
  eventEndDateTime: string;
  eventLocation: string;
  eventTotalRSVP: string;
  eventMaxRSVP: string;
  eventDescription: string;
}) {
  return (
    <div className="indicator active:scale-95 duration-300">
      <span className="indicator-item badge badge-primary bg-[#1B71D8] text-white mr-3">
        new
      </span>
      <Link
        className="
          bg-[#FAFBFD]
          dark:bg-gray-900
          w-full
          min-w-[300px]
          max-w-[360px]
          2xl:max-w-[560px]
          flex flex-col
          2xl:flex-row
          gap-5
          p-3
          rounded-xl
          cursor-pointer
          duration-300
          hover:bg-gray-100
          dark:hover:bg-gray-700
          dark:border
          dark:border-gray-700"
        href={`/events/${eventSlug}`}
      >
        <Image
          className="rounded-lg object-cover w-full 2xl:w-[170px]"
          src={eventImage}
          alt="Event image"
          width={170}
          height={170}
        />
        <div className="flex flex-col gap-5">
          <EventItemInfo
            eventHeading={eventHeading}
            eventStartDateTime={eventStartDateTime}
            eventEndDateTime={eventEndDateTime}
            eventLocation={eventLocation}
            eventTotalRSVP={eventTotalRSVP}
            eventMaxRSVP={eventMaxRSVP}
            eventDescription={eventDescription}
          />
        </div>
      </Link>
    </div>
  );
}
