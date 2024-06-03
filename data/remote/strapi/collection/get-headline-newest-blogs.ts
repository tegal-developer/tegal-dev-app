export default async function getHeadlineNewestBlogs() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/blogs`,
  );

  return response.json();
}