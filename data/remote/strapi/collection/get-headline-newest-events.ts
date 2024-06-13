export default async function getHeadlineNewestEvents() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/events?populate=*`,
      {
        cache: 'no-cache',
      },
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
