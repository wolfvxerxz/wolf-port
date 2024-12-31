import type { Metadata, Viewport } from 'next';
import './globals.css';
import { ThemeProvider } from '@/providers/theme';
import { Header } from '@/components/header';

import ogImage from './og.png';
import { Analytics } from '@/components/analytics';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { SnowfallComponent } from '@/components/snowfall';
import { Fraunces } from 'next/font/google';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '600', '700'], // Choose the weights you need
  variable: '--font-inter', // Make the font variable available globally
});


const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700'], // Choose the weights you need
  variable: '--font-fraunces',
});



export const metadata: Metadata = {
  metadataBase: new URL('https://icons.pqoqubbw.dev'),
  openGraph: {
    title: 'pqoqubbw/icons',
    description: 'beautifully crafted animated icons',
    siteName: 'pqoqubbw/icons',
    type: 'website',
    locale: 'en_US',
    url: 'https://icons.pqoqubbw.dev',
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': -1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  applicationName: 'pqoqubbw/icons',
  appleWebApp: {
    title: 'pqoqubbw/icons',
    statusBarStyle: 'default',
    capable: true,
  },
  title: {
    default: 'pqoqubbw/icons',
    template: `%s - pqoqubbw/icons`,
  },
  description: 'beautifully crafted animated icons',
  twitter: {
    card: 'summary_large_image',
    title: 'pqoqubbw/icons',
    description: 'beautifully crafted animated icons',
    creator: '@pqoqubbw',
    images: [
      {
        url: ogImage.src,
        width: ogImage.width,
        height: ogImage.height,
      },
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  userScalable: false,
  maximumScale: 1,
  minimumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fraunces.variable} ${inter.variable}  antialiased relative bg-background dark:bg-[#151515]`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <NuqsAdapter>
            {children}
            <SnowfallComponent />
          </NuqsAdapter>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
