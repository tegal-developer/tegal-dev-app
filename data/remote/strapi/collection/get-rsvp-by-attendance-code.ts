export default async function getRSVPByAttendanceCode(attendanceCode: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/rsvps?filters[attendance_code]=${attendanceCode}&populate=*`,
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
