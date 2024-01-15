import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
// Components
import Header from './components/Header'
import Footer from './components/Footer'

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
      <body className={inter.className}>
        <Header />
            {children}
        <Footer />
      </body>
    </html>
  )
}
