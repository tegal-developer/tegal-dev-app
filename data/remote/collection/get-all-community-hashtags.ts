export default async function getAllCommunityHastags(): Promise<object> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/community-hashtags`,
  );

  return response.json();
}
