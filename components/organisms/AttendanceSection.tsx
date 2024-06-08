'use client';

import { useSearchParams } from 'next/navigation';
import Container from '../templates/Container';
import TextHeadingSection from '../atoms/TextHeadingSection';
import useInputText from '@/hooks/useInputText';
import ButtonAction from '../atoms/ButtonAction';
import toast from 'react-hot-toast';
import getRSVPByAttendanceCode from '@/data/remote/strapi/collection/get-rsvp-by-attendance-code';
import putRSVPByAttendanceCode from '@/data/remote/strapi/collection/put-rsvp-by-attendance-code';

export default function AttendanceSection() {
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const [codeInput, codeInputChangeHandler] = useInputText(code || '');

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
              type="text"
              className="grow"
              placeholder="Harapan setelah mengikuti event ini"
              value={codeInput}
              onChange={codeInputChangeHandler}
              required
            />
          </label>
          <ButtonAction
            buttonLabel="Tandai Hadir"
            buttonAction={async () => {
              const rsvp = await getRSVPByAttendanceCode(codeInput);
              await putRSVPByAttendanceCode(rsvp?.data[0]?.id);
            }}
            backgroundColor="[#1B71D8]"
            hoverBackgroundColor="[#0d4385]"
            darkHoverBackgroundColor="[#0d4385]"
            textColor="white"
          />
        </form>
      </Container>
    </section>
  );
}
