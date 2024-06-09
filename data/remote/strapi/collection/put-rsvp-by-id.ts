export default async function putRSVPById(
  rsvpId: string,
  achievedXPPoint: number,
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/rsvps/${rsvpId}?populate=*`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            is_attended: true,
            attended_at: new Date().getTime(),
            achieved_xp_point: achievedXPPoint,
          },
        }),
      },
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
