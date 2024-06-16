export default async function getAllNewestEventsByPage(page: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/events?sort=publishedAt:desc&pagination[page]=${page}&populate=*`,
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
