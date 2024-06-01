import { getFooterContent, getHeaderContent } from '@/data/remote/single';
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
        logoImageLightSource={`${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}${headerContent.data?.attributes?.logo_image_light?.data?.attributes?.url}`}
        logoImageDarkSource={`${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}${headerContent.data?.attributes?.logo_image_dark?.data?.attributes?.url}`}
        logoImageAlt={headerContent?.data?.attributes?.logo_image_alt}
        logoImageWidth={headerContent?.data?.attributes?.logo_image_width}
        logoImageHeight={headerContent?.data?.attributes?.logo_image_height}
      />
      <main>{children}</main>
      <Footer content={footerContent?.data?.attributes?.content} />
    </>
  );
}
