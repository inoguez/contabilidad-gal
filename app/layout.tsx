import type { Metadata } from 'next';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import { Roboto } from 'next/font/google';
import './globals.css';
import { cn } from './components/lib/utils';
import Link from 'next/link';
import { SquareArrowOutUpRight } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Toaster } from '@/components/ui/sonner';
const poppins = Roboto({ weight: ['100', '400', '900'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Contabilidad GAL',
  description: 'Contabilidad para tu negocio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={cn(
          'bg-gradient-to-l from-slate-950  to-mountain-mist-950  !p-4 flex flex-col gap-1 min-h-screen',
          poppins.className
        )}
      >
        <NextThemesProvider
          attribute='class'
          defaultTheme='dark'
          enableSystem
          // disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Toaster />
          <footer className='flex justify-between'>
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
