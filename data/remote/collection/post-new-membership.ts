export default async function postNewMembership({
  name,
  username,
  email,
  whatsapp,
  instagram,
  linkedin,
  photo,
}: {
  name: string;
  username: string;
  email: string;
  whatsapp: string;
  instagram: string;
  linkedin: string;
  photo: File;
}) {
  try {
    const formData = new FormData();

    formData.append('name', name);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('whatsapp', `62${whatsapp}`);
    formData.append('instagram', instagram);
    formData.append('linkedin', linkedin);
    formData.append('photo', photo as File);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_TEGAL_DEV_API_BASE_URL}/memberships`,
      {
        method: 'POST',
        body: formData,
      },
    );

    const responseJson = await response.json();

    return responseJson;
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
