import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    formData.append('token', `${process.env.NEXT_PUBLIC_EDITECH_TOKEN}`);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_EDITECH_API_BASE_URL}/registration-new-members`,
      {
        method: 'POST',
        headers: {
          'x-username': process.env.NEXT_PUBLIC_EDITECH_X_USERNAME || '',
          'x-password': process.env.NEXT_PUBLIC_EDITECH_X_PASSWORD || '',
        } as HeadersInit,
        body: formData,
      },
    );

    const responseJson = await response.json();

    if (!responseJson.value)
      return NextResponse.json(
        { error: true, message: responseJson.message },
        { status: 400 },
      );

    return NextResponse.json(
      { error: false, data: responseJson },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({
      error: true,
      message: (error as Error).message,
    });
  }
}
