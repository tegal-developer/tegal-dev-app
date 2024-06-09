import { useState } from 'react';
import EventItem from './EventItem';
import Image from 'next/image';
import { CiCalendarDate, CiLocationOn, CiTimer } from 'react-icons/ci';
import { dateFormatter, getTime } from '@/utils';
import { MdRsvp } from 'react-icons/md';
import parse from 'html-react-parser';
import ButtonAction from '../atoms/ButtonAction';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { usePathname, useRouter } from 'next/navigation';
import { TbProgressBolt } from 'react-icons/tb';

export default function EventItemList({
  headlineNewestEvents,
}: {
  headlineNewestEvents: any;
}) {
  const [eventDetail] = useState(null);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      <div
        className={`flex gap-10 w-full p-5 ${
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
      <dialog
        id={`modal_event`}
        className="modal"
        onKeyUp={(e) => {
          if (e.key === 'Escape')
            (
              document?.getElementById('modal_event') as HTMLDialogElement
            ).close();
          router.push('/', { scroll: false });
        }}
      >
        <div className="modal-box bg-[#FAFBFD] dark:bg-gray-900 text-gray-700 dark:text-white max-w-[1024px]">
          <AiOutlineCloseCircle
            className="absolute right-5 top-5 cursor-pointer text-gray-700 dark:text-gray-300"
            onClick={() => {
              (
                document?.getElementById('modal_event') as HTMLDialogElement
              ).close();
              router.push('/', { scroll: false });
            }}
          />
          <div className="flex flex-col md:flex-row gap-3 mt-5">
            <Image
              className="rounded-lg object-cover w-full max-w-[360px]"
              src={
                (eventDetail as any)?.attributes?.flyer_image?.data?.attributes
                  ?.url
              }
              alt="Flyer image"
              width={360}
              height={360}
            />
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-5">
                <h1 className="font-semibold tracking-wider text-sm md:text-lg">
                  {(eventDetail as any)?.attributes?.title}
                </h1>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <CiCalendarDate />
                      <p className="text-xs md:text-sm tracking-wider">
                        {dateFormatter(
                          (eventDetail as any)?.attributes?.start_date_time,
                        )}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <CiTimer />
                      <p className="text-xs md:text-sm tracking-wider">
                        {`${getTime(
                          (eventDetail as any)?.attributes?.start_date_time,
                        )} - ${getTime(
                          (eventDetail as any)?.attributes?.end_date_time,
                        )}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2">
                      <CiLocationOn />
                      <p className="text-xs md:text-sm tracking-wider">
                        {(eventDetail as any)?.attributes?.location}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p className="text-xs md:text-sm">{`${
                        (eventDetail as any)?.attributes?.total_rsvp
                      }/${(eventDetail as any)?.attributes?.max_rsvp}`}</p>
                      <MdRsvp size={25} />
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <TbProgressBolt />
                    <p className="text-xs md:text-sm">{`${
                      (eventDetail as any)?.attributes?.xp_point
                    } Exp Point`}</p>
                  </div>
                </div>
                <div className="tracking-wider text-xs md:text-sm">
                  {(eventDetail as any)?.attributes?.description !== undefined
                    ? parse((eventDetail as any)?.attributes?.description)
                    : ''}
                </div>
              </div>
            </div>
          </div>
          <div className="collapse bg-[#E7EDF2] dark:bg-gray-800 dark:text-white mt-5">
            <input type="checkbox" />
            <div
              className={`
                collapse-title
                duration-150
                text-xs
                font-semibold
                text-center
                ml-4
                text-black
                dark:text-white`}
            >
              RSVP
            </div>
            <div className="collapse-content">
              <form className="flex flex-col gap-2">
                <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Nama"
                    required
                  />
                  <span className="text-red-500">*</span>
                </label>
                <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Alamat"
                    required
                  />
                  <span className="text-red-500">*</span>
                </label>
                <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Email"
                    required
                  />
                  <span className="text-red-500">*</span>
                </label>
                <label
                  className="
                input
                input-bordered
                flex
                items-center
                gap-2
                bg-transparent
                w-full
                pl-0"
                >
                  <span
                    className="
                  bg-[#2a323c]
                  dark:bg-gray-700
                  p-3
                  rounded-md
                  text-gray-300
                  dark:text-gray-300
                  items-center
                  flex
                  h-full
                  font-medium"
                  >
                    62
                  </span>
                  <input
                    type="text"
                    className="grow"
                    placeholder="No WhatsApp (ex: 812 xxx)"
                    required
                  />
                  <span className="text-red-500">*</span>
                </label>
                <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Minat"
                    required
                  />
                  <span className="text-red-500">*</span>
                </label>
                <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Pekerjaan"
                    required
                  />
                  <span className="text-red-500">*</span>
                </label>
                <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
                  <input
                    type="text"
                    className="grow"
                    placeholder="Alasan mengikuti event ini"
                    required
                  />
                  <span className="text-red-500">*</span>
                </label>
                <div className="w-full">
                  <ButtonAction
                    buttonLabel="RSVP"
                    buttonAction={() => {}}
                    backgroundColor="[#1B71D8]"
                    hoverBackgroundColor="[#0d4385]"
                    darkHoverBackgroundColor="[#0d4385]"
                    textColor="white"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button
            onClick={() => {
              (
                document?.getElementById('modal_event') as HTMLDialogElement
              ).close();
              router.push('/', { scroll: false });
            }}
          >
            close
          </button>
        </form>
      </dialog>
    </>
  );
}
