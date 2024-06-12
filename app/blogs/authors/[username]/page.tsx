import BlogSection from '@/components/organisms/BlogSection';
import Template from '@/components/templates/Template';
import getAllBlogsByAuthorUsername from '@/data/remote/strapi/collection/get-all-blogs-by-author-username';

export default async function BlogsAuthor({
  params: { username },
}: {
  params: { username: string };
}) {
  const authorsBlogs = await getAllBlogsByAuthorUsername(username);

  return (
    <Template>
      <BlogSection
        blogHeading={`Blog oleh ${username}`}
        headlineNewestBlogs={authorsBlogs?.data}
      />
    </Template>
  );
}
