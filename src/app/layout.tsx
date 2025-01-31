import CustomProvider from './wrapper';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar/page';
import ProtectedRouteWrapper from './components/ProtectedRoute/page';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CustomProvider>
          <Navbar />
          {/* <ProtectedRouteWrapper> */}
            {children}
            {/* </ProtectedRouteWrapper> */}
        </CustomProvider>
      </body>
    </html>
  );
}
