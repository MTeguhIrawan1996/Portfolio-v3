import { ThemeProvider } from 'next-themes';
import * as React from 'react';

import Header from '@/components/layout/Header';

import clsxm from '@/utils/lib/clsxm';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute='class'>
      <Header />
      <main className={clsxm('min-h-[calc(100vh-64px)]')}>{children}</main>
    </ThemeProvider>
  );
}
