'use client';

import Image from 'next/image';
import Container from '../templates/Container';
import { CiCalendarDate, CiLocationOn, CiTimer } from 'react-icons/ci';
import { dateFormatter, getTime, isValidEmail } from '@/utils';
import { MdRsvp } from 'react-icons/md';
import { TbProgressBolt } from 'react-icons/tb';
import parse from 'html-react-parser';
import ButtonAction from '../atoms/ButtonAction';
import toast from 'react-hot-toast';
import postNewUser from '@/data/remote/strapi/collection/post-new-user';
import useInputText from '@/hooks/useInputText';
import postNewRSVP from '@/data/remote/strapi/collection/post-new-rsvp';
import { useState } from 'react';
import getUserByEmail from '@/data/remote/strapi/collection/get-user-by-email';
import getRSVPByUserId from '@/data/remote/strapi/collection/get-rsvp-by-user-id';
import Link from 'next/link';
import TextHeadingSection from '../atoms/TextHeadingSection';
import postSendMailRSVP from '@/data/remote/strapi/collection/post-send-mail-rsvp';
import putEventById from '@/data/remote/strapi/collection/put-event-by-id';

export default function EventDetailSection({
  eventDetailHeading,
  eventDetail,
}: {
  eventDetailHeading: string;
  eventDetail: any;
}) {
  const [name, nameChangeHandler] = useInputText('');
  const [email, emailChangeHandler] = useInputText('');
  const [phoneNumber, phoneNumberChangeHandler] = useInputText('');
  const [interest, interestChangeHandler] = useInputText('');
  const [occupation, occupationChangeHandler] = useInputText('');
  const [institution, institutionChangeHandler] = useInputText('');
  const [address, addressChangeHandler] = useInputText('');
  const [motivation, motivationChangeHandler] = useInputText('');
  const [expectation, expectationChangeHandler] = useInputText('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isWaitingList, setIsWaitingList] = useState(false);

  const renderUI = () => {
    if (isSuccess) {
      return (
        <div role="alert" className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            Yay, kamu berhasil terdaftar di event ini. Silakan cek email yah!
          </span>
        </div>
      );
    }

    if (isWaitingList) {
      return (
        <div role="alert" className="alert alert-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>
            Yay, kamu terdaftar di waiting list. Mohon tunggu informasi
            selanjutnya!
          </span>
        </div>
      );
    }

    return (
      <div className="w-full">
        <ButtonAction
          buttonLabel="RSVP"
          buttonAction={async () => {
            setIsLoading(true);
            try {
              if (name === undefined || name === '') {
                toast.error('Ups, nama kamu wajib diisi nih!');
                return setIsLoading(false);
              }

              if (email === undefined || email === '') {
                toast.error('Ups, email kamu wajib diisi nih!');
                return setIsLoading(false);
              }

              if (!isValidEmail(email)) {
                toast.error('Ups! Email yang kamu isi gak valid nih!');
                return setIsLoading(false);
              }

              if (phoneNumber === undefined || phoneNumber === '') {
                toast.error('Ups, nomor whatsapp kamu wajib diisi nih!');
                return setIsLoading(false);
              }

              if (interest === undefined || interest === '') {
                toast.error('Ups, minat kamu wajib diisi nih!');
                return setIsLoading(false);
              }

              if (occupation === undefined || occupation === '') {
                toast.error('Ups, pekerjaan kamu wajib diisi nih!');
                return setIsLoading(false);
              }

              if (institution === undefined || institution === '') {
                toast.error('Ups, institusi kamu wajib diisi nih!');
                return setIsLoading(false);
              }

              if (address === undefined || address === '') {
                toast.error('Ups alamat kamu wajib diisi nih!');
                return setIsLoading(false);
              }

              if (motivation === undefined || motivation === '') {
                toast.error(
                  'Ups, kamu wajib mengisi alasan mengikuti event ini nih!',
                );
                return setIsLoading(false);
              }

              if (expectation === undefined || expectation === '') {
                toast.error(
                  'Ups, kamu wajib mengisi harapan setelah mengikuti event ini nih!',
                );
                return setIsLoading(false);
              }

              const registeredUser = await postNewUser({
                name,
                email,
                phoneNumber,
                interest,
                occupation,
                institution,
                address,
              });

              if (registeredUser?.data === null) {
                const retrievedUser = await getUserByEmail(email);

                const { id: userId } = retrievedUser[0];

                const retrievedRSVP = await getRSVPByUserId(userId);

                if (retrievedRSVP?.data?.length > 0) {
                  toast.error('Ups, kamu sudah terdaftar di event ini tau!');
                  return setIsLoading(false);
                }

                if (
                  (eventDetail as any)?.data[0]?.attributes?.total_rsvp >=
                  (eventDetail as any)?.data[0]?.attributes?.max_rsvp
                ) {
                  await postNewRSVP({
                    userId,
                    eventId: (eventDetail as any)?.data[0]?.id,
                    rsvpStatusId: 2,
                    motivation,
                    expectation,
                    queueNumber:
                      (eventDetail as any)?.data[0]?.attributes?.total_rsvp +
                      1 -
                      (eventDetail as any)?.data[0]?.attributes?.max_rsvp,
                  });

                  setIsWaitingList(true);
                  setIsLoading(false);

                  return await putEventById(
                    (eventDetail as any)?.data[0]?.id,
                    (eventDetail as any)?.data[0]?.attributes?.total_rsvp + 1,
                  );
                }

                const rsvp = await postNewRSVP({
                  userId,
                  eventId: (eventDetail as any)?.data[0]?.id,
                  rsvpStatusId: 1,
                  motivation,
                  expectation,
                });

                await putEventById(
                  (eventDetail as any)?.data[0]?.id,
                  (eventDetail as any)?.data[0]?.attributes?.total_rsvp + 1,
                );

                await postSendMailRSVP({
                  rsvpName: name,
                  rsvpEmail: email,
                  rsvpAttendanceQRCode: `${
                    process.env.NEXT_PUBLIC_CMS_API_BASE_URL
                  }/qrcode-generator?url=https://tegal.dev/events/attendances?code=${
                    rsvp?.data?.attributes?.attendance_code
                  }&filename=qrcode-event-attendance-${
                    (eventDetail as any)?.data[0]?.id
                  }&download=true`,
                  eventName: (eventDetail as any)?.data[0]?.attributes?.title,
                  eventDate: dateFormatter(
                    (eventDetail as any)?.data[0]?.attributes?.start_date_time,
                  ),
                  eventTime: `${getTime(
                    (eventDetail as any)?.data[0]?.attributes?.start_date_time,
                  )} - ${getTime(
                    (eventDetail as any)?.data[0]?.attributes?.end_date_time,
                  )}`,
                  eventLocation: (eventDetail as any)?.data[0]?.attributes
                    ?.location,
                  eventGMAPLocationLink: (eventDetail as any)?.data[0]
                    ?.attributes?.gmap_location_link,
                });

                setIsSuccess(true);
              } else {
                const {
                  user: { id: userId },
                } = registeredUser;

                const retrievedRSVP = await getRSVPByUserId(userId);

                if (retrievedRSVP?.data?.length > 0) {
                  toast.error('Ups, kamu sudah terdaftar di event ini tau!');
                  return setIsLoading(false);
                }

                if (
                  (eventDetail as any)?.data[0]?.attributes?.total_rsvp >=
                  (eventDetail as any)?.data[0]?.attributes?.max_rsvp
                ) {
                  await postNewRSVP({
                    userId,
                    eventId: (eventDetail as any)?.data[0]?.id,
                    rsvpStatusId: 2,
                    motivation,
                    expectation,
                    queueNumber:
                      (eventDetail as any)?.data[0]?.attributes?.total_rsvp +
                      1 -
                      (eventDetail as any)?.data[0]?.attributes?.max_rsvp,
                  });

                  setIsWaitingList(true);
                  setIsLoading(false);

                  return await putEventById(
                    (eventDetail as any)?.data[0]?.id,
                    (eventDetail as any)?.data[0]?.attributes?.total_rsvp + 1,
                  );
                }

                const rsvp = await postNewRSVP({
                  userId,
                  eventId: (eventDetail as any)?.data[0]?.id,
                  rsvpStatusId: 1,
                  motivation,
                  expectation,
                });

                await putEventById(
                  (eventDetail as any)?.data[0]?.id,
                  (eventDetail as any)?.data[0]?.attributes?.total_rsvp + 1,
                );

                await postSendMailRSVP({
                  rsvpName: name,
                  rsvpEmail: email,
                  rsvpAttendanceQRCode: `${
                    process.env.NEXT_PUBLIC_CMS_API_BASE_URL
                  }/qrcode-generator?url=https://tegal.dev/events/attendances?code=${
                    rsvp?.data?.attributes?.attendance_code
                  }&filename=qrcode-event-attendance-${
                    (eventDetail as any)?.data[0]?.id
                  }&download=true`,
                  eventName: (eventDetail as any)?.data[0]?.attributes?.title,
                  eventDate: dateFormatter(
                    (eventDetail as any)?.data[0]?.attributes?.start_date_time,
                  ),
                  eventTime: `${getTime(
                    (eventDetail as any)?.data[0]?.attributes?.start_date_time,
                  )} - ${getTime(
                    (eventDetail as any)?.data[0]?.attributes?.end_date_time,
                  )}`,
                  eventLocation: (eventDetail as any)?.data[0]?.attributes
                    ?.location,
                  eventGMAPLocationLink: (eventDetail as any)?.data[0]
                    ?.attributes?.gmap_location_link,
                });

                setIsSuccess(true);
              }
            } catch (error) {
              console.log(error);
            }
            setIsLoading(false);
          }}
          backgroundColor="[#1B71D8]"
          hoverBackgroundColor="[#0d4385]"
          darkHoverBackgroundColor="[#0d4385]"
          textColor="white"
          isDisabled={isLoading}
        />
      </div>
    );
  };

  return (
    <section
      id="event"
      className="
          bg-white
          dark:bg-gray-900
          border-t
          border-gray-300
          dark:border-gray-700
          px-5
          py-12
          pt-32
          text-gray-700
          dark:text-white
          flex
          flex-col
          gap-10
          items-center"
    >
      <TextHeadingSection heading={eventDetailHeading} />
      <Container>
        <div className="bg-[#FAFBFD] dark:bg-gray-900 text-gray-700 dark:text-white p-10 rounded-xl">
          <div className="flex flex-col md:flex-row gap-10 mt-5">
            <Image
              className="rounded-lg object-cover max-w-[420px] max-h-[420px]"
              src={
                (eventDetail as any)?.data[0]?.attributes?.flyer_image?.data
                  ?.attributes?.url
              }
              alt="Flyer image"
              width={420}
              height={420}
            />
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-5">
                <h1 className="font-semibold tracking-wider text-sm md:text-2xl">
                  {(eventDetail as any)?.data[0]?.attributes?.title}
                </h1>
                <div className="flex flex-col gap-5">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <CiCalendarDate />
                      <p className="text-xs md:text-base tracking-wider">
                        {dateFormatter(
                          (eventDetail as any)?.data[0]?.attributes
                            ?.start_date_time,
                        )}
                      </p>
                    </div>
                    <div className="flex gap-2 items-center">
                      <CiTimer />
                      <p className="text-xs md:text-base tracking-wider">
                        {`${getTime(
                          (eventDetail as any)?.data[0]?.attributes
                            ?.start_date_time,
                        )} - ${getTime(
                          (eventDetail as any)?.data[0]?.attributes
                            ?.end_date_time,
                        )}`}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex gap-2 items-center">
                      <CiLocationOn />
                      <Link
                        href={
                          (eventDetail as any)?.data[0]?.attributes
                            ?.gmap_location_link
                        }
                        target="_blank"
                        className="text-xs md:text-base tracking-wider"
                      >
                        {(eventDetail as any)?.data[0]?.attributes?.location}
                      </Link>
                    </div>
                    <div className="flex gap-2 items-center">
                      <p className="text-xs md:text-base">{`${
                        (eventDetail as any)?.data[0]?.attributes?.total_rsvp
                      }/${
                        (eventDetail as any)?.data[0]?.attributes?.max_rsvp
                      }`}</p>
                      <MdRsvp size={25} />
                    </div>
                  </div>
                  <div className="flex gap-2 items-center">
                    <TbProgressBolt />
                    <p className="text-xs md:text-base">{`${
                      (eventDetail as any)?.data[0]?.attributes?.xp_point
                    } Exp Point`}</p>
                  </div>
                </div>
                <div className="tracking-wide text-xs md:text-lg">
                  {(eventDetail as any)?.data[0]?.attributes?.description !==
                  undefined
                    ? parse(
                        (eventDetail as any)?.data[0]?.attributes?.description,
                      )
                    : ''}
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
                    <form className="flex flex-col gap-5">
                      <div className="flex flex-col gap-2">
                        <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
                          <input
                            type="text"
                            className="grow"
                            placeholder="Nama"
                            value={name}
                            onChange={nameChangeHandler}
                            required
                          />
                          <span className="text-red-500">*</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
                          <input
                            type="text"
                            className="grow"
                            placeholder="Email"
                            value={email}
                            onChange={emailChangeHandler}
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
                            value={phoneNumber}
                            onChange={phoneNumberChangeHandler}
                            required
                          />
                          <span className="text-red-500">*</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
                          <input
                            type="text"
                            className="grow"
                            placeholder="Minat"
                            value={interest}
                            onChange={interestChangeHandler}
                            required
                          />
                          <span className="text-red-500">*</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
                          <input
                            type="text"
                            className="grow"
                            placeholder="Pekerjaan"
                            value={occupation}
                            onChange={occupationChangeHandler}
                            required
                          />
                          <span className="text-red-500">*</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
                          <input
                            type="text"
                            className="grow"
                            placeholder="Institusi"
                            value={institution}
                            onChange={institutionChangeHandler}
                            required
                          />
                          <span className="text-red-500">*</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
                          <input
                            type="text"
                            className="grow"
                            placeholder="Alamat"
                            value={address}
                            onChange={addressChangeHandler}
                            required
                          />
                          <span className="text-red-500">*</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
                          <input
                            type="text"
                            className="grow"
                            placeholder="Alasan mengikuti event ini"
                            value={motivation}
                            onChange={motivationChangeHandler}
                            required
                          />
                          <span className="text-red-500">*</span>
                        </label>
                        <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
                          <input
                            type="text"
                            className="grow"
                            placeholder="Harapan setelah mengikuti event ini"
                            value={expectation}
                            onChange={expectationChangeHandler}
                            required
                          />
                          <span className="text-red-500">*</span>
                        </label>
                      </div>
                      {renderUI()}
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
