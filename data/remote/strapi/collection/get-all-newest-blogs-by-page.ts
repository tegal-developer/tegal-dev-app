export default async function getAllNewestBlogsByPage(page: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/blogs?sort=publishedAt:desc&pagination[page]=${page}&populate=*`,
      {
        cache: 'no-cache',
      },
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
