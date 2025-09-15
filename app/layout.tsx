import type { Metadata } from 'next';
import ClientProviders from './client-providers';
import '../src/index.css';

export const metadata: Metadata = {
  title: 'Steven Arellano',
  description: 'Personal website of Steven Arellano',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ClientProviders>
          {children}
        </ClientProviders>
      </body>
    </html>
  );
}
