export default async function getEventBySlug(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/events?filters[slug]=${slug}&populate=*`,
      {
        cache: 'no-store',
      },
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
