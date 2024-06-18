export default async function getAllBlogsByAuthorUsername(
  authorUsername: string,
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/blogs?filters[user]=${authorUsername}&populate=*`,
      {
        cache: 'no-store',
      },
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
