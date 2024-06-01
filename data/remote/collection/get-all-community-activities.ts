export default async function getAllCommunityActivities(): Promise<object> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/community-activities?populate=images`,
  );

  return response.json();
}
