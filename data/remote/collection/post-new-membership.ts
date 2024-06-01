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
  const formData = new FormData();

  formData.append('token', `${process.env.NEXT_PUBLIC_EDITECH_TOKEN}`);
  formData.append('name', name);
  formData.append('username', username);
  formData.append('email', email);
  formData.append('whatsapp', whatsapp);
  formData.append('instagram', instagram);
  formData.append('linkedin', linkedin);
  formData.append('photo', photo as File);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_EDITECH_API_BASE_URL}/registration-new-members`,
    {
      method: 'POST',
      headers: {
        'x-username': process.env.NEXT_PUBLIC_EDITECH_X_USERNAME,
        'x-password': process.env.NEXT_PUBLIC_EDITECH_X_PASSWORD,
      },
      body: formData,
    },
  );

  const responseJson = await response.json();

  if (!response.ok) throw new Error(responseJson);

  return responseJson;
}
