'use client';

import { useSearchParams } from 'next/navigation';
import Container from '../templates/Container';
import TextHeadingSection from '../atoms/TextHeadingSection';
import useInputText from '@/hooks/useInputText';
import ButtonAction from '../atoms/ButtonAction';
import toast from 'react-hot-toast';
import getRSVPByAttendanceCode from '@/data/remote/strapi/collection/get-rsvp-by-attendance-code';
import putRSVPById from '@/data/remote/strapi/collection/put-rsvp-by-id';
import getAttendanceAccessByCode from '@/data/remote/strapi/collection/get-attendance-access-by-code';
import getEventDetailByEventId from '@/data/remote/strapi/collection/get-event-detail-by-id';
import { useState } from 'react';

export default function AttendanceSection() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const [codeInput, codeInputChangeHandler] = useInputText(code || '');
  const [codeAccess, codeAccessChangeHandler] = useInputText('');
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
        pt-32
        text-gray-700
        dark:text-white
        flex
        flex-col
        gap-10
        items-center"
    >
      <Container>
        <TextHeadingSection heading="Absensi Kehadiran Event" />
        <form className="flex gap-5">
          <label className="input input-bordered flex items-center gap-2 bg-transparent w-fit">
            <input
              type="password"
              className="grow"
              placeholder="Kode akses"
              value={codeAccess}
              onChange={codeAccessChangeHandler}
              required
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 bg-transparent w-fit">
            <input
              type="text"
              className="grow"
              placeholder="Kode RSVP"
              value={codeInput}
              onChange={codeInputChangeHandler}
              required
            />
          </label>
          <ButtonAction
            buttonLabel="Tandai Hadir"
            buttonAction={async () => {
              setIsLoading(true);
              try {
                if (codeAccess === '') {
                  setIsLoading(false);
                  return toast.error('Ups, kode akses wajib diisi nih!');
                }

                if (codeInput === '') {
                  setIsLoading(false);
                  return toast.error('Ups, kode RSVP wajib diisi nih!');
                }

                const attendanceAccess = await getAttendanceAccessByCode(
                  codeAccess,
                );

                if (attendanceAccess?.data?.length < 1) {
                  setIsLoading(false);
                  return toast.error(
                    'Kamu tidak punya akses untuk melakukan aksi ini!',
                  );
                }

                const rsvp = await getRSVPByAttendanceCode(codeInput);

                if (rsvp?.data?.length === 0) {
                  setIsLoading(false);
                  return toast.error('Kode kehadiran tidak ditemukan!');
                }

                if (rsvp?.data[0]?.attributes?.is_attended) {
                  setIsLoading(false);
                  return toast.error('Sudah ditandai hadir');
                }

                const eventDetail = await getEventDetailByEventId(
                  rsvp?.data[0]?.attributes?.event_id?.data?.id,
                );

                await putRSVPById(
                  rsvp?.data[0]?.id,
                  eventDetail?.data?.attributes?.xp_point,
                );

                toast.success('Berhasil ditandai hadir!');
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
        </form>
      </Container>
    </section>
  );
}
