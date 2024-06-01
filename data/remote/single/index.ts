async function getHeaderContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/header-content?populate=*`,
  );

  return response.json();
}

async function getHomePageContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/home-page-content?populate=hero_section_images`,
  );

  return response.json();
}

async function getFooterContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/footer-content`,
  );

  return response.json();
}

export { getHeaderContent, getHomePageContent, getFooterContent };
