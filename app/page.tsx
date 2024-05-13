import Navbar from '@/components/molecules/Navbar';

async function getLogoContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/logo-content?populate=image`,
  );

  return response.json();
}

export default async function Home() {
  const logoContent = await getLogoContent();

  return (
    <main>
      <Navbar
        imageSource={`${process.env.NEXT_PUBLIC_CMS_BASE_URL}${logoContent.data?.attributes?.image?.data?.attributes?.url}`}
        imageAlt={logoContent?.data?.attributes?.alt}
        imageWidth={logoContent?.data?.attributes?.width}
        imageHeight={logoContent?.data?.attributes?.height}
      />
    </main>
  );
}
