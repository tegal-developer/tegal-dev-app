import EventItem from './EventItem';

export default function EventItemList() {
  return (
    <div className="flex gap-5 w-full xl:justify-evenly overflow-x-scroll py-3">
      <EventItem />
      <EventItem />
      <EventItem />
    </div>
  );
}
