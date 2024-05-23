import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Toaster } from 'react-hot-toast';

import './globals.css';
import Provider from '@/contexts/provider';
import ThemeSwitcher from '@/components/molecules/ThemeSwitcher';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

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
      <body className={poppins.className}>
        <Provider>
          <div
            className="
              fixed
              bottom-5
              flex
              items-center
              justify-center
              right-5
              bg-[#1B71D8]
              p-3
              rounded-full
              z-40
              md:hidden"
          >
            <ThemeSwitcher />
          </div>
          <Toaster position="bottom-center" />
          {children}
        </Provider>
      </body>
    </html>
  );
}
