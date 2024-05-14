import Footer from '@/components/molecules/Footer';
import Header from '@/components/molecules/Header';
import Hero from '@/components/molecules/Hero';

async function getLogoContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/logo-content?populate=image`,
  );

  return response.json();
}

export default async function Home() {
  const logoContent = await getLogoContent();

  return (
    <>
      <Header
        imageSource={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${logoContent.data?.attributes?.image?.data?.attributes?.url}`}
        imageAlt={logoContent?.data?.attributes?.alt}
        imageWidth={logoContent?.data?.attributes?.width}
        imageHeight={logoContent?.data?.attributes?.height}
      />
      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}
