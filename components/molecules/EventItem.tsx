'use client';

import Image from 'next/image';
import EventItemInfo from './EventItemInfo';
import ButtonEventItem from '../atoms/ButtonEventItem';
import toast from 'react-hot-toast';

export default function EventItem({
  eventImage,
  eventHeading,
  eventStartDateTime,
  eventEndDateTime,
  eventLocation,
  eventTotalRSVP,
  eventMaxRSVP,
  eventDescription,
}: {
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
    <div
      className="
      bg-[#FAFBFD]
      dark:bg-gray-900
      w-full
      min-w-[340px]
      max-w-[540px]
      flex flex-col
      2xl:flex-row
      gap-5
      p-3
      rounded-xl
      cursor-pointer
      active:scale-95
      duration-300
      hover:bg-gray-100
      dark:hover:bg-gray-700
      dark:border
      dark:border-gray-700"
      onClick={() => toast('Fitur ini akan segera diluncurkan!')}
    >
      <Image
        className="rounded-lg object-cover w-full 2xl:w-[180px]"
        src={eventImage}
        alt="Contoh image"
        width={180}
        height={180}
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
        <ButtonEventItem />
      </div>
    </div>
  );
}
