import { generateRandomString } from '@/utils';

export default async function postNewRSVP({
  userId,
  eventId,
  rsvpStatusId,
  motivation,
  expectation,
  queueNumber = 0,
}: {
  userId: number;
  eventId: number;
  rsvpStatusId: number;
  motivation: string;
  expectation: string;
  queueNumber?: number;
}) {
  try {
    const attendanceCode = generateRandomString(5);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/rsvps?populate=*`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            user: userId,
            event: eventId,
            rsvp_status: rsvpStatusId,
            attendance_code: attendanceCode,
            motivation,
            expectation,
            queue_number: queueNumber,
          },
        }),
      },
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
