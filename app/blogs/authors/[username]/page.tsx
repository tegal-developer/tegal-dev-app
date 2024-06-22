import BlogSection from '@/components/organisms/BlogSection';
import Template from '@/components/templates/Template';
import getAllBlogsByAuthorUsername from '@/data/remote/strapi/collection/get-all-blogs-by-author-username';
import getUserByUsername from '@/data/remote/strapi/collection/get-user-by-username';

export default async function BlogsAuthor({
  params: { username },
}: {
  params: { username: string };
}) {
  const user = await getUserByUsername(username);
  const authorsBlogs = await getAllBlogsByAuthorUsername(username);

  return (
    <Template>
      <BlogSection
        blogHeading={`Blog oleh ${user[0].name}`}
        headlineNewestBlogs={authorsBlogs?.data}
      />
    </Template>
  );
}
