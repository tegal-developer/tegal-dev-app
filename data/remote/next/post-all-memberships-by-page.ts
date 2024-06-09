export default async function postAllMembershipsByPage(page: number) {
  try {
    const response = await fetch('api/memberships', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      } as HeadersInit,
      body: JSON.stringify({ page }),
    });

    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
