import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: String(process.env.NEXT_PUBLIC_SMTP_SERVER),
  port: Number(process.env.NEXT_PUBLIC_SMTP_PORT),
  secure: false,
  auth: {
    user: String(process.env.NEXT_PUBLIC_SMTP_LOGIN),
    pass: String(process.env.NEXT_PUBLIC_SMTP_PASSWORD),
  },
});

async function sendNewsletterSubscriptionConfirmationMail(
  targetName: string,
  targetMail: string,
) {
  const info = await transporter.sendMail({
    from: '"Info Tegal Dev" <info@tegal.dev>',
    to: targetMail,
    subject: 'Konfirmasi Langganan Newsletter Tegal Dev',
    html: '<b>Hello world?</b>',
  });

  console.log('Message sent: %s', info.messageId);
}

async function sendRegistrationNewMembershipConfirmationMail(
  targetName: string,
  targetMail: string,
) {
  const info = await transporter.sendMail({
    from: '"No Reply Tegal Dev" <noreply@tegal.dev>',
    to: targetMail,
    subject: 'Konfirmasi Registrasi Keanggotaan Tegal Dev',
    html: '<b>Hello world?</b>',
  });

  console.log('Message sent: %s', info.messageId);
}

export {
  sendNewsletterSubscriptionConfirmationMail,
  sendRegistrationNewMembershipConfirmationMail,
};
