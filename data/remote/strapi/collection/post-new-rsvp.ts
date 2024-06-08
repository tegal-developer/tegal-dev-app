import { generateRandomString } from '@/utils';

export default async function postNewRSVP({
  userId,
  eventId,
  motivation,
  expectation,
}: {
  userId: number;
  eventId: number;
  motivation: string;
  expectation: string;
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
            user_id: userId,
            event_id: eventId,
            attendance_code: attendanceCode,
            motivation,
            expectation,
          },
        }),
      },
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
