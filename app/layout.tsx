import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import './globals.css';
import FABThemeSwitcher from '@/components/molecules/FABThemeSwitcher';
import { ProviderTheme } from '@/contexts';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Tegal Dev',
  description: 'Ngopi. Ngoding. Nginovasi.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={plusJakartaSans.className}>
        <ProviderTheme>
          <Toaster position="bottom-center" />
          <FABThemeSwitcher />
          {children}
        </ProviderTheme>
      </body>
    </html>
  );
}
