export default async function getEventDetailByEventId(eventId: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/events/${eventId}`,
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
