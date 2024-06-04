export default async function getAllCommunityActivities() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/community-activities?populate=images`,
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
