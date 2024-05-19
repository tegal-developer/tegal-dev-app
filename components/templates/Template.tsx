import { getLogoContent } from '@/data/remote';
import Header from '../organisms/Header';
import Footer from '../organisms/Footer';

export default async function Template({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const logoContent = await getLogoContent();

  return (
    <>
      <Header
        logoImageLightSource={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${logoContent.data?.attributes?.image_light?.data?.attributes?.url}`}
        logoImageDarkSource={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${logoContent.data?.attributes?.image_dark?.data?.attributes?.url}`}
        logoImageAlt={logoContent?.data?.attributes?.alt}
        logoImageWidth={logoContent?.data?.attributes?.width}
        logoImageHeight={logoContent?.data?.attributes?.height}
      />
      <main>{children}</main>
      <Footer />
    </>
  );
}
