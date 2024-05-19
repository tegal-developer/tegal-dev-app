import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import './globals.css';
import Provider from '@/contexts/provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Tegal Dev',
  description: 'Ngopi | Ngoding | Nginovasi',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Toaster position="bottom-center" />
          {children}
        </Provider>
      </body>
    </html>
  );
}
