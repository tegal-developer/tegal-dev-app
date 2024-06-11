export default async function getBlogDetailBySlug(slug: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/blogs?filters[slug]=${slug}&populate=*`,
      {
        cache: 'no-store',
      },
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
