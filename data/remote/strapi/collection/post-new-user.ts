import { generateRandomString, getUsernameFromEmail } from '@/utils';

export default async function postNewUser({
  name,
  email,
  phoneNumber,
  interest,
  occupation,
  institution,
  address,
}: {
  name: string;
  email: string;
  phoneNumber: string;
  interest: string;
  occupation: string;
  institution: string;
  address: string;
}) {
  try {
    const username = getUsernameFromEmail(email);
    const password = generateRandomString(10);
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/auth/local/register`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
          name,
          phoneNumber: `62${phoneNumber}`,
          interest,
          occupation,
          institution,
          address,
        }),
      },
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
