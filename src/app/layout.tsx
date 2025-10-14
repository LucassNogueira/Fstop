import type { Metadata } from 'next';
import { Providers } from '@/shared/providers/Providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'F-Stop | Formula 1 Hub',
  description: 'Your complete Formula 1 racing hub - drivers, teams, circuits, and more',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
