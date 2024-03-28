import type { Metadata } from 'next';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { Open_Sans } from 'next/font/google';
import './globals.css';
import { cn } from './components/lib/utils';
import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Toaster } from '@/components/ui/sonner';
const poppins = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Contabilidad GAL',
  description: 'Contabilidad para tu negocio',
  generator: 'Next.js',
  applicationName: 'Next.js',
  referrer: 'origin-when-cross-origin',
  keywords: ['Contabilidad', 'GAL', 'Servicios'],
  authors: [{ name: 'Ian Noguez', url: 'https://inoguez.com' }],
  creator: 'Ian Noguez',
  icons: {
    icon: '/icon.ico',
  },
  openGraph: {
    title: 'Contabilidad GAL - Servicios contables y financieros',
    description:
      'Potencia tu éxito Financiero con nuestros servicios contables, alcanza tus metas de tu negocio o personales. Expertos en contabilidad para impulsar tus finanzas. ¡Contáctanos ahora!',
    url: 'https://contabilidadgal.com',
    siteName: 'Contabilidad GAL',
    images: [
      {
        url: 'https://contabilidadgal.com/og-image.png', // Must be an absolute URL
        width: 1200,
        height: 630,
        alt: 'Logotipo de contabilidad gal',
      },
      {
        url: 'https://contabilidadgal.com/og-image.png', // Must be an absolute URL
        width: 1800,
        height: 1600,
        alt: 'Logotipo de contabilidad gal',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn('   flex flex-col gap-1 min-h-screen', poppins.className)}
      >
        <link rel='icon' href={'/icon.ico'} sizes='any' />
        <NextThemesProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          // disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
          <footer className='flex justify-between p-2'>
            <h3 className=' font-normal text-sm'>
              Copyright © Contabilidad GAL
            </h3>
            <h3 className='font-normal text-sm flex gap-1'>
              powered by
              <Link
                target='_blank'
                href='https://inoguez.com'
                className='flex gap-1 text-vermilion-300'
              >
                Ian Noguez <SquareArrowOutUpRight size={16} />
              </Link>
            </h3>
          </footer>
        </NextThemesProvider>
      </body>
    </html>
  );
}
