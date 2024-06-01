export default async function getAllFAQs(): Promise<object> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/faqs`,
  );

  return response.json();
}
