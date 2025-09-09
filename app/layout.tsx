import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const inter = Inter({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Khorasan - Discover the Soul of Afghanistan',
  description: 'Authentic, safe, unforgettable adventures in Afghanistan. Experience the heart of Afghan culture with our expert-guided tours.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.className}`}>
        <Navbar />
        <main className="pt-0 md:pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
