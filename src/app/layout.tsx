// components/RootLayout.tsx
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import HeaderTemplet from './headbodytemplet/page'
import Footer from './footer/page'
import Header from './headbody/page'
import HeadBoady from './homebody/page'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={inter.className}> <Header/><HeadBoady/>
          {children}
          <Footer/>
      </body>
    </html>
  )
}
