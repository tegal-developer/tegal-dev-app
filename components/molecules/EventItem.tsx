'use client';

import Image from 'next/image';
import EventItemInfo from './EventItemInfo';
import ButtonEventItem from '../atoms/ButtonEventItem';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
import getEventDetailBySlug from '@/data/remote/strapi/collection/get-event-detail-by-slug';

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
  setEventDetail,
  setIsLoadingEventDetail,
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
  setEventDetail: any;
  setIsLoadingEventDetail: any;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="indicator active:scale-95 duration-300">
      <span className="indicator-item badge badge-primary bg-[#1B71D8] text-white mr-3">
        new
      </span>
      <div
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
        onClick={async () => {
          setIsLoadingEventDetail(true);
          const retrievedEventDetail = await getEventDetailBySlug(eventSlug);
          setEventDetail(retrievedEventDetail?.data[0]);
          router.push(
            pathname + '?' + createQueryString('event', `${eventSlug}`),
            { scroll: false },
          );
          setIsLoadingEventDetail(false);
        }}
      >
        <Image
          className="rounded-lg object-cover w-full 2xl:w-[180px]"
          src={eventImage}
          alt="Flyer image"
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
    </div>
  );
}
