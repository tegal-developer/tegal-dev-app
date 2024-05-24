async function getHeaderContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/header-content?populate=*`,
  );

  return response.json();
}

async function getHomePageContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/home-page-content?populate=hero_section_images`,
  );

  return response.json();
}

async function getAllInvitationLinks() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/invitation-links`,
  );

  return response.json();
}

async function postNewsLetterSubscriber(email: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/newsletter-subscribers`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ data: { email } }),
    },
  );

  return response.json();
}

async function getAllCommunityBenefits() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/community-benefits`,
  );

  return response.json();
}

async function getAllCommunityHastags() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/community-hashtags`,
  );

  return response.json();
}

async function getAllCommunityActivities() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/community-activities?populate=images`,
  );

  return response.json();
}

async function getAllFAQs() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/faqs`,
  );

  return response.json();
}

async function getFooterContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/footer-content`,
  );

  return response.json();
}

export {
  getHeaderContent,
  getHomePageContent,
  getAllInvitationLinks,
  postNewsLetterSubscriber,
  getAllCommunityBenefits,
  getAllCommunityHastags,
  getAllCommunityActivities,
  getAllFAQs,
  getFooterContent,
};
