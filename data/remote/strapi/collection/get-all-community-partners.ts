export default async function getAllCommunityPartners() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/community-partners?populate=image`,
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
