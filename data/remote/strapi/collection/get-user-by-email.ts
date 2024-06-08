export default async function getUserByEmail(email: string) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/users?filters[email]=${email}`,
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
