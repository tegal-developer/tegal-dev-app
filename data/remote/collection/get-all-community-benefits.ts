export default async function getAllCommunityBenefits() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/community-benefits`,
  );

  return response.json();
}
