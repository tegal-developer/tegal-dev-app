import { getFooterContent, getHeaderContent } from '@/data/remote/strapi/single';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

export default async function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const headerContent = await getHeaderContent();
  const footerContent = await getFooterContent();

  return (
    <>
      <Header
        logoImageLightSource={`${headerContent.data?.attributes?.logo_image_light?.data?.attributes?.url}`}
        logoImageDarkSource={`${headerContent.data?.attributes?.logo_image_dark?.data?.attributes?.url}`}
        logoImageAlt={headerContent?.data?.attributes?.logo_image_alt}
        logoImageWidth={headerContent?.data?.attributes?.logo_image_width}
        logoImageHeight={headerContent?.data?.attributes?.logo_image_height}
      />
      <main>{children}</main>
      <Footer content={footerContent?.data?.attributes?.content} />
    </>
  );
}
