import { Container, Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import SideBar from './SideBar';
import UserAvatar from './UserAvatar';
import AuthProvider from './auth/provider';
import './globals.css';
import MainContainer from './MainContainer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="light">
      <body className={inter.className}>
        <AuthProvider>
          <Theme appearance="light" accentColor="teal" radius="large">
            <div className="flex">
              <SideBar />
              <main>
                <UserAvatar />
                <MainContainer>{children}</MainContainer>
              </main>
            </div>
          </Theme>
        </AuthProvider>
      </body>
    </html>
  );
}
