import BlogSection from '@/components/organisms/BlogSection';
import Template from '@/components/templates/Template';
import getAllNewestBlogsByPage from '@/data/remote/strapi/collection/get-all-newest-blogs-by-page';
import getBlogsPageContent from '@/data/remote/strapi/single/get-blogs-page-content';

export default async function Blogs() {
  const blogsPageContent = await getBlogsPageContent();
  const headlineNewestBlogs = await getAllNewestBlogsByPage(1);

  return (
    <Template>
      <BlogSection
        blogHeading={blogsPageContent?.data?.attributes?.heading}
        headlineNewestBlogs={headlineNewestBlogs?.data}
      />
    </Template>
  );
}
