import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// Components
import Header from './components/Header'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'BDKI boilerplate',
  description: 'One liner description of your app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Header />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
