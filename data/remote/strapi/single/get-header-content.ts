export default async function getHeaderContent() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/header-content?populate=*`,
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
