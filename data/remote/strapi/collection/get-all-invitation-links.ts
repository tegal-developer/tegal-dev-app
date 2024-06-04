export default async function getAllInvitationLinks() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/invitation-links`,
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
