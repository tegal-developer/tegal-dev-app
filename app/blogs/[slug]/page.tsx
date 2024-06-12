import BlogDetailSection from '@/components/organisms/BlogDetailSection';
import Template from '@/components/templates/Template';
import getBlogDetailBySlug from '@/data/remote/strapi/collection/get-blog-by-slug';

export default async function BlogDetail({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const blogDetail = await getBlogDetailBySlug(slug);

  return (
    <Template>
      <BlogDetailSection blogDetail={blogDetail?.data[0]} />
    </Template>
  );
}
