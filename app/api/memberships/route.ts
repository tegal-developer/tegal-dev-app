import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { page } = await request.json();
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_EDITECH_API_BASE_URL}/members`,
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'x-username': process.env.NEXT_PUBLIC_EDITECH_X_USERNAME || '',
          'x-password': process.env.NEXT_PUBLIC_EDITECH_X_PASSWORD || '',
        } as HeadersInit,
        body: JSON.stringify({
          token: process.env.NEXT_PUBLIC_EDITECH_TOKEN || '',
          page,
        }),
      },
    );

    const responseJson = await response.json();

    return NextResponse.json(
      { error: false, data: { members: [...responseJson.members] } },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json({
      error: true,
      message: (error as Error).message,
    });
  }
}
