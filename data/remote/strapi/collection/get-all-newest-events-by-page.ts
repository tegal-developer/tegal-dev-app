export default async function getAllNewestEventsByPage() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/events`,
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
