import AttendanceSection from '@/components/organisms/AttendanceSection';
import Template from '@/components/templates/Template';
import getAllAttendedRSVPsByEventId from '@/data/remote/strapi/collection/get-all-attended-rsvps-by-event-id';
import getEventBySlug from '@/data/remote/strapi/collection/get-event-by-slug';
import { Suspense } from 'react';

export default async function EventsAttendances({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const eventDetail = await getEventBySlug(slug);
  const attendedRSVPs = await getAllAttendedRSVPsByEventId(
    eventDetail?.data[0]?.id,
  );

  return (
    <Template>
      <Suspense>
        <AttendanceSection attendedRSVPs={attendedRSVPs?.data} />
      </Suspense>
    </Template>
  );
}
