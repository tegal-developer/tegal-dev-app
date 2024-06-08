export default async function postSendMailRSVP({
  rsvpName,
  rsvpEmail,
  rsvpAttendanceQRCode,
  eventName,
  eventDate,
  eventTime,
  eventLocation,
  eventGMAPLocationLink,
}: {
  rsvpName: string;
  rsvpEmail: string;
  rsvpAttendanceQRCode: string;
  eventName: string;
  eventDate: string;
  eventTime: string;
  eventLocation: string;
  eventGMAPLocationLink: string;
}) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_CMS_API_BASE_URL}/api/send-mail/rsvp`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          rsvpName,
          rsvpEmail,
          rsvpAttendanceQRCode,
          eventName,
          eventDate,
          eventTime,
          eventLocation,
          eventGMAPLocationLink,
        }),
      },
    );

    return response.json();
  } catch (error) {
    throw new Error((error as Error).message);
  }
}
