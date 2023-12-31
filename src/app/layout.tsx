import './globals.css';
import type { Metadata } from 'next';
import { LayoutProps } from '@/types/interface';
import Header from '@/components/layout/header/Header';
import MainWrap from '@/components/layout/MainWrap';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: LayoutProps) {
  return (
    <html>
      <body>
        <Header />
        <MainWrap>
          {children}
        </MainWrap>
        <footer>[footer]</footer>
      </body>
    </html>
  )
}
