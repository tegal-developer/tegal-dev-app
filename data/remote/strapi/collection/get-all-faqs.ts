export default async function getAllFAQs() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/faqs`,
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
