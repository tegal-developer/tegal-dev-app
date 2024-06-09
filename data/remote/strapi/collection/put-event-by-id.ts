export default async function putEventById(eventId: number, totalRSVP: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/events/${eventId}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            total_rsvp: totalRSVP,
          },
        }),
      },
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
