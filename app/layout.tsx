import type { Metadata } from 'next'
import { Josefin_Sans } from 'next/font/google'
import localFont from 'next/font/local';

import Navbar from '@/components/global/navbar'
import './globals.css'

const josefin_sans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin-sans',
  display: 'swap',
});

const jelani = localFont({
  src: [
    {
      path: '../assets/fonts/jelani.woff',
    },
    {
      path: '../assets/fonts/jelani.otf'
    }
  ],
  variable: '--font-jelani',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Afrigallery',
  description: 'Stroll through the Beauty of Africa',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${josefin_sans.variable} ${jelani.variable}`}>
      <body className="side-pad max-w-screen-2xl mx-auto bg-black text-white font-josefin">
        <Navbar />
        <div className="mt-20 md:mt-24 lg:mt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
