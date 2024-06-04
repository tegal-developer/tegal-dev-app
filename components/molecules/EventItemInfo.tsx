import { dateFormatter, getTime } from '@/utils';
import TextBodyInfoItem from '../atoms/TextBodyInfoItem';
import TextBodyItem from '../atoms/TextBodyItem';
import TextHeadingItem from '../atoms/TextHeadingItem';
import { CiCalendarDate, CiLocationOn, CiTimer } from 'react-icons/ci';
import { MdRsvp } from 'react-icons/md';
import { TbProgressBolt } from 'react-icons/tb';

export default function EventItemInfo({
  eventHeading,
  eventStartDateTime,
  eventEndDateTime,
  eventLocation,
  eventTotalRSVP,
  eventMaxRSVP,
  eventDescription,
}: {
  eventHeading: string;
  eventStartDateTime: string;
  eventEndDateTime: string;
  eventLocation: string;
  eventTotalRSVP: string;
  eventMaxRSVP: string;
  eventDescription: string;
}) {
  return (
    <div className="flex flex-col gap-5">
      <TextHeadingItem text={eventHeading} />
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <CiCalendarDate />
            <TextBodyInfoItem text={dateFormatter(eventStartDateTime)} />
          </div>
          <div className="flex gap-2 items-center">
            <CiTimer />
            <TextBodyInfoItem
              text={`${getTime(eventStartDateTime)} - ${getTime(
                eventEndDateTime,
              )}`}
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2 items-center">
            <CiLocationOn />
            <TextBodyInfoItem text={eventLocation} />
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-xs">{`${eventTotalRSVP}/${eventMaxRSVP}`}</p>
            <MdRsvp size={20} />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <TbProgressBolt />
          <TextBodyInfoItem text={`100 Exp Point`} />
        </div>
      </div>
      <TextBodyItem text={eventDescription} />
    </div>
  );
}
