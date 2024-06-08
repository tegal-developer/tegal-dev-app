export default async function putRSVPByAttendanceCode(rsvpId: string) {
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
            attendance_code: '',
            is_attended: true,
            attended_at: new Date().getTime(),
          },
        }),
      },
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
