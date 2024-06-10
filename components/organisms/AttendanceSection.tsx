'use client';

import { useSearchParams } from 'next/navigation';
import Container from '../templates/Container';
import TextHeadingSection from '../atoms/TextHeadingSection';
import useInputText from '@/hooks/useInputText';
import ButtonAction from '../atoms/ButtonAction';
import toast from 'react-hot-toast';
import getRSVPByAttendanceCode from '@/data/remote/strapi/collection/get-rsvp-by-attendance-code';
import putRSVPById from '@/data/remote/strapi/collection/put-rsvp-by-id';
import getEventById from '@/data/remote/strapi/collection/get-event-by-id';
import { useState } from 'react';
import getEventByCode from '@/data/remote/strapi/collection/get-event-by-code';

export default function AttendanceSection() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const [attendanceCode, attendanceCodeChangeHandler] = useInputText(
    code || '',
  );
  const [eventCode, eventCodeChangeHandler] = useInputText('');
  const [isLoading, setIsLoading] = useState(false);

  return (
    <section
      id="event"
      className="
        bg-white
        dark:bg-gray-900
        border-gray-300
        dark:border-gray-700
        px-5
        py-12
        pt-24
        text-gray-700
        dark:text-white
        flex
        flex-col
        gap-10
        items-center"
    >
      <Container>
        <TextHeadingSection heading="Absensi Kehadiran Event" />
        <form className="flex flex-col md:flex-row gap-3 w-full">
          <div className="flex flex-col md:flex-row gap-2 w-full">
            <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
              <input
                type="password"
                className="grow"
                placeholder="Kode event"
                value={eventCode}
                onChange={eventCodeChangeHandler}
                required
              />
            </label>
            <label className="input input-bordered flex items-center gap-2 bg-transparent w-full">
              <input
                type="text"
                className="grow"
                placeholder="Kode kehadiran"
                value={attendanceCode}
                onChange={attendanceCodeChangeHandler}
                required
              />
            </label>
          </div>
          <div className="w-full max-w-[480px]">
            <ButtonAction
              buttonLabel="Tandai Hadir"
              buttonAction={async () => {
                setIsLoading(true);
                try {
                  if (eventCode === '') {
                    setIsLoading(false);
                    return toast.error('Ups, kode event wajib diisi nih!');
                  }

                  if (attendanceCode === '') {
                    setIsLoading(false);
                    return toast.error('Ups, kode kehadiran wajib diisi nih!');
                  }

                  const attendanceAccess = await getEventByCode(eventCode);

                  if (attendanceAccess?.data?.length < 1) {
                    setIsLoading(false);
                    return toast.error(
                      'Ups, kode event yang kamu masukan tidak valid nih!',
                    );
                  }

                  const rsvp = await getRSVPByAttendanceCode(attendanceCode);

                  if (rsvp?.data?.length === 0) {
                    setIsLoading(false);
                    return toast.error(
                      'Ups, kode kehadiran yang kamu masukan tidak ditemukan!',
                    );
                  }

                  if (rsvp?.data[0]?.attributes?.is_attended) {
                    setIsLoading(false);
                    return toast.error(
                      'Ups, peserta dengan kode tersebut sudah ditandai hadir nih!',
                    );
                  }

                  const eventDetail = await getEventById(
                    rsvp?.data[0]?.attributes?.event?.data?.id,
                  );

                  await putRSVPById(
                    rsvp?.data[0]?.id,
                    eventDetail?.data?.attributes?.xp_point,
                  );

                  toast.success('Yay! Peserta berhasil ditandai hadir!');
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
        </form>
      </Container>
    </section>
  );
}
