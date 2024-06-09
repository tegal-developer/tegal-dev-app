export default async function getAttendanceAccessByCode(code: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/code-accesses?filters[code]=${code}`,
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
