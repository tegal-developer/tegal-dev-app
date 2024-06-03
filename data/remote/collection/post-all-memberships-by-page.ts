export default async function getAllMembershipsByPage(page: number) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TEGAL_DEV_API_BASE_URL}/memberships`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        } as HeadersInit,
        body: JSON.stringify({ page }),
      },
    );

    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
