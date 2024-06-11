import BlogDetailSection from '@/components/organisms/BlogDetailSection';
import Template from '@/components/templates/Template';
import getBlogDetailPageContent from '@/data/remote/strapi/single/get-blog-detail-page-content';

export default async function BlogDetail() {
  const blogDetailPageContent = await getBlogDetailPageContent();

  return (
    <Template>
      <BlogDetailSection
        blogDetailHeading={blogDetailPageContent?.data?.attributes?.heading}
      />
    </Template>
  );
}
