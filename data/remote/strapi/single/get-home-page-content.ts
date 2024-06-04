export default async function getHomePageContent() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/home-page-content?populate=hero_section_images`,
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
