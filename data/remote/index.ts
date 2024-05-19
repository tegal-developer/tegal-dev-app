async function getLogoContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/logo-content?populate=*`,
  );

  return response.json();
}

async function getHomePageContent() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/home-page-content`,
  );

  return response.json();
}

async function getInvitationLinks() {
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

async function getCommunityPhotos() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/community-photos?populate=photos`,
  );

  return response.json();
}

async function getCommunityActivities() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/community-activities?populate=images`,
  );

  return response.json();
}

async function getFAQs() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/faqs`,
  );

  return response.json();
}

async function getAllServices() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_BASE_URL}/api/services`,
  );

  return response.json();
}

export {
  getLogoContent,
  getHomePageContent,
  getInvitationLinks,
  postNewsLetterSubscriber,
  getCommunityPhotos,
  getCommunityActivities,
  getFAQs,
  getAllServices,
};
