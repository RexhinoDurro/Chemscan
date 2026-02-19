import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'ChemScan - Photomath for Chemistry',
  description: 'Scan chemical equations, calculate stoichiometry, check safety, and generate lab procedures.',
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/app_logo.png', sizes: '1024x1024', type: 'image/png' },
    ],
    apple: [
      { url: '/app_logo.png', sizes: '1024x1024', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'ChemScan',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans bg-dark-200">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
