import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';
import { cn } from './components/lib/utils';

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
          'bg-gradient-to-l from-slate-950  to-mountain-mist-950  ',
          poppins.className
        )}
      >
        {children}
      </body>
    </html>
  );
}
