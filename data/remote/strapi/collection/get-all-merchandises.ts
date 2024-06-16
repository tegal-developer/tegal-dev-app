export default async function getAllMerchandises(page: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/merchandises?sort=publishedAt:desc&pagination[page]=${page}&populate=*`,
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
