'use client';

import { ThemeProvider } from 'next-themes';

function ProviderTheme({ children }: { children: any }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export { ProviderTheme };
