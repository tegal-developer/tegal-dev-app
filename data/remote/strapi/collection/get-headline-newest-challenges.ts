export default async function getHeadlineNewestChallenges() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/challenges?sort=publishedAt:desc&populate=*`,
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
