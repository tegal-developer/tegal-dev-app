import AttendanceSection from '@/components/organisms/AttendanceSection';
import Template from '@/components/templates/Template';
import { Suspense } from 'react';

export default function EventsAttendances() {
  return (
    <Template>
      <Suspense>
        <AttendanceSection />
      </Suspense>
    </Template>
  );
}
