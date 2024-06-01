export default async function getHeadlineNewestEvents() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/events`,
  );

  return response.json();
}
