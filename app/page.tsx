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
      <Navbar logoContent={logoContent} />
    </main>
  );
}
