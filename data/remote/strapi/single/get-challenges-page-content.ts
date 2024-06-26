export default async function getChallengesPageContent() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/challenges-page-content`,
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
