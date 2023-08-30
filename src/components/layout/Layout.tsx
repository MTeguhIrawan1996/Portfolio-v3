import { ThemeProvider } from 'next-themes';
import * as React from 'react';

import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem={false}>
      <Header />
      {children}
    </ThemeProvider>
  );
}
