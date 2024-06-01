export default async function getHeadlineNewestEvents(): Promise<object> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/events`,
  );

  return response.json();
}
